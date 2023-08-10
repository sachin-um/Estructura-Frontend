import { Box, Pagination } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { type AnyAction, type ThunkDispatch } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { FaSort } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import '../../assets/font.css';
import Footer from '../../components/Footer';
import TopAppBar from '../../components/TopAppBar';
import Newsletter from '../../components/e-com/Blog';
import ShopCategories from '../../components/shop/ShopCategories';
import {
  fetchRetailItems,
  getRetailItemsStatus,
  selectAllRetailItems,
} from '../../redux/RetailItems/RetailItemsReducer';
import { mobile } from '../../responsive';
import Paginate from '../../utils/Paginate';
const ShopItemList = () => {
  const category = useParams().category;

  const itemsStatus = useSelector(getRetailItemsStatus);
  const retailItems = useSelector(selectAllRetailItems);

  const dispatch: ThunkDispatch<RetailItem[], void, AnyAction> = useDispatch();

  useEffect(() => {
    if (itemsStatus === 'idle') {
      dispatch(fetchRetailItems());
    }
  }, [itemsStatus, dispatch]);

  const Items = retailItems.filter((item) => item.retailItemType === category);

  const [pageSize, _setPageSize] = useState(8); // Should add a selector
  const [pageNumber, setPageNumber] = useState(1);

  const PaginatedItems = Paginate(Items, pageNumber, pageSize);

  console.log(PaginatedItems);

  return (
    <Container>
      <TopAppBar title={`Estructura: Shop ${category}`} />
      <Banner>Furniture</Banner>
      <SortContainer>
        <SortIcon />
        <SortText>Sort by:</SortText>
        <SortSelect
          displayEmpty
          id="sort-by"
          labelId="sort-by-label"
          value=""
          variant="outlined"
        >
          <Option disabled value="">
            Sorting option
          </Option>
          <Option value="priceLowToHigh">Price: Low to High</Option>
          <Option value="priceHighToLow">Price: High to Low</Option>
          <Option value="dateNewestOnTop">Date: Newest on Top</Option>
          <Option value="dateOldestOnTop">Date: Oldest on Top</Option>
        </SortSelect>
      </SortContainer>
      <ShopCategories data={PaginatedItems} />
      <Box display={'flex'} justifyContent={'center'}>
        <Pagination
          onChange={(_event, value) => {
            setPageNumber(value);
          }}
          count={Math.ceil(Items.length / pageSize)}
        />
      </Box>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ShopItemList;

const Container = styled.div``;

const Banner = styled.div`
  width: 100%;
  height: 600px;
  background-image: url('https://www.kataak.co.in/webroot/newdesign/images/living-room-inner-banner.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f3f3f3;
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
  font-size: 20px;
  font-weight: 400;
  color: grey;
  font-family: Poppins;
  margin-right: 15px;
  ${mobile({ marginRight: '0px' })}
`;

const SortSelect = styled(Select)`
  padding: 20px;
  width: 250px;
  border-radius: 10px;
  height: 50px;
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
