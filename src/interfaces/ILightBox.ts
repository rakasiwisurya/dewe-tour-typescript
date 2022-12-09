import { BoxProps, ModalProps } from "@mui/material";
import { ReactNode } from "react";

export interface ILightBox {
  open: boolean;
  onClose: any;
  modalProps?: ModalProps;
  boxProps?: BoxProps;
  children?: ReactNode;
}
