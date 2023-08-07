import { Box, Typography } from '@mui/material';

import { tokens } from '../../theme';
import ProgressCircle from './ProgressCircle';

const StatBox = ({ icon, increase, progress, subtitle, title }) => {
  const colors = tokens;

  return (
    <Box m="0 30px" width="100%">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
            variant="h4"
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography sx={{ color: colors.greenAccent[300] }} variant="h5">
          {subtitle}
        </Typography>
        <Typography
          fontStyle="italic"
          sx={{ color: colors.greenAccent[400] }}
          variant="h5"
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
