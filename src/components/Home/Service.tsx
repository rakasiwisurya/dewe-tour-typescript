import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { services } from "../../data";

const Service = () => {
  return (
    <Box sx={{ position: "relative", top: { sm: -100 } }}>
      <Grid container spacing={5}>
        {services.map((service, index) => (
          <Grid key={`service-${index}`} item sm={6} md={3}>
            <Card
              variant="elevation"
              sx={{ padding: 2, textAlign: "center", minHeight: { md: 322 } }}
            >
              <CardContent>
                <Stack spacing={3}>
                  <Box component="img" src={service.icon} alt={service.title} height={80} />
                  <Typography variant="h6" component="h2" fontWeight={600}>
                    {service.title}
                  </Typography>
                  <Box component="p" sx={{ p: "0 10px" }}>
                    {service.description}
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Service;
