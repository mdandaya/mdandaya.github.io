import React, { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect, useState } from "react";
import { BodyPortal } from "../BodyPortal/BodyPortal";
import { Div } from "../Div/Div";
import styles from "./Modal.module.css";

export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  side?: "right"; // | "left" in the future
  visible: boolean | undefined;
  setVisible?: (visible: boolean) => void;
  children?: ReactNode;
  disableClickOutClose?: boolean;
  onOutsideClick?: () => void;
  className?: string;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
}

// Match this to your CSS transition duration (ms)
const ANIMATION_DURATION = 500;

export const Modal = ({
  visible,
  disableClickOutClose,
  onOutsideClick,
  setVisible,
  children,
  className,
  wrapperClassName,
  wrapperStyle,
  side,
  ...props
}: ModalProps) => {
  const [shouldRender, setShouldRender] = useState(!!visible);
  const [isShowing, setIsShowing] = useState(false);

  // Handle animation-in and animation-out
  useEffect(() => {
    if (visible) {
      setShouldRender(true); // Render immediately

      // Next event loop: add .shown class for entrance animation
      const showTimeout = setTimeout(() => setIsShowing(true), 10);

      return () => clearTimeout(showTimeout);
    } else if (shouldRender) {
      setIsShowing(false); // Trigger exit animation

      // After animation, remove from DOM
      const hideTimeout = setTimeout(() => setShouldRender(false), ANIMATION_DURATION);
      return () => clearTimeout(hideTimeout);
    }
    // eslint-disable-next-line
  }, [visible]);

  const handleWrapperClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    // Make sure click is outside the modal
    if (disableClickOutClose || !visible || !isShowing) return;
    onOutsideClick?.();
    setVisible?.(false);
  };

  if (!shouldRender) return null;

  return (
    <BodyPortal>
      <Div
        className={[styles.wrapper, side === "right" ? styles.rightSide : "", wrapperClassName ?? ""].join(" ")}
        style={wrapperStyle}
        onClick={handleWrapperClick}
      >
        <Div
          {...props}
          onClick={(e) => e.stopPropagation()}
          className={[
            styles.content,
            isShowing ? styles.shown : styles.hidden,
            side === "right" ? styles.rightSide : "",
            className ?? "",
          ].join(" ")}
        >
          {children}
        </Div>
      </Div>
    </BodyPortal>
  );
};
