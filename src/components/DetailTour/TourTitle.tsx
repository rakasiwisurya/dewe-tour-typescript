import { Box, colors, Container, Typography } from "@mui/material";
import { TourTitleSkeleton } from "@/components";
import { ITourTitle } from "@/interfaces";

const TourTitle = ({ isLoading, title, country }: ITourTitle) => {
  if (isLoading) return <TourTitleSkeleton />;

  return (
    <Box component="section">
      <Container>
        <Typography component="h1" variant="h4" fontWeight={700}>
          {title}
        </Typography>
        <Typography component="h2" variant="h6" color={colors.grey["700"]}>
          {country}
        </Typography>
      </Container>
    </Box>
  );
};

export default TourTitle;
