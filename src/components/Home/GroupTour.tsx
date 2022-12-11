import { Box, Container, Grid, Typography } from "@mui/material";
import { CardTour, NoData } from "@/components";
import { useGroupTour } from "@/hooks";

const GroupTour = () => {
  const { isGroupToursLoading, groupTours } = useGroupTour();

  return (
    <Box component="section" sx={{ position: "relative" }}>
      <Container>
        <Box display="flex" justifyContent="center" mb={5}>
          <Typography variant="h4" component="h2" fontWeight={600}>
            Group Tour
          </Typography>
        </Box>

        <Grid container spacing={5}>
          {isGroupToursLoading &&
            Array.from(Array(6)).map((_, index) => (
              <Grid key={`groupTour-${index}`} item sm={6} md={4}>
                <CardTour isLoading={isGroupToursLoading} />
              </Grid>
            ))}

          {!isGroupToursLoading &&
            groupTours.length > 0 &&
            groupTours.map((groupTour) => (
              <Grid key={groupTour.trip_id} item sm={6} md={4}>
                <CardTour
                  id={groupTour.trip_id}
                  image={groupTour.trip_images[0].trip_image_url}
                  quota={groupTour.quota}
                  maxQuota={groupTour.max_quota}
                  title={groupTour.title}
                  price={groupTour.price}
                  country={groupTour.country_name}
                />
              </Grid>
            ))}

          {!isGroupToursLoading && groupTours.length === 0 && (
            <Grid item xs={12}>
              <NoData />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default GroupTour;
