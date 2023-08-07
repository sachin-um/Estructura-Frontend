import { Box } from '@mui/material';

import '../../assets/admindb.css';
import Header from '../../components/adminDashboard/Header';
import LineChart from '../../components/adminDashboard/LineChart';

const Line = () => {
  return (
    <Box m="20px">
      <Header subtitle="Simple Line Chart" title="Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
