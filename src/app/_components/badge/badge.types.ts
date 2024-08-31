import { ReactNode } from "react";
import { componentBase } from "../types/component-base-type";

export type BadgeProps = Omit<componentBase, "isDisable"> & {
  children: ReactNode;
};
