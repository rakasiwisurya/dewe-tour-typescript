import { Box, Container, Skeleton, Typography } from "@mui/material";

const TourDescriptionSkeleton = () => {
  return (
    <Box component="section">
      <Container>
        <Typography component="h3" fontSize={16} fontWeight={700} mb={2}>
          Description
        </Typography>

        <Skeleton variant="rounded" height={120} width="100%" />
      </Container>
    </Box>
  );
};

export default TourDescriptionSkeleton;
