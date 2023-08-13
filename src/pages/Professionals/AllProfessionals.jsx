import React from 'react';
import Categories from '../../components/e-com/Categories';
import ProfessionalCategories from '../../components/Professionals/ProfessionalCategories';

import TopBar from '../../components/CusTopBar';
import Footer from '../../components/Footer';
import { Typography, Button, Box } from '@mui/material';
import '../../assets/font.css';

import { Architects } from '../../data/ProfessionalscardData';
import { ConstructionCompanies } from '../../data/ProfessionalscardData';
import { HomeBuilders } from '../../data/ProfessionalscardData';
import { Carpenters } from '../../data/ProfessionalscardData';
import { InteriorDesigners } from '../../data/ProfessionalscardData';
import { LandscapeArchitects } from '../../data/ProfessionalscardData';
import { Painters } from '../../data/ProfessionalscardData';

const AllProfessionals = () => {
  const firstFourArchitects = Architects.slice(0, 4);
  const firstFourConstructionCompanies = ConstructionCompanies.slice(0, 4);
  const firstFourHomeBuilders = HomeBuilders.slice(0, 4);
  const firstFourCarpenters = Carpenters.slice(0, 4);
  const firstFourInteriorDesigners = InteriorDesigners.slice(0, 4);
  const firstFourLandscapeArchitects = LandscapeArchitects.slice(0, 4);
  const firstFourPainters = Painters.slice(0, 4);
  return (
    <div>
      <TopBar title="Products" />

      {/* Architects */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '20px',
          marginTop: '50px',
        }}
      >
        <Typography
          variant="h4"
          fontSize="30px"
          fontFamily="Poppins"
          color="#435834"
        >
          Architects
        </Typography>
        <Button variant="contained" color="primary">
          See More
        </Button>
      </Box>
      <ProfessionalCategories data={firstFourArchitects} />

      {/* Construction Companies */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '20px',
          marginTop: '50px',
        }}
      >
        <Typography
          variant="h4"
          fontSize="30px"
          fontFamily="Poppins"
          color="#435834"
        >
          Construction Companies
        </Typography>
        <Button variant="contained" color="primary">
          See More
        </Button>
      </Box>
      <ProfessionalCategories data={firstFourConstructionCompanies} />

      {/* Home Builders */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '20px',
          marginTop: '50px',
        }}
      >
        <Typography
          variant="h4"
          fontSize="30px"
          fontFamily="Poppins"
          color="#435834"
        >
          Home Builders
        </Typography>
        <Button variant="contained" color="primary">
          See More
        </Button>
      </Box>
      <ProfessionalCategories data={firstFourHomeBuilders} />

      {/* Carpenters */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '20px',
          marginTop: '50px',
        }}
      >
        <Typography
          variant="h4"
          fontSize="30px"
          fontFamily="Poppins"
          color="#435834"
        >
          Carpenters
        </Typography>
        <Button variant="contained" color="primary">
          See More
        </Button>
      </Box>
      <ProfessionalCategories data={firstFourCarpenters} />

      {/* Interior Designers */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '20px',
          marginTop: '50px',
        }}
      >
        <Typography
          variant="h4"
          fontSize="30px"
          fontFamily="Poppins"
          color="#435834"
        >
          Interior Designers
        </Typography>
        <Button variant="contained" color="primary">
          See More
        </Button>
      </Box>
      <ProfessionalCategories data={firstFourInteriorDesigners} />

      {/* Landscape Architects */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '20px',
          marginTop: '50px',
        }}
      >
        <Typography
          variant="h4"
          fontSize="30px"
          fontFamily="Poppins"
          color="#435834"
        >
          Landscape Architects
        </Typography>
        <Button variant="contained" color="primary">
          See More
        </Button>
      </Box>
      <ProfessionalCategories data={firstFourLandscapeArchitects} />

      {/* Painters */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '20px',
          marginTop: '50px',
        }}
      >
        <Typography
          variant="h4"
          fontSize="30px"
          fontFamily="Poppins"
          color="#435834"
        >
          Painters
        </Typography>
        <Button variant="contained" color="primary">
          See More
        </Button>
      </Box>
      <ProfessionalCategories data={firstFourPainters} />

      <Footer />
    </div>
  );
};

export default AllProfessionals;
