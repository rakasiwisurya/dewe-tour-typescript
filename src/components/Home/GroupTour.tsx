import { Box, Grid, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks";
import CardTour from "../CardTour";

const GroupTour = () => {
  const { groupTours, isGroupToursLoading } = useAppSelector((state) => state.groupTour);

  return (
    <Box>
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

        {groupTours.length > 0 &&
          groupTours.map((groupTour) => (
            <Grid key={groupTour.trip_id} item sm={6} md={4}>
              <CardTour
                image={groupTour.trip_images[0].trip_image_url}
                quota={groupTour.quota}
                maxQuota={groupTour.max_quota}
                title={groupTour.title}
                price={groupTour.price}
                country={groupTour.country_name}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default GroupTour;
