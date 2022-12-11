import { Box, colors, Stack, TextField, Typography } from "@mui/material";
import { HibiscusSmall, PalmSmall } from "@/assets";
import { LightBox, Notification } from "@/components";
import { useModalLogin } from "@/hooks";
import { IModalLogin } from "@/interfaces";
import { LoadingButton } from "@mui/lab";

const ModalLogin = ({ isOpen, onClose, onSwitch }: IModalLogin) => {
  const {
    isLoginLoading,
    loginSuccess,
    loginErrors,
    handleNotifClose,
    handleChange,
    handleSubmit,
  } = useModalLogin({
    onClose,
  });

  return (
    <>
      <LightBox
        open={isOpen}
        onClose={onClose}
        boxProps={{ component: "form", onSubmit: handleSubmit }}
      >
        <Box width="100%" textAlign="center" position="relative">
          <Box
            component="img"
            src={PalmSmall}
            alt="Palm Small"
            position="absolute"
            height={70}
            top={-32}
            left={-32}
          />
          <Box
            component="img"
            src={HibiscusSmall}
            alt="Hibiscus Small"
            position="absolute"
            height={50}
            top={-32}
            right={-32}
          />

          <Typography
            id="transition-modal-title"
            variant="h5"
            component="h2"
            fontWeight={600}
            mb={4}
          >
            Login
          </Typography>
        </Box>

        <Stack spacing={4}>
          <Box>
            <Typography fontWeight={600}>Email</Typography>
            <TextField
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              size="small"
              fullWidth
              required
            />
          </Box>
          <Box>
            <Typography fontWeight={600}>Password</Typography>
            <TextField
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              size="small"
              fullWidth
              required
            />
          </Box>
          <Box>
            <LoadingButton
              loading={isLoginLoading}
              variant="contained"
              fullWidth
              sx={{ mb: 2 }}
              type="submit"
            >
              Login
            </LoadingButton>
            <Typography fontSize={14} color={colors.grey["500"]}>
              Don't have an account?{" "}
              <Box component="span" fontWeight={600} onClick={onSwitch} sx={{ cursor: "pointer" }}>
                Klik Here
              </Box>
            </Typography>
          </Box>
        </Stack>
      </LightBox>

      <Notification
        isOpen={!!loginSuccess}
        onClose={handleNotifClose}
        severity="success"
        message={loginSuccess}
      />

      <Notification
        isOpen={!!loginErrors}
        onClose={handleNotifClose}
        severity="error"
        message={loginErrors}
      />
    </>
  );
};

export default ModalLogin;
