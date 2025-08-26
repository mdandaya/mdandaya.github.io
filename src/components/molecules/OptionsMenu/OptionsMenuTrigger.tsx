import { Div } from "@/components/atoms/Div/Div";
import { cloneElement, CSSProperties, ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import { OptionsMenu } from "./OptionsMenu";

// Define the expected props for the trigger component.
interface TriggerComponentProps {
  style: CSSProperties;
  onClick?: (event: React.MouseEvent) => void;
}

interface Props {
  persistWhenClicked?: boolean;
  component: ReactElement<TriggerComponentProps>;
  children?: ReactNode;
  optionsStyle?: CSSProperties;
  optionsClassName?: string;
  disabled?: boolean;
  offset?: { x?: number; y?: number };
}

export const OptionsMenuTrigger = ({ component, optionsStyle, optionsClassName, offset, children, persistWhenClicked, disabled }: Props) => {
  // Track window focus.
  const [isFocused, setIsFocused] = useState(document.hasFocus());
  useEffect(() => {
    const update = () => setIsFocused(document.hasFocus());
    window.addEventListener("focus", update);
    window.addEventListener("blur", update);
    return () => {
      window.removeEventListener("focus", update);
      window.removeEventListener("blur", update);
    };
  }, []);

  // This ref is attached to the root of this component.
  const ref = useRef<HTMLDivElement>(null);
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const isOpen = isToggled && isFocused;

  const handleClick = () => {
    setIsToggled((prev) => !prev);
  };

  // Touch hold logic: if the user touches and holds for 500ms, open the menu.
  const touchHoldTimeout = useRef<number | null>(null);

  // Detect the component's direct parent and attach touch events to it.
  useEffect(() => {
    const parentElement = ref.current?.parentElement;
    const handleTouchStart = () => {
      if (disabled) return;
      touchHoldTimeout.current = window.setTimeout(() => {
        setIsToggled(true);
        touchHoldTimeout.current = null;
      }, 500);
    };

    const handleTouchEnd = () => {
      if (touchHoldTimeout.current) {
        clearTimeout(touchHoldTimeout.current);
        touchHoldTimeout.current = null;
      }
    };
    if (parentElement) {
      parentElement.addEventListener("touchstart", handleTouchStart);
      parentElement.addEventListener("touchend", handleTouchEnd);
      parentElement.addEventListener("touchcancel", handleTouchEnd);
    }
    return () => {
      if (parentElement) {
        parentElement.removeEventListener("touchstart", handleTouchStart);
        parentElement.removeEventListener("touchend", handleTouchEnd);
        parentElement.removeEventListener("touchcancel", handleTouchEnd);
      }
    };
  }, [disabled]);

  // Clone the provided component to inject our onClick behavior.
  const ClonedChild = cloneElement(component, {
    style: { ...component.props.style, cursor: "pointer" },
    onClick: (event: React.MouseEvent) => {
      event.stopPropagation();
      if (component.props.onClick) {
        component.props.onClick(event);
      }
      if (!disabled) {
        handleClick();
      }
    },
  });

  return (
    <Div ref={ref} className="relative">
      {ClonedChild}
      <OptionsMenu
        offset={offset}
        visible={isOpen}
        onClickOutside={() => setIsToggled(false)}
        onClickInside={persistWhenClicked ? () => {} : handleClick}
        style={optionsStyle}
        className={optionsClassName}
      >
        {children}
      </OptionsMenu>
    </Div>
  );
};
