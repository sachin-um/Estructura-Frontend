import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../../assets/font.css';
import TopBar from '../../components/CusTopBar';
import Footer from '../../components/Footer';
import ProfessionalCategories from '../../components/Professionals/ProfessionalCategories';
// import { Architects } from '../../data/ProfessionalscardData';
// import { ConstructionCompanies } from '../../data/ProfessionalscardData';
// import { HomeBuilders } from '../../data/ProfessionalscardData';
// import { Carpenters } from '../../data/ProfessionalscardData';
// import { InteriorDesigners } from '../../data/ProfessionalscardData';
// import { LandscapeArchitects } from '../../data/ProfessionalscardData';
// import { Painters } from '../../data/ProfessionalscardData';

import {
  fetchProfessionals,
  getProfessionalsStatus,
  selectAllProfessionals,
} from '../../redux/Professionals/ProfessionalsReducer';

const AllProfessionals = () => {
  const professionalStatus = useSelector(getProfessionalsStatus);
  const professionals = useSelector(selectAllProfessionals);

  const dispatch: ThunkDispatch<Professional[], void, AnyAction> =
    useDispatch();

  useEffect(() => {
    if (professionalStatus === 'idle') {
      dispatch(fetchProfessionals());
    }
  }, [dispatch, professionalStatus]);

  const Architects = professionals.filter(
    (professional) => professional.role === 'ARCHITECT',
  );
  const Carpenters = professionals.filter(
    (professional) => professional.role === 'CARPENTER',
  );
  const InteriorDesigners = professionals.filter(
    (professional) => professional.role === 'INTERIORDESIGNER',
  );
  const HomeBuilders = professionals.filter(
    (professional) => professional.role === 'MASONWORKER',
  );
  const Painters = professionals.filter(
    (professional) => professional.role === 'PAINTER',
  );
  const LandscapeArchitects = professionals.filter(
    (professional) => professional.role === 'LANDSCAPEARCHITECT',
  );
  const ConstructionCompanies = professionals.filter(
    (professional) => professional.role === 'CONSTRUCTIONCOMPANY',
  );
  const firstFourArchitects = Architects.slice(0, 4);
  const firstFourConstructionCompanies = ConstructionCompanies.slice(0, 4);
  const firstFourHomeBuilders = HomeBuilders.slice(0, 4);
  const firstFourCarpenters = Carpenters.slice(0, 4);
  const firstFourInteriorDesigners = InteriorDesigners.slice(0, 4);
  const firstFourLandscapeArchitects = LandscapeArchitects.slice(0, 4);
  const firstFourPainters = Painters.slice(0, 4);
  return (
    <div>
      <TopBar />

      {/* Architects */}
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '20px',
          marginTop: '50px',
        }}
      >
        <Typography
          color="#435834"
          fontFamily="Poppins"
          fontSize="30px"
          variant="h4"
        >
          Architects
        </Typography>
        <Button color="primary" variant="contained">
          See More
        </Button>
      </Box>
      <ProfessionalCategories data={firstFourArchitects} />

      {/* Construction Companies */}
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '20px',
          marginTop: '50px',
        }}
      >
        <Typography
          color="#435834"
          fontFamily="Poppins"
          fontSize="30px"
          variant="h4"
        >
          Construction Companies
        </Typography>
        <Button color="primary" variant="contained">
          See More
        </Button>
      </Box>
      <ProfessionalCategories data={firstFourConstructionCompanies} />

      {/* Home Builders */}
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '20px',
          marginTop: '50px',
        }}
      >
        <Typography
          color="#435834"
          fontFamily="Poppins"
          fontSize="30px"
          variant="h4"
        >
          Home Builders
        </Typography>
        <Button color="primary" variant="contained">
          See More
        </Button>
      </Box>
      <ProfessionalCategories data={firstFourHomeBuilders} />

      {/* Carpenters */}
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '20px',
          marginTop: '50px',
        }}
      >
        <Typography
          color="#435834"
          fontFamily="Poppins"
          fontSize="30px"
          variant="h4"
        >
          Carpenters
        </Typography>
        <Button color="primary" variant="contained">
          See More
        </Button>
      </Box>
      <ProfessionalCategories data={firstFourCarpenters} />

      {/* Interior Designers */}
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '20px',
          marginTop: '50px',
        }}
      >
        <Typography
          color="#435834"
          fontFamily="Poppins"
          fontSize="30px"
          variant="h4"
        >
          Interior Designers
        </Typography>
        <Button color="primary" variant="contained">
          See More
        </Button>
      </Box>
      <ProfessionalCategories data={firstFourInteriorDesigners} />

      {/* Landscape Architects */}
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '20px',
          marginTop: '50px',
        }}
      >
        <Typography
          color="#435834"
          fontFamily="Poppins"
          fontSize="30px"
          variant="h4"
        >
          Landscape Architects
        </Typography>
        <Button color="primary" variant="contained">
          See More
        </Button>
      </Box>
      <ProfessionalCategories data={firstFourLandscapeArchitects} />

      {/* Painters */}
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '20px',
          marginTop: '50px',
        }}
      >
        <Typography
          color="#435834"
          fontFamily="Poppins"
          fontSize="30px"
          variant="h4"
        >
          Painters
        </Typography>
        <Button color="primary" variant="contained">
          See More
        </Button>
      </Box>
      <ProfessionalCategories data={firstFourPainters} />

      <Footer />
    </div>
  );
};

export default AllProfessionals;
