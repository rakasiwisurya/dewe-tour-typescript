import { DeweTourLogo } from "../assets";
import { AppBar, Box, Button, Container, Stack, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
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
                  >
                    Login
                  </Button>
                </Box>
                <Box width={{ xs: "100%", sm: 105 }} marginX={1} marginY={{ xs: 1, sm: 0 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ fontWeight: 600, boxShadow: "none", width: { xs: "100%", sm: 105 } }}
                  >
                    Register
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
