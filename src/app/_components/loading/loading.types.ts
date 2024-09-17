import { ComponentBase } from "../types/component-base.type";

export type LoadingProps = Omit<ComponentBase, "isDisable"> & {
  type?: "spinner" | "ring";
};
