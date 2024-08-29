import { componentBase } from "../types/component-base-type";

export type LoadingProps = Omit<componentBase, "isDisable"> & {
  type?: "spinner" | "ring";
};
