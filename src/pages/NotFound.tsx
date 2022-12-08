import { Box, colors, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="main"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
    >
      <Stack spacing={1} alignItems="center">
        <Typography component="h1" color={colors.grey[700]} variant="h1" fontWeight={600}>
          404
        </Typography>
        <Typography component="p" color={colors.grey[700]} variant="h5" fontWeight={600}>
          Page Not Found
        </Typography>
        <Button variant="contained" onClick={() => navigate(-1)} fullWidth>
          Back
        </Button>
      </Stack>
    </Box>
  );
};

export default NotFound;
