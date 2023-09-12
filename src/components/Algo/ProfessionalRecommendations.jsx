import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Footer from '../../components/Footer';

import TopAppBar from '../../components/TopAppBar';

const Container = styled.div``;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url('/AlgoBG.jpg');

  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
`;

const ProfessionalRecommendations = () => {
  return (
    <Container>
      <TopAppBar />
      <Banner>
        {' '}
        <Typography
          textAlign="center"
          marginBottom="5px"
          marginTop="5px"
          color="#f2f2f2"
          fontFamily="Poppins"
          fontSize="30px"
          fontWeight="Regular"
          variant="h4"
        >
          Here are your suggestions!
        </Typography>
      </Banner>

      {/* <Footer /> */}
    </Container>
  );
};
export default ProfessionalRecommendations;
