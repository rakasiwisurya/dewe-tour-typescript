import { LoadingButton } from "@mui/lab";
import {
  Box,
  colors,
  MenuItem,
  Select,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { HibiscusSmall, PalmSmall } from "@/assets";
import { LightBox, Notification } from "@/components";
import { useModalRegister } from "@/hooks";
import { IModalRegister } from "@/interfaces";

const ModalRegister = ({ isOpen, onClose, onSwitch }: IModalRegister) => {
  const {
    isRegisterLoading,
    registerSuccess,
    registerErrors,
    handleNotifClose,
    handleChange,
    handleSelectChange,
    handleTextAreaChange,
    handleSubmit,
  } = useModalRegister({ onClose });

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
            Register
          </Typography>
        </Box>

        <Stack spacing={4}>
          <Box>
            <Typography fontWeight={600}>Fullname</Typography>
            <TextField
              id="fullname"
              name="fullname"
              type="text"
              onChange={handleChange}
              size="small"
              fullWidth
              required
            />
          </Box>
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
            <Typography fontWeight={600}>Phone</Typography>
            <TextField
              id="phone"
              name="phone"
              type="tel"
              onChange={handleChange}
              size="small"
              fullWidth
              required
            />
          </Box>
          <Box>
            <Typography fontWeight={600}>Gender</Typography>
            <Select
              id="gender"
              name="gender"
              onChange={handleSelectChange}
              defaultValue="1"
              size="small"
              fullWidth
              required
            >
              <MenuItem value="1">Male</MenuItem>
              <MenuItem value="2">Female</MenuItem>
            </Select>
          </Box>
          <Box>
            <Typography fontWeight={600}>Address</Typography>
            <TextareaAutosize
              id="address"
              name="address"
              onChange={handleTextAreaChange}
              minRows={4}
              maxRows={4}
              required
            />
          </Box>
          <Box>
            <Box>
              <LoadingButton
                loading={isRegisterLoading}
                variant="contained"
                fullWidth
                sx={{ mb: 2 }}
                type="submit"
              >
                Register
              </LoadingButton>
            </Box>
            <Typography fontSize={14} color={colors.grey["500"]}>
              Already have an account?{" "}
              <Box component="span" fontWeight={600} onClick={onSwitch} sx={{ cursor: "pointer" }}>
                Klik Here
              </Box>
            </Typography>
          </Box>
        </Stack>
      </LightBox>

      <Notification
        isOpen={!!registerSuccess}
        onClose={handleNotifClose}
        severity="success"
        message={registerSuccess}
      />

      <Notification
        isOpen={!!registerErrors}
        onClose={handleNotifClose}
        severity="error"
        message={registerErrors}
      />
    </>
  );
};

export default ModalRegister;
