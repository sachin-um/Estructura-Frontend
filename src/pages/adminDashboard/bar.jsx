import { Box } from '@mui/material';

import '../../assets/admindb.css';
import BarChart from '../../components/adminDashboard/BarChart';
import Header from '../../components/adminDashboard/Header';

const Bar = () => {
  return (
    <Box m="20px">
      <Header subtitle="Simple Bar Chart" title="Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
