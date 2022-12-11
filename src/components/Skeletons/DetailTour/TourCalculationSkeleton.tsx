import { Add, Remove } from "@mui/icons-material";
import { Box, Button, Container, Grid, Skeleton, Typography } from "@mui/material";
import { theme } from "@/data";

const TourCalculationSkeleton = () => {
  return (
    <Box component="section">
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "start" },
              pb: 3,
              mb: 3,
              borderBottom: `1px solid rgba(0, 0, 0, 0.12)`,
            }}
          >
            <Skeleton variant="text" sx={{ mr: 1, width: 200 }} />
            <Typography variant="h6" component="span" fontWeight={700}>
              / Person
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "end" },
              pb: 3,
              mb: 3,
              borderBottom: `1px solid rgba(0, 0, 0, 0.12)`,
            }}
          >
            <Box
              component="span"
              sx={{
                bgcolor: theme.palette.primary.main,
                color: theme.palette.common.white,
                borderRadius: "50%",
                border: "none",
                width: 30,
                height: 30,
                p: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Remove fontSize="small" />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width={50}
              fontWeight={700}
            >
              <Skeleton variant="text" sx={{ width: "100%", mx: 1 }} />
            </Box>
            <Box
              component="span"
              sx={{
                bgcolor: theme.palette.primary.main,
                color: theme.palette.common.white,
                borderRadius: "50%",
                border: "none",
                width: 30,
                height: 30,
                p: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Add fontSize="small" />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "start" },
              pb: 3,
              mb: 3,
              borderBottom: `1px solid rgba(0, 0, 0, 0.12)`,
            }}
          >
            <Typography variant="h6" component="span" fontWeight={700}>
              Total :
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "end" },
              pb: 3,
              mb: 3,
              borderBottom: `1px solid rgba(0, 0, 0, 0.12)`,
            }}
          >
            <Skeleton variant="text" sx={{ width: 200 }} />
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button variant="contained" sx={{ fontWeight: 600, width: { xs: "100%", sm: 180 } }}>
            BOOK NOW
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TourCalculationSkeleton;
