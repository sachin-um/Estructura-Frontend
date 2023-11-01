import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens;

  return (
    <Box width="100%" m="0 30px" backgroundColor="white">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon} <Typography variant="h7" mt="20px"   sx={{ color: colors.primary[700] ,margin:'0.7rem ' }}>
          {subtitle}
        </Typography>
          <Typography
            variant="h4"
            fontWeight=""
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>


      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">

        <Typography
          variant="h6"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[400] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
