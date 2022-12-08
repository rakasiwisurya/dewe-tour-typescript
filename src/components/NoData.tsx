import { Box, colors, Typography } from "@mui/material";

const NoData = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
      <Typography component="p" color={colors.grey[700]} variant="h5" fontWeight={600}>
        No Data Found
      </Typography>
    </Box>
  );
};

export default NoData;
