import { Box, Container, Grid, Skeleton } from "@mui/material";

const TourImagesSkeleton = () => {
  return (
    <Box component="section">
      <Container>
        <Skeleton variant="rounded" height={500} width="100%" sx={{ mb: 3 }} />

        <Grid container spacing={2}>
          {Array.from(Array(3)).map((_, index) => (
            <Grid item xs={12} sm={4} key={`tourImage-${index}`}>
              <Skeleton variant="rounded" height={140} width="100%" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TourImagesSkeleton;
