import { Box, Card, CardContent, Skeleton, Stack, Typography } from "@mui/material";
import { theme } from "../data";
import { ICardTour } from "../interfaces";
import { formatCurrency } from "../utils";

const skeletonSx = { fontSize: "1rem" };

const CardTour = (props: ICardTour) => {
  const { isLoading, image, quota, maxQuota, title, price, country } = props;

  if (isLoading) {
    return (
      <Card>
        <CardContent>
          <Box mb={2}>
            <Skeleton variant="rounded" height={241} width="100%" />
          </Box>

          <Stack spacing={1}>
            <Box>
              <Skeleton variant="text" width="100%" sx={skeletonSx} />
            </Box>
            <Box display="flex" justifyContent="space-between" gap={1}>
              <Skeleton variant="text" width="100%" sx={skeletonSx} />
              <Skeleton variant="text" width="100%" sx={skeletonSx} />
            </Box>
          </Stack>
        </CardContent>
      </Card>
    );
  }

  return (
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
  );
};

export default CardTour;
