import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import { Box, Pagination } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { FaSort } from 'react-icons/fa';
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
import { mobile } from '../../responsive';
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

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  ${mobile({ flexDirection: 'column' })}
`;

const SortText = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: grey;
  font-family: Poppins;
  margin-right: 15px;
  ${mobile({ marginRight: '0px' })}
`;

const SortSelect = styled(Select)`
  padding: 5px;
  width: 220px;
  border-radius: 10px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ margin: '10px 0px' })}
`;

const Option = styled(MenuItem)`
  &.Mui-selected {
    color: grey;
  }
`;

const SortIcon = styled(FaSort)`
  margin-right: 5px;
  color: grey;
`;

const AllArchitects = () => {
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
  // const handleSortingOptionChange = (sortingValue) => {
  //   setSortingOption(sortingValue);
  //   switch (sortingValue) {
  //     case 'priceLowToHigh':
  //       setSortedData(
  //         [...Architects].sort(
  //           (a, b) =>
  //             parseFloat(a.price.split(' ')[1].replace(',', '')) -
  //             parseFloat(b.price.split(' ')[1].replace(',', '')),
  //         ),
  //       );
  //       break;
  //     case 'priceHighToLow':
  //       setSortedData(
  //         [...Architects].sort(
  //           (a, b) =>
  //             parseFloat(b.price.split(' ')[1].replace(',', '')) -
  //             parseFloat(a.price.split(' ')[1].replace(',', '')),
  //         ),
  //       );
  //       break;
  //     case 'dateNewestOnTop':
  //       setSortedData(
  //         [...Architects].sort((a, b) => new Date(b.date) - new Date(a.date)),
  //       );
  //       break;
  //     case 'dateOldestOnTop':
  //       setSortedData(
  //         [...Architects].sort((a, b) => new Date(a.date) - new Date(b.date)),
  //       );
  //       break;
  //     default:
  //       break;
  //   }
  // };
  const PaginatedItems = Paginate(Professionals, pageNumber, pageSize);
  console.log(PaginatedItems);
  return (
    <Container>
      <TopAppBar title={`Estructura: Shop ${category}`} />
      <Banner>{category}</Banner>
      {/* <SortContainer>
        <SortIcon />
        <SortText>Sort by:</SortText>
        <SortSelect
          labelId="sort-by-label"
          id="sort-by"
          value={sortingOption}
          displayEmpty
          variant="outlined"
          onChange={(e) => handleSortingOptionChange(e.target.value)}
        >
          <Option value="" disabled>
            Sorting option
          </Option>
          <Option value="priceLowToHigh">Price: Low to High</Option>
          <Option value="priceHighToLow">Price: High to Low</Option>
          <Option value="dateNewestOnTop">Date: Newest on Top</Option>
          <Option value="dateOldestOnTop">Date: Oldest on Top</Option>
        </SortSelect>
      </SortContainer> */}
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

export default AllArchitects;
