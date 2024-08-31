import classNames from "classnames";
import { BadgeProps } from "./badge.types";
import { Size } from "../types/Size.type";

const sizeClasses: Record<Size, string> = {
  tiny: "badge-xs",
  small: "badge-sm",
  normal: "",
  large: "badge-lg",
};
export const Badge: React.FC<BadgeProps> = (props) => {
  const { variant, className, children, size = "tiny" } = props;
  const classes = classNames(
    "Badge",
    className,
    { [`badge-${variant}`]: variant },
    { [sizeClasses[size]]: size }
  );
  return <div className={classes}>{children}</div>;
};
