import { Box, Typography } from '@mui/material';

import { tokens } from '../../theme';

const Header = ({ subtitle, title }) => {
  const colors = tokens;
  return (
    <Box mb="30px">
      <Typography
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: '0 0 5px 0' }}
        variant="h2"
      >
        {title}
      </Typography>
      <Typography color={colors.greenAccent[400]} variant="h5">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
