import { componentBase } from "../types/component-base-type";

export type PriceType = Omit<componentBase, "isDisable" | "variant"> & {
  price?: number;
  text?: string;
};
