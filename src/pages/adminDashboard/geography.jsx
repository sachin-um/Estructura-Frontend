import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/adminDashboard/GeographyChart";
import Header from "../../components/adminDashboard/Header";
import { tokens } from "../../theme";
import "../../assets/admindb.css"

const Geography = () => {
  const theme = useTheme();
  const colors = tokens;
  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
