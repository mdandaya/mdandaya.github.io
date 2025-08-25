import { Div } from "@/components/atoms/Div/Div";
import React, { CSSProperties, ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

interface Offset {
  x?: number;
  y?: number;
}

interface Props {
  visible: boolean | undefined;
  onClickOutside: () => void;
  onClickInside: () => void;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  offset?: Offset;
}

export const OptionsMenu = ({
  visible,
  onClickOutside,
  onClickInside,
  className,
  style,
  children,
  offset = { x: 10, y: 10 },
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  // Holds the last mouse or touch position.
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [adjustedPosition, setAdjustedPosition] = useState<{ x: number; y: number } | null>(null);

  // Listen for mouse and touch events to update the menu position.
  useEffect(() => {
    const updatePositionFromMouse = (event: MouseEvent) => {
      if (!visible) {
        setMenuPosition({ x: event.clientX, y: event.clientY });
      }
    };
    const updatePositionFromTouch = (event: TouchEvent) => {
      if (!visible && event.touches.length > 0) {
        setMenuPosition({ x: event.touches[0].clientX, y: event.touches[0].clientY });
      }
    };
    window.addEventListener("mousedown", updatePositionFromMouse);
    window.addEventListener("touchstart", updatePositionFromTouch);
    return () => {
      window.removeEventListener("mousedown", updatePositionFromMouse);
      window.removeEventListener("touchstart", updatePositionFromTouch);
    };
  }, [visible]);

  // Outside click and touch handling.
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside?.();
      }
    };
    const handleOutsideTouch = (event: TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside?.();
      }
    };
    window.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("touchstart", handleOutsideTouch);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("touchstart", handleOutsideTouch);
    };
  }, [onClickOutside]);

  const handleClickChild = () => {
    onClickInside();
  };

  // Clone and modify valid children to include onClick handling.
  const ModifiedChildren = () => {
    const validChildren = React.Children.toArray(children).filter(
      (child): child is React.ReactElement<{ onClick?: React.MouseEventHandler<any> }> => React.isValidElement(child)
    );
    return validChildren.map((child) =>
      React.cloneElement(child, {
        onClick: (event: React.MouseEvent<any>) => {
          handleClickChild();
          if (child.props.onClick) {
            child.props.onClick(event);
          }
        },
      })
    );
  };

  // Calculate the adjusted position once the menu is rendered.
  useLayoutEffect(() => {
    if (visible && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      let newLeft = menuPosition.x + (offset.x || 0);
      let newTop = menuPosition.y + (offset.y || 0);

      // Adjust if the menu overflows the right side of the window.
      if (newLeft + rect.width > window.innerWidth) {
        newLeft = window.innerWidth - rect.width;
      }
      // Adjust if the menu overflows the bottom of the window.
      if (newTop + rect.height > window.innerHeight) {
        newTop = window.innerHeight - rect.height;
      }
      // Ensure positions are not negative.
      newLeft = Math.max(newLeft, 0);
      newTop = Math.max(newTop, 0);
      setAdjustedPosition({ x: newLeft, y: newTop });
    }
  }, [visible, menuPosition, offset]);

  // Use the adjusted position if available.
  const dynamicPosition: CSSProperties = visible
    ? {
        left: adjustedPosition ? adjustedPosition.x : menuPosition.x + (offset.x || 0),
        top: adjustedPosition ? adjustedPosition.y : menuPosition.y + (offset.y || 0),
      }
    : {};

  const menuElement = visible ? (
    <Div
      ref={ref}
      className={`fixed min-h-fit min-w-fit bg-white rounded-[14px] z-50 w-[190px] ${className}`}
      style={{
        boxShadow: "2px 4px 10px 0px #00000033",
        ...dynamicPosition,
        ...style,
      }}
    >
      {ModifiedChildren()}
    </Div>
  ) : null;

  return ReactDOM.createPortal(menuElement, document.body);
};
