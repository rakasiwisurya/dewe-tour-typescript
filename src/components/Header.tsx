import { DeweTourLogo } from "../assets";
import { AppBar, Box, Button, Container, Stack, Toolbar } from "@mui/material";

const Header = () => {
  return (
    <header>
      <AppBar position="fixed" className="navbar-bg" color="transparent">
        <Container maxWidth="xl">
          <Toolbar>
            <Stack
              width="100%"
              justifyContent={{ xs: "center", sm: "space-between" }}
              direction={{ xs: "column", sm: "row" }}
            >
              <Box textAlign="center">
                <img src={DeweTourLogo} alt="Dewe Tour Logo" height={68} />
              </Box>
              <Stack
                width={{ xs: "100%", sm: 210 }}
                direction={{ xs: "column", sm: "row" }}
                alignItems="center"
              >
                <Box width={{ xs: "100%", sm: 105 }} marginX={1} marginY={{ xs: 1, sm: 0 }}>
                  <Button variant="outlined" color="secondary" fullWidth>
                    Login
                  </Button>
                </Box>
                <Box width={{ xs: "100%", sm: 105 }} marginX={1} marginY={{ xs: 1, sm: 0 }}>
                  <Button variant="contained" color="primary" fullWidth>
                    Register
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
