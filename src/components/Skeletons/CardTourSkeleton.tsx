import { Box, Card, CardContent, Skeleton, Stack } from "@mui/material";

const skeletonSx = { fontSize: "1rem" };

const CardTourSkeleton = () => {
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
};

export default CardTourSkeleton;
