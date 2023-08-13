import React, { useState } from 'react';
import ProfessionalCategories from '../../components/Professionals/ProfessionalCategories';
import styled from 'styled-components';
import { FaSort } from 'react-icons/fa';
import TopBar from '../../components/CusTopBar';
import Footer from '../../components/Footer';
import { mobile } from '../../responsive';
import '../../assets/font.css';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { ConstructionCompanies } from '../../data/ProfessionalscardData';

const Container = styled.div``;

const Banner = styled.div`
  width: 100%;
  height: 300px;
  background-image: url('https://www.lankayp.com/img/cats/construction.jpg');
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

const AllConstructionCompanies = () => {
  const [sortedData, setSortedData] = useState(ConstructionCompanies);
  const [sortingOption, setSortingOption] = useState('');

  const handleSortingOptionChange = (sortingValue) => {
    setSortingOption(sortingValue);
    switch (sortingValue) {
      case 'priceLowToHigh':
        setSortedData(
          [...Architects].sort(
            (a, b) =>
              parseFloat(a.price.split(' ')[1].replace(',', '')) -
              parseFloat(b.price.split(' ')[1].replace(',', '')),
          ),
        );
        break;
      case 'priceHighToLow':
        setSortedData(
          [...Architects].sort(
            (a, b) =>
              parseFloat(b.price.split(' ')[1].replace(',', '')) -
              parseFloat(a.price.split(' ')[1].replace(',', '')),
          ),
        );
        break;
      case 'dateNewestOnTop':
        setSortedData(
          [...Architects].sort((a, b) => new Date(b.date) - new Date(a.date)),
        );
        break;
      case 'dateOldestOnTop':
        setSortedData(
          [...Architects].sort((a, b) => new Date(a.date) - new Date(b.date)),
        );
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <TopBar title="Products" />
      <Banner>Construction Companies</Banner>
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
      <ProfessionalCategories data={sortedData} />

      <Footer />
    </Container>
  );
};

export default AllConstructionCompanies;
