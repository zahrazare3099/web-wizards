import classNames from "classnames";
import { buttonProps, ButtonShape } from "./button.types";
import { Size } from "../types/Size.type";
import { Loading } from "../loading";

const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "",
  large: "btn-lg",
};
const shapeClasses: Record<ButtonShape, string> = {
  wide: "btn-wide",
  full: "btn-full",
  square: "btn-square",
  default: "",
};

export const Button: React.FC<buttonProps> = (props) => {
  const {
    variant,
    size = "normal",
    isDisable = false,
    isOutline = false,
    shape = "default",
    isLoading = false,
    loadingType = "spinner",
    loadingText = "در حال ارسال درخواست",
    type = "button",
    isLink = false,
    animatedIcon = false,
    children,
    className,
    ...rest
  }: buttonProps = props;
  //   declare classname
  const classes = classNames(
    "btn",
    className,
    { "btn-outline": isOutline },
    { "btn-link": isLink },
    { "animated-icon": animatedIcon },
    { "pinter-events-none opacity-80": isLoading },
    { [`btn-${variant}`]: variant },
    { [sizeClasses[size]]: size },
    { [shapeClasses[shape]]: shape }
  );

  return (
    <button type={type} disabled={isDisable} {...rest} className={classes}>
      {isLoading && <Loading type={loadingType} />}
      {isLoading ? loadingText : children}
    </button>
  );
};
