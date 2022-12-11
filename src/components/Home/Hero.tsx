import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Notification } from "@/components";
import { useHero } from "@/hooks";

const Hero = () => {
  const { groupToursErrors, handleChange, handleSearch, handleNotifClose } = useHero();

  return (
    <Box
      component="section"
      className="main-bg"
      sx={{ paddingTop: { xs: 22.125, sm: 9 }, height: { xs: 532, sm: 480 } }}
    >
      <Container sx={{ height: "80%" }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="left"
          height="100%"
        >
          <Stack spacing={1} mb={6}>
            <Typography
              variant="h3"
              component="h1"
              sx={{ color: "secondary.main" }}
              fontWeight="bold"
            >
              Explore
            </Typography>
            <Typography
              variant="h3"
              component="h1"
              sx={{ color: "secondary.main" }}
              fontWeight="light"
            >
              your amazing city together
            </Typography>
          </Stack>

          <Box component="form" onSubmit={handleSearch}>
            <Box color="secondary.main" mb={1}>
              Find great places to holliday
            </Box>
            <Box display="flex">
              <TextField
                sx={{
                  backgroundColor: "secondary.main",
                  borderRadius: "5px 0 0 5px",
                }}
                fullWidth
                onChange={handleChange}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ fontWeight: 600, borderRadius: "0 5px 5px 0", px: 5, boxShadow: "none" }}
                type="submit"
              >
                Search
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      <Notification
        isOpen={!!groupToursErrors}
        onClose={handleNotifClose}
        message={groupToursErrors}
        severity="error"
      />
    </Box>
  );
};

export default Hero;
