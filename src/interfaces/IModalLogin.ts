import { ModalUnstyledOwnProps } from "@mui/material";
import { MouseEventHandler } from "react";

export interface IModalLogin {
  isOpen: boolean;
  onClose: ModalUnstyledOwnProps["onClose"];
  onSwitch?: MouseEventHandler<HTMLSpanElement>;
}
