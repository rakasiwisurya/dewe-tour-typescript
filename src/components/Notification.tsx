import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { INotification } from "@/interfaces";
import { capitalize } from "@/utils";

const Notification = ({ isOpen, onClose, severity, message }: INotification) => {
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        <AlertTitle>{capitalize(severity)}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
