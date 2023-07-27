import { Box } from '@mui/material';

import '../../assets/admindb.css';
import Header from '../../components/adminDashboard/Header';
import PieChart from '../../components/adminDashboard/PieChart';

const Pie = () => {
  return (
    <Box m="20px">
      <Header subtitle="Simple Pie Chart" title="Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
