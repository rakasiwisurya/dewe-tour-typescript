import { Box, Fade, Modal } from "@mui/material";
import { ILightBox } from "../interfaces";

const LightBox = ({ open, onClose, modalProps, boxProps, children }: ILightBox) => {
  return (
    <Modal
      {...modalProps}
      open={open}
      onClose={onClose}
      aria-labelledby="transition-modal-title"
      closeAfterTransition
    >
      <Fade in={open}>
        <Box
          {...boxProps}
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            maxHeight: "500px",
            overflowY: "scroll",
          }}
        >
          {children}
        </Box>
      </Fade>
    </Modal>
  );
};

export default LightBox;
