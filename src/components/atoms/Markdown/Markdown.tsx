import ReactMarkdown, { Options } from "react-markdown";

export const Markdown: React.FC<Options> = (props) => {
  return (
    <>
      <ReactMarkdown className="tailwind-reset-wrapper" {...props}></ReactMarkdown>
    </>
  );
};
