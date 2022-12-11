import { Box } from "@mui/material";
import { Hibiscus, Palm } from "@/assets";
import { theme } from "@/data";
import { IBackground } from "@/interfaces";

const Background = ({ showPlant, sx, children, ...rest }: IBackground) => {
  return (
    <Box
      {...rest}
      component="main"
      sx={{
        ...sx,
        position: "relative",
        bgcolor: theme.palette.grey[300],
        height: "100%",
        width: "100%",
      }}
    >
      {showPlant && (
        <>
          <Box
            component="img"
            src={Hibiscus}
            alt="Hibiscus"
            sx={{ position: "absolute", top: 466, right: 0 }}
          />
          <Box
            component="img"
            src={Palm}
            alt="Palm"
            sx={{ position: "absolute", top: 836, left: 0 }}
          />
        </>
      )}

      {children}
    </Box>
  );
};

export default Background;
