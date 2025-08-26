import ReactMarkdown, { Options } from "react-markdown";
import { Div } from "../Div/Div";

export const Markdown: React.FC<Options> = (props) => {
  return (
    <Div className="tailwind-reset-wrapper">
      <ReactMarkdown {...props}></ReactMarkdown>
    </Div>
  );
};
