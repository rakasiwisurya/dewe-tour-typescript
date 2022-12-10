import { ModalUnstyledOwnProps } from "@mui/material";
import { MouseEventHandler } from "react";

export interface IModalRegister {
  isOpen: boolean;
  onClose: ModalUnstyledOwnProps["onClose"];
  onSwitch?: MouseEventHandler<HTMLSpanElement>;
}
