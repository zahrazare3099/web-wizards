import { ReactNode } from "react";
import { ComponentBase } from "../types/component-base.type";

export type BadgeProps = Omit<ComponentBase, "isDisable"> & {
  children: ReactNode;
};
