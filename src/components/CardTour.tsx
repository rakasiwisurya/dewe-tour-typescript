import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "@/data";
import { CardTourSkeleton } from "@/components";
import { ICardTour } from "@/interfaces";
import { formatCurrency } from "@/utils";

const CardTour = (props: ICardTour) => {
  const { isLoading, id, image, quota, maxQuota, title, price, country } = props;

  if (isLoading) return <CardTourSkeleton />;

  return (
    <Link to={`/trip/${id}`}>
      <Card>
        <CardContent sx={{ position: "relative" }}>
          <Box mb={2}>
            <Box
              component="img"
              src={image}
              alt="Tour"
              height={241}
              width="100%"
              sx={{ borderRadius: 1 }}
            />
            <Box
              bgcolor={theme.palette.common.white}
              p={1}
              position="absolute"
              top={40}
              right={16}
              borderRadius="4px 0px 0px 4px"
              fontWeight={600}
              fontSize={14}
            >
              {quota}/{maxQuota}
            </Box>
          </Box>

          <Stack spacing={1}>
            <Box>
              <Typography noWrap fontWeight={600}>
                {title}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box color={theme.palette.primary.main} fontWeight={600}>
                {!!price && formatCurrency(price)}
              </Box>
              <Box color={theme.palette.grey[600]} fontWeight={600}>
                {country}
              </Box>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardTour;
