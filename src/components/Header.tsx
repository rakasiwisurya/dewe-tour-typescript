import { AppBar, Box, Button, Container, Stack, Toolbar } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DeweTourLogo } from "../assets";
import { ModalLogin, ModalRegister } from "./Modals";

const Header = () => {
  const [isModalLoginAvailable, setIsModalLoginAvailable] = useState(false);
  const [isModalRegisterAvailable, setIsModalRegisterAvailable] = useState(false);

  const handleModalLoginOpen = () => setIsModalLoginAvailable(true);
  const handleModalRegisterOpen = () => setIsModalRegisterAvailable(true);
  const handleModalSwitch = () => {
    setIsModalLoginAvailable((prevState) => !prevState);
    setIsModalRegisterAvailable((prevState) => !prevState);
  };
  const handleModalClose = () => {
    setIsModalLoginAvailable(false);
    setIsModalRegisterAvailable(false);
  };

  return (
    <Box component="header">
      <AppBar position="fixed" color="transparent" className="main-bg" sx={{ boxShadow: "none" }}>
        <Container>
          <Toolbar>
            <Stack
              width="100%"
              justifyContent={{ xs: "center", sm: "space-between" }}
              direction={{ xs: "column", sm: "row" }}
            >
              <Link to="/">
                <Box component="img" src={DeweTourLogo} alt="Dewe Tour Logo" height={68} />
              </Link>
              <Stack
                width={{ xs: "100%", sm: 210 }}
                direction={{ xs: "column", sm: "row" }}
                alignItems="center"
              >
                <Box width={{ xs: "100%", sm: 105 }} marginX={1} marginY={{ xs: 1, sm: 0 }}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ fontWeight: 600, width: { xs: "100%", sm: 105 } }}
                    onClick={handleModalLoginOpen}
                  >
                    Login
                  </Button>
                </Box>
                <Box width={{ xs: "100%", sm: 105 }} marginX={1} marginY={{ xs: 1, sm: 0 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ fontWeight: 600, boxShadow: "none", width: { xs: "100%", sm: 105 } }}
                    onClick={handleModalRegisterOpen}
                  >
                    Register
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <ModalLogin
        isOpen={isModalLoginAvailable}
        onClose={handleModalClose}
        onSwitch={handleModalSwitch}
      />
      <ModalRegister
        isOpen={isModalRegisterAvailable}
        onClose={handleModalClose}
        onSwitch={handleModalSwitch}
      />
    </Box>
  );
};

export default Header;
