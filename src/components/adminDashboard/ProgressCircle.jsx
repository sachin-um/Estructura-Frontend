import { Box } from '@mui/material';

import { tokens } from '../../theme';

const ProgressCircle = ({ progress = '0.75', size = '40' }) => {
  const colors = tokens;
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.brownAccent[400]} ${angle}deg 360deg),
            ${colors.greenAccent[400]}`,
        borderRadius: '50%',
        height: `${size}px`,
        width: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
