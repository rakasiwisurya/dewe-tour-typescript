import { Box, colors, Container, Grid, Typography } from "@mui/material";
import { Calendar, Hotel, Meal, Plane, Time } from "@/assets";
import { TourInformationTripSkeleton } from "@/components";
import { ITourInformationTrip } from "@/interfaces";
import { formatDate } from "@/utils";

const TourInformationTrip = (props: ITourInformationTrip) => {
  const { isLoading, accomodation, transportation, eat, day, night, dateTrip } = props;

  if (isLoading) return <TourInformationTripSkeleton />;

  return (
    <Box component="section">
      <Container>
        <Typography component="h3" fontSize={16} fontWeight={700} mb={2}>
          Information Trip
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
            <Box>
              <Typography fontSize={13} fontWeight={600} color={colors.grey[700]} mb={1}>
                Accomodation
              </Typography>
              <Box display="flex" gap={1} alignItems="center">
                <Box component="img" src={Hotel} alt="Hotel" height={25} />
                <Typography fontWeight={600} noWrap>
                  {accomodation}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box>
              <Typography fontSize={13} fontWeight={600} color={colors.grey[700]} mb={1}>
                Transportation
              </Typography>
              <Box display="flex" gap={1} alignItems="center">
                <Box component="img" src={Plane} alt="Plane" height={25} />
                <Typography fontWeight={600} noWrap>
                  {transportation}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box>
              <Typography fontSize={13} fontWeight={600} color={colors.grey[700]} mb={1}>
                Eat
              </Typography>
              <Box display="flex" gap={1} alignItems="center">
                <Box component="img" src={Meal} alt="Meal" height={25} />
                <Typography fontWeight={600} noWrap>
                  {eat}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Box>
              <Typography fontSize={13} fontWeight={600} color={colors.grey[700]} mb={1}>
                Duration
              </Typography>
              <Box display="flex" gap={1} alignItems="center">
                <Box component="img" src={Time} alt="Time" height={25} />
                <Typography fontWeight={600} noWrap>
                  {day} Day {night} Night
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Box>
              <Typography fontSize={13} fontWeight={600} color={colors.grey[700]} mb={1}>
                Date Trip
              </Typography>
              <Box display="flex" gap={1} alignItems="center">
                <Box component="img" src={Calendar} alt="Calendar" height={25} />
                <Typography fontWeight={600} noWrap>
                  {!!dateTrip && formatDate(dateTrip)}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TourInformationTrip;
