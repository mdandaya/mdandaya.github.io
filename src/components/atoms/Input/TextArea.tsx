import { DetailedHTMLProps, TextareaHTMLAttributes, useEffect, useRef } from "react";
import styles from "./Input.module.css";

interface Props extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  /** @deprecated use readOnly so user can still read past the ellipses */
  disabled?: boolean;
  enterKeySubmits?: boolean;
}

export const TextArea = ({ enterKeySubmits, style, ...props }: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  /**
   * NOTE: This autosizing behavior means setting height will not work.
   * Use min-height and max-height properties only.
   */
  useEffect(() => {
    const adjustHeight = () => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      // Allow shrinking: simply use scrollHeight
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    };

    adjustHeight();
  }, [props.value, style?.height, style?.minHeight]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (enterKeySubmits && event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent adding a new line
      // Trigger the form submission programmatically
      const form = event.currentTarget.closest("form");
      form?.requestSubmit();
    }
  };

  return (
    <textarea
      ref={textareaRef}
      onKeyDown={handleKeyDown}
      {...props}
      className={`${styles.input} ${styles.textArea} ${(props.readOnly || props.disabled) && styles.disabled} ${
        props.className
      }`}
      style={{
        ...style,
      }}
      rows={1} // Use 1 row to allow dynamic height adjustment
    />
  );
};
