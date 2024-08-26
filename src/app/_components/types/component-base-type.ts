import { Size } from "./Size.type";
import { Variant } from "./Variant.type";

export type componentBase = {
  isDisable?: boolean;
  className?: string;
  variant?: Variant;
  size?: Size;
};
