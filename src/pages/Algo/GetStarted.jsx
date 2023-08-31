import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

import Construction from '../../components/Algo/Construction';
import DesignPlans from '../../components/Algo/DesignPlans';
import GetStarted from '../../components/Algo/InitialPage';
import InteriorDesign from '../../components/Algo/InteriorDesign';
import Landscaping from '../../components/Algo/Landscaping';
import Remodelling from '../../components/Algo/Remodelling';
// import { Link } from "react-router-dom" ;
import TopAppBar from '../../components/TopAppBar';
function RecAlgo() {
  const [currentPage, setCurrentPage] = useState(1);
  const nextPage = () => {
    console.log(formData);
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const updateFormData = (data) => {
    setFormData({ ...formData, ...data });
  };
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({});
  const handlePageChange = (value) => {
    pages.push(value);
  };
  const pages = [
    <GetStarted
      formData={formData}
      nextPage={nextPage}
      previousPage={previousPage}
      handlePageChange={handlePageChange}
      updateFormData={updateFormData}
    />,
  ];

  return (
    <>
      <TopAppBar />
      {
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          {pages[currentPage - 1]}
        </Box>
      }
    </>
  );
}

export default RecAlgo;
