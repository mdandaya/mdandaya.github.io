import { ReactNode } from "react";
import ReactDOM from "react-dom";

export const BodyPortal = ({ children }: { children: ReactNode }) => {
  return ReactDOM.createPortal(children, document.body);
};
