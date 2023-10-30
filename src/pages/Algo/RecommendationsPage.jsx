import {
  Box,
  Card,
  CardContent,
  Grid,
  ListItemIcon,
  Rating,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
import Footer from '../../components/Footer';
import RecommendedProfessionals from '../../components/Algo/RecommendedProfessionals';
import RecommendedItems from '../../components/Algo/RecommendedItems';
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

const RecommendationsPage = () => {
  const [activeTab, setActiveTab] = React.useState('professionals');
  const location = useLocation();
  const data = location.state.data;

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const suggestions = () => {
    let tab = <>Oops! Something went wrong.</>;
    switch (activeTab) {
      case 'professionals':
        tab = (
          <RecommendedProfessionals
            recommendedProfessionals={data.professionals}
          />
        );
        break;
      case 'retailItems':
        tab = <RecommendedItems />;
        break;
    }
    return tab;
  };
  return (
    <Container>
      <TopAppBar />
      <Banner>
        {' '}
        <Typography
          textAlign="center"
          marginBottom="5px"
          marginTop="5px"
          color="#141414"
          fontFamily="Poppins"
          fontSize="30px"
          fontWeight="bold"
          variant="h4"
        >
          Here are your suggestions!
        </Typography>
      </Banner>

      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >
          <Tab label=" Professionals" value="professionals" />
          <Tab label="Retail Items" value="retailItems" />
        </Tabs>
      </Box>
      {suggestions()}

      <Footer />
    </Container>
  );
};
export default RecommendationsPage;
