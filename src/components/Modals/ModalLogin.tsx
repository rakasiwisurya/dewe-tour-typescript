import { Box, Button, colors, Fade, Modal, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { HibiscusSmall, PalmSmall } from "../../assets";
import { IModalLogin } from "../../interfaces";
import LightBox from "../LightBox";

const ModalLogin = ({ isOpen, onClose, onSwitch }: IModalLogin) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    console.log(form, "submit...");
  };

  return (
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

        <Typography id="transition-modal-title" variant="h5" component="h2" fontWeight={600} mb={4}>
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
          />
        </Box>
        <Box>
          <Button variant="contained" fullWidth sx={{ mb: 2 }} type="submit">
            Login
          </Button>
          <Typography fontSize={14} color={colors.grey["500"]}>
            Don't have an account?{" "}
            <Box component="span" fontWeight={600} onClick={onSwitch} sx={{ cursor: "pointer" }}>
              Klik Here
            </Box>
          </Typography>
        </Box>
      </Stack>
    </LightBox>
  );
};

export default ModalLogin;
