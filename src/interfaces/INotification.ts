import { AlertProps, SnackbarProps } from "@mui/material";

export interface INotification {
  isOpen?: boolean;
  onClose?: SnackbarProps["onClose"] | AlertProps["onClose"] | any;
  severity?: AlertProps["severity"] | string | any;
  message?: string | null;
}
