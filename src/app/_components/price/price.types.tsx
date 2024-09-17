import { ComponentBase } from "../types/component-base.type";

export type PriceType = Omit<ComponentBase, "isDisable" | "variant"> & {
  price?: number;
  text?: string;
};
