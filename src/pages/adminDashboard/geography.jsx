import { Box, useTheme } from '@mui/material';

import '../../assets/admindb.css';
import GeographyChart from '../../components/adminDashboard/GeographyChart';
import Header from '../../components/adminDashboard/Header';
import { tokens } from '../../theme';

const Geography = () => {
  const theme = useTheme();
  const colors = tokens;
  return (
    <Box m="20px">
      <Header subtitle="Simple Geography Chart" title="Geography" />

      <Box
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
        height="75vh"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
