import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../assets/font.css';
import Footer from '../../components/Footer';
import NotFound from '../../components/NoResults';
import ProfessionalCategories from '../../components/Professionals/ProfessionalCategories';
import TopAppBar from '../../components/TopAppBar';
import { useFetchAllProfessionals } from '../../hooks/professional/useFetchProfessionals';
import Loading from '../loading';

const AllProfessionals = () => {
  const { fetchAllProfessionals, isLoading, professionals } =
    useFetchAllProfessionals();

  useEffect(() => {
    fetchAllProfessionals();
  }, [fetchAllProfessionals]);

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

  const navigate = useNavigate();

  return (
    <div>
      <TopAppBar />
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
        <Button
          onClick={() => {
            navigate('/Professionals/ARCHITECT');
          }}
          color="primary"
          variant="contained"
        >
          See More
        </Button>
      </Box>
      {firstFourArchitects.length > 0 && (
        <ProfessionalCategories data={firstFourArchitects} />
      )}
      {firstFourArchitects.length === 0 && (
        <Box>{isLoading ? <Loading /> : <NotFound />}</Box>
      )}
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
        <Button
          onClick={() => {
            navigate('/Professionals/CONSTRUCTIONCOMPANY');
          }}
          color="primary"
          variant="contained"
        >
          See More
        </Button>
      </Box>
      {firstFourConstructionCompanies.length > 0 && (
        <ProfessionalCategories data={firstFourConstructionCompanies} />
      )}
      {firstFourConstructionCompanies.length === 0 && (
        <Box>{isLoading ? <Loading /> : <NotFound />}</Box>
      )}

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
        <Button
          onClick={() => {
            navigate('/Professionals/MASONWORKER');
          }}
          color="primary"
          variant="contained"
        >
          See More
        </Button>
      </Box>
      {firstFourHomeBuilders.length > 0 && (
        <ProfessionalCategories data={firstFourHomeBuilders} />
      )}
      {firstFourHomeBuilders.length === 0 && (
        <Box>{isLoading ? <Loading /> : <NotFound />}</Box>
      )}
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
        <Button
          onClick={() => {
            navigate('/Professionals/CARPENTER');
          }}
          color="primary"
          variant="contained"
        >
          See More
        </Button>
      </Box>
      {firstFourCarpenters.length > 0 && (
        <ProfessionalCategories data={firstFourCarpenters} />
      )}
      {firstFourCarpenters.length === 0 && (
        <Box>{isLoading ? <Loading /> : <NotFound />}</Box>
      )}
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
        <Button
          onClick={() => {
            navigate('/Professionals/INTERIORDESIGNER');
          }}
          color="primary"
          variant="contained"
        >
          See More
        </Button>
      </Box>
      {firstFourInteriorDesigners.length > 0 && (
        <ProfessionalCategories data={firstFourInteriorDesigners} />
      )}
      {firstFourInteriorDesigners.length === 0 && (
        <Box>{isLoading ? <Loading /> : <NotFound />}</Box>
      )}
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
        <Button
          onClick={() => {
            navigate('/Professionals/LANDSCAPEARCHITECT');
          }}
          color="primary"
          variant="contained"
        >
          See More
        </Button>
      </Box>
      {firstFourLandscapeArchitects.length > 0 && (
        <ProfessionalCategories data={firstFourLandscapeArchitects} />
      )}
      {firstFourLandscapeArchitects.length === 0 && (
        <Box>{isLoading ? <Loading /> : <NotFound />}</Box>
      )}
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
        <Button
          onClick={() => {
            navigate('/Professionals/PAINTER');
          }}
          color="primary"
          variant="contained"
        >
          See More
        </Button>
      </Box>
      {firstFourPainters.length > 0 && (
        <ProfessionalCategories data={firstFourPainters} />
      )}
      {firstFourPainters.length === 0 && (
        <Box>{isLoading ? <Loading /> : <NotFound />}</Box>
      )}
      <Footer />
    </div>
  );
};

export default AllProfessionals;
