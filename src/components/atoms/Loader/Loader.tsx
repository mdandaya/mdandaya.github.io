import colors from "@/theme/colors";
import ReactSpinnersLoader from "react-spinners/ClipLoader";
import { LoaderSizeProps } from "react-spinners/helpers/props";

export const Loader: React.FC<LoaderSizeProps> = (props) => {
  // const override: CSSProperties = {
  //   display: "block",
  //   margin: "0 auto",
  //   borderColor: "red",
  // };

  return (
    <>
      <ReactSpinnersLoader
        color={colors.secondary}
        // cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
        {...props}
      />
    </>
  );
};
