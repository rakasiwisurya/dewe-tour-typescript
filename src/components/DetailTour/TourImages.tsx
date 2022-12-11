import { Box, Container, Grid } from "@mui/material";
import { TourImagesSkeleton } from "@/components";
import { ITripImages, ITourImages } from "@/interfaces";

const TourImages = ({ isLoading, tripImages }: ITourImages) => {
  if (isLoading) return <TourImagesSkeleton />;

  return (
    <Box component="section">
      <Container>
        <Box
          component="img"
          src={tripImages[0].trip_image_url}
          alt={tripImages[0].trip_image_name}
          width="100%"
          overflow="hidden"
          borderRadius={2}
          mb={2}
          sx={{ maxHeight: { xs: "auto", sm: 500 } }}
        />
        <Grid container spacing={2}>
          {tripImages.map((tripImage: ITripImages, index: number) => {
            if (index > 0) {
              return (
                <Grid key={tripImage.trip_image_id} item sm={4}>
                  <Box
                    component="img"
                    src={tripImage.trip_image_url}
                    alt={tripImage.trip_image_name}
                    width="100%"
                    overflow="hidden"
                    borderRadius={2}
                    sx={{ height: { xs: "auto", sm: 200 } }}
                  />
                </Grid>
              );
            }
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default TourImages;
