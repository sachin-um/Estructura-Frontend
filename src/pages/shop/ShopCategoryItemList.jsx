import { FaSort } from 'react-icons/fa';
import styled from 'styled-components';
import '../../assets/font.css';
import Footer from '../../components/Footer';
import Newsletter from '../../components/e-com/Blog';
import Categories from '../../components/e-com/Categories';
import { mobile } from '../../responsive';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { useParams } from 'react-router-dom';
import TopAppBar from '../../components/TopAppBar';
import { Furniture } from '../../data/ProductscardData';


const ShopCategoryItemList = () => {
  const category = useParams().category;

  // ! retrieve data from database according to category here

  // TODO: Get data by category | display error if not valid
  // TODO: Sort according to choice
  // TODO: Paginate Data

  return (
    <Container>
      <TopAppBar title={`Estructura: Shop ${category}`} />
      <Banner>Furniture</Banner>
      <SortContainer>
        <SortIcon />
        <SortText>Sort by:</SortText>
        <SortSelect
          labelId="sort-by-label"
          id="sort-by"
          value=""
          displayEmpty
          variant="outlined"
        >
          <Option value="" disabled>
            Sorting option
          </Option>
          <Option value="priceLowToHigh">Price: Low to High</Option>
          <Option value="priceHighToLow">Price: High to Low</Option>
          <Option value="dateNewestOnTop">Date: Newest on Top</Option>
          <Option value="dateOldestOnTop">Date: Oldest on Top</Option>
        </SortSelect>
      </SortContainer>
      <Categories data={Furniture} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ShopCategoryItemList;

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