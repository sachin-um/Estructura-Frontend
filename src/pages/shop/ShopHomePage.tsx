import { Box, Button, Typography } from '@mui/material';
import { type AnyAction, type ThunkDispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../../assets/font.css';
import Footer from '../../components/Footer';
import TopAppBar from '../../components/TopAppBar';
import Newsletter from '../../components/e-com/Blog';
import Slider from '../../components/e-com/Slider';
import ShopCategories from '../../components/shop/ShopCategories';
import {
  fetchRetailItems,
  getRetailItemsStatus,
  selectAllRetailItems,
} from '../../redux/RetailItems/RetailItemsReducer';

const ShopHomePage = () => {
  const itemsStatus = useSelector(getRetailItemsStatus);
  const retailItems = useSelector(selectAllRetailItems);

  const dispatch: ThunkDispatch<RetailItem[], void, AnyAction> = useDispatch();

  useEffect(() => {
    if (itemsStatus === 'idle') {
      dispatch(fetchRetailItems());
    }
  }, [itemsStatus, dispatch]);

  const Furniture = retailItems.filter(
    (item) => item.retailItemType === 'FURNITURE',
  );
  const Hardware = retailItems.filter(
    (item) => item.retailItemType === 'HARDWARE',
  );
  const Bathware = retailItems.filter(
    (item) => item.retailItemType === 'BATHWARE',
  );
  const Gardenware = retailItems.filter(
    (item) => item.retailItemType === 'GARDENWARE',
  );
  const Lighting = retailItems.filter(
    (item) => item.retailItemType === 'LIGHTING',
  );

  const firstFourFurniture = Furniture.slice(0, 4);
  const firstFourHardware = Hardware.slice(0, 4);
  const firstFourBathware = Bathware.slice(0, 4);
  const firstFourGardenware = Gardenware.slice(0, 4);
  const firstFourLighting = Lighting.slice(0, 4);

  const navigate = useNavigate();
  return (
    <div>
      <TopAppBar />
      <Slider />
      {/* Furniture */}
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
          Furniture
        </Typography>
        <Button
          onClick={() => {
            navigate('/shop/items/FURNITURE');
          }}
          color="primary"
          variant="contained"
        >
          See More Furniture
        </Button>
      </Box>
      <ShopCategories data={firstFourFurniture} />
      {/* Hardware */}
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
          Hardware
        </Typography>
        <Button
          onClick={() => {
            navigate('/shop/items/HARDWARE');
          }}
          color="primary"
          variant="contained"
        >
          See More Hardware
        </Button>
      </Box>
      <ShopCategories data={firstFourHardware} />

      {/* Bathware */}
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
          Bathware
        </Typography>
        <Button
          onClick={() => {
            navigate('/shop/items/BATHWARE');
          }}
          color="primary"
          variant="contained"
        >
          See More Bathware
        </Button>
      </Box>
      <ShopCategories data={firstFourBathware} />

      {/* Gardenware */}
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
          Gardenware
        </Typography>
        <Button
          onClick={() => {
            navigate('/shop/items/GARDENWARE');
          }}
          color="primary"
          variant="contained"
        >
          See More Gardenware
        </Button>
      </Box>
      <ShopCategories data={firstFourGardenware} />

      {/* Lighting */}
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
          Lighting
        </Typography>
        <Button
          onClick={() => {
            navigate('/shop/items/LIGHTING');
          }}
          color="primary"
          variant="contained"
        >
          See More Lighting
        </Button>
      </Box>
      <ShopCategories data={firstFourLighting} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ShopHomePage;
