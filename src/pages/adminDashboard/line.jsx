import { Box } from "@mui/material";
import Header from "../../components/adminDashboard/Header";
import LineChart from "../../components/adminDashboard/LineChart";
import "../../assets/admindb.css"

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
