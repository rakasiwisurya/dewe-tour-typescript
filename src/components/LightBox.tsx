import { Box, Fade, Modal } from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";
import { theme } from "@/data";
import { ILightBox } from "@/interfaces";

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
        <Box {...boxProps}>
          <PerfectScrollbar
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: theme.palette.background.paper,
              padding: theme.spacing(4),
              borderRadius: theme.spacing(2),
              width: 300,
              maxHeight: 400,
              height: "auto",
            }}
          >
            {children}
          </PerfectScrollbar>
        </Box>
      </Fade>
    </Modal>
  );
};

export default LightBox;
