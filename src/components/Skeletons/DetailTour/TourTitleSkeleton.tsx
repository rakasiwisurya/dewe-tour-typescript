import { Box, Container, Skeleton } from "@mui/material";

const TourTitleSkeleton = () => {
  return (
    <Box component="section">
      <Container>
        <Skeleton variant="text" height={40} />
        <Skeleton variant="text" height={25} />
      </Container>
    </Box>
  );
};

export default TourTitleSkeleton;
