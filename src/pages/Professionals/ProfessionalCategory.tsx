import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import { Box, Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import '../../assets/font.css';
import Footer from '../../components/Footer';
import NotFound from '../../components/NoResults';
import ProfessionalCategories from '../../components/Professionals/ProfessionalCategories';
import TopAppBar from '../../components/TopAppBar';
import {
  fetchProfessionals,
  getProfessionalsStatus,
  selectAllProfessionals,
} from '../../redux/Professionals/ProfessionalsReducer';
import Paginate from '../../utils/Paginate';

const Container = styled.div``;

const Banner = styled.div`
  width: 100%;
  height: 300px;
  background-image: url('https://media.istockphoto.com/id/823322674/photo/male-architect-hands-making-model-house.jpg?s=612x612&w=0&k=20&c=0NwNPlPRYu2OZNE03HQ1bHQIrzEMcssGB6Ne6E6i9VI=');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
`;

const ProfessionalCategory = () => {
  const category = useParams().category;
  const professionalStatus = useSelector(getProfessionalsStatus);
  const professionals = useSelector(selectAllProfessionals);

  const dispatch: ThunkDispatch<Professional[], void, AnyAction> =
    useDispatch();

  useEffect(() => {
    if (professionalStatus === 'idle') {
      dispatch(fetchProfessionals());
    }
    if (professionalStatus === 'succeeded') {
      setProfessionals(
        professionals.filter((professional) => professional.role === category),
      );
    }
  }, [category, dispatch, professionalStatus, professionals]);

  const [Professionals, setProfessionals] = useState<Professional[]>([]);

  const [pageSize, _setPageSize] = useState(8); // Should add a selector
  const [pageNumber, setPageNumber] = useState(1);

  const PaginatedItems = Paginate(Professionals, pageNumber, pageSize);
  console.log(PaginatedItems);
  return (
    <Container>
      <TopAppBar title={`Estructura: Shop ${category}`} />
      <Banner>{category}</Banner>
      {PaginatedItems.length > 0 ? (
        <ProfessionalCategories data={PaginatedItems} />
      ) : (
        <NotFound />
      )}

      <Box display={'flex'} justifyContent={'center'} marginBottom={'2rem'}>
        <Pagination
          onChange={(_event, value) => {
            setPageNumber(value);
          }}
          count={Math.ceil(Professionals.length / pageSize)}
        />
      </Box>
      <Footer />
    </Container>
  );
};

export default ProfessionalCategory;
