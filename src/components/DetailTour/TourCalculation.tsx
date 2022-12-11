import { Add, Remove } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { TourCalculationSkeleton } from "@/components";
import { theme } from "@/data";
import { ITourCalculation } from "@/interfaces";
import { formatCurrency } from "@/utils";

const TourCalculation = (props: ITourCalculation) => {
  const { isLoading, price, count, total, onAdd, onSubtract, onBook } = props;

  if (isLoading) return <TourCalculationSkeleton />;

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
            <Typography
              variant="h6"
              component="span"
              fontWeight={700}
              color={theme.palette.primary.main}
              mr={1}
            >
              {price && formatCurrency(price)}
            </Typography>
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
              onClick={onSubtract}
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
              {count}
            </Box>
            <Box
              component="span"
              onClick={onAdd}
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
            <Typography variant="h6" fontWeight={700} color={theme.palette.primary.main}>
              {total && formatCurrency(total)}
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button
            variant="contained"
            sx={{ fontWeight: 600, width: { xs: "100%", sm: 180 } }}
            onClick={onBook}
          >
            BOOK NOW
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TourCalculation;
