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
import React, { useState, useEffect } from 'react';
import ConstructionResidence from '../../components/Algo/ConstructionResidence';
import ConstructionCommercial from '../../components/Algo/ConstructionCommercial';
import ConstructionIndustrial from '../../components/Algo/ConstructionIndustrial';
import ConstructionRecreational from '../../components/Algo/ConstructionRecreational';
import Construction from '../../components/Algo/Construction';
import DesignPlans from '../../components/Algo/DesignPlans';
import GetStarted from '../../components/Algo/InitialPage';
import InteriorDesign from '../../components/Algo/InteriorDesign';
import Landscaping from '../../components/Algo/Landscaping';
import Remodelling from '../../components/Algo/Remodelling';
import Woodwork from '../../components/Algo/Woodwork';
// import { Link } from "react-router-dom" ;
import TopAppBar from '../../components/TopAppBar';
function RecAlgo() {
  const [currentPage, setCurrentPage] = useState(1);
  const [additionalPages, setAdditionalPages] = useState([]);
  const nextPage = () => {
    // console.log(formData)
    setCurrentPage(currentPage + 1);
  };
  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const updateFormData = (data) => {
    setFormData({ ...formData, ...data });
  };
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({});
  const handlePageChange = (value) => {
    setSelectedOption(value);
  };
  let initialPage = [
    <GetStarted
      formData={formData}
      nextPage={nextPage}
      previousPage={previousPage}
      handlePageChange={handlePageChange}
      updateFormData={updateFormData}
    />,
  ];

  useEffect(() => {
    if (selectedOption !== null) {
      setAdditionalPages([]);
      console.log(selectedOption);
      let newPage = null;
      switch (selectedOption) {
        case 'Construction':
          newPage = (
            <Construction
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
            />
          );
          break;
        case 'Design Plans':
          console.log('design');
          newPage = (
            <DesignPlans
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
            />
          );
          break;
        case 'Landscaping':
          newPage = (
            <Landscaping
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
            />
          );
          break;
        case 'Remodelling':
          newPage = (
            <Remodelling
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
            />
          );
          break;
        case 'Interior Designing':
          newPage = (
            <InteriorDesign
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
            />
          );
          break;
        case 'Woodwork':
          newPage = (
            <Woodwork
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
            />
          );
          break;
        case 'Residence Building':
          newPage = (
            <ConstructionResidence
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
            />
          );
          break;
        case 'Commercial Building':
          newPage = (
            <ConstructionCommercial
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
            />
          );
          break;

        case 'Industrial Building':
          newPage = (
            <ConstructionIndustrial
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
            />
          );
          break;
        case 'Recreational Building':
          newPage = (
            <ConstructionRecreational
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
            />
          );
          break;

        default:
          break;
      }
      setAdditionalPages([...additionalPages, newPage]);
    }
  }, [selectedOption, formData]);
  const pages = [initialPage, ...additionalPages];

  return (
    <>
      <TopAppBar />
      {
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          {pages[currentPage - 1]}
          {console.log(pages)}
        </Box>
      }
    </>
  );
}

export default RecAlgo;
