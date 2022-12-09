import { IModalRegister } from "@/interfaces";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { HibiscusSmall, PalmSmall } from "../../assets";
import LightBox from "../LightBox";

const ModalRegister = ({ isOpen, onClose }: IModalRegister) => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    gender: 1,
    address: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    console.log(form, "submit ...");
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
          <Typography fontWeight={600}>Phone</Typography>
          <TextField
            id="phone"
            name="phone"
            type="tel"
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Box>
        <Box>
          <Typography fontWeight={600}>Gender</Typography>
          <TextField
            id="gender"
            name="gender"
            type="text"
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Box>
        <Box>
          <Typography fontWeight={600}>Address</Typography>
          <TextField
            id="address"
            name="address"
            type="text"
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Box>
        <Box>
          <Button variant="contained" fullWidth type="submit">
            Register
          </Button>
        </Box>
      </Stack>
    </LightBox>
  );
};

export default ModalRegister;
