import { Box, colors, Container, Typography } from "@mui/material";
import { TourDescriptionSkeleton } from "@/components";
import { ITourDescription } from "@/interfaces";

const TourDescription = ({ isLoading, description }: ITourDescription) => {
  if (isLoading) return <TourDescriptionSkeleton />;

  return (
    <Box component="section">
      <Container>
        <Typography component="h3" fontSize={16} fontWeight={700} mb={2}>
          Description
        </Typography>

        <Typography color={colors.grey[700]} textAlign="justify">
          {description}
        </Typography>
      </Container>
    </Box>
  );
};

export default TourDescription;
