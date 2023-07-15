import { Box } from "@mui/material";
import Header from "../../../components/adminDashboard/Header";
import BarChart from "../../../components/adminDashboard/BarChart";
import "../../../assets/admindb.css"

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
