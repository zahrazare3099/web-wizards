import classNames from "classnames";
import { LoadingProps } from "./loading.types";
import { Size } from "../types/size.type";

const sizeClasses: Record<Size, string> = {
  tiny: "loading-xs",
  small: "loading-sm",
  normal: "",
  large: "loading-lg",
};
export const Loading: React.FC<LoadingProps> = (props) => {
  const { type = "spinner", variant, size = "normal", className } = props;
  const classes = classNames(
    "loading",
    className,
    { [`loading-${type}`]: type },
    { [`loading-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size }
  );
  return <span className={classes}></span>;
};
