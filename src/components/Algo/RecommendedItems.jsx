import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../assets/font.css';
import Footer from '../../components/Footer';
import NotFound from '../../components/NoResults';
import TopAppBar from '../../components/TopAppBar';
import Newsletter from '../../components/e-com/Blog';
import Slider from '../../components/e-com/Slider';
import ShopCategories from '../../components/shop/ShopCategories';
import { useFetchRetailItems } from '../../hooks/retailItem/useFetchRetailItems';
import Loading from '../../pages/loading';

const RecommendedItems = () => {
  //   const { fetchRetailItems, isLoading, retailItems } = useFetchRetailItems();

  //   useEffect(() => {
  //     fetchRetailItems({});
  //   }, [fetchRetailItems]);

  //   const Furniture = retailItems.filter(
  //     (item) => item.retailItemType === 'FURNITURE',
  //   );
  //   const Hardware = retailItems.filter(
  //     (item) => item.retailItemType === 'HARDWARE',
  //   );
  //   const Bathware = retailItems.filter(
  //     (item) => item.retailItemType === 'BATHWARE',
  //   );
  //   const Gardenware = retailItems.filter(
  //     (item) => item.retailItemType === 'GARDENWARE',
  //   );
  //   const Lighting = retailItems.filter(
  //     (item) => item.retailItemType === 'LIGHTING',
  //   );

  //   const firstFourFurniture = Furniture.slice(0, 4);
  const firstFourFurniture = [
    {
      id: '1',
      createdBy: '5',
      mainImageName: 'est',
      dateAdded: '2023-09-15',
      name: 'Bed',
      price: '35000 LKR',
    },
    {
      id: '2',
      createdBy: '5',
      mainImageName: 'est',
      dateAdded: '2023-09-13',
      name: 'Chair',
      price: '15000 LKR',
    },
    {
      id: '3',
      createdBy: '5',
      mainImageName: 'est',
      dateAdded: '2023-09-10',
      name: 'Table',
      price: '20000 LKR',
    },
    {
      id: '4',
      createdBy: '5',
      mainImageName: 'est',
      dateAdded: '2023-09-15',
      name: 'Lamp',
      price: '5000 LKR',
    },
  ];
  //   const firstFourHardware = Hardware.slice(0, 4);
  //   const firstFourBathware = Bathware.slice(0, 4);
  //   const firstFourGardenware = Gardenware.slice(0, 4);
  //   const firstFourLighting = Lighting.slice(0, 4);

  const navigate = useNavigate();
  return (
    <div>
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
      {firstFourFurniture.length > 0 && (
        <ShopCategories data={firstFourFurniture} />
      )}
      {firstFourFurniture.length === 0 && (
        <Box>{isLoading ? <Loading /> : <NotFound />}</Box>
      )}

      {/* Hardware */}
      {/* <Box
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
      {firstFourHardware.length > 0 && (
        <ShopCategories data={firstFourHardware} />
      )}
      {firstFourHardware.length === 0 && (
        <Box>{isLoading ? <Loading /> : <NotFound />}</Box>
      )} */}

      {/* Bathware */}
      {/* <Box
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
      {firstFourBathware.length > 0 && (
        <ShopCategories data={firstFourBathware} />
      )}
      {firstFourBathware.length === 0 && (
        <Box>{isLoading ? <Loading /> : <NotFound />}</Box>
      )} */}

      {/* Gardenware */}
      {/* <Box
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
      {firstFourGardenware.length > 0 && (
        <ShopCategories data={firstFourGardenware} />
      )}
      {firstFourGardenware.length === 0 && (
        <Box>{isLoading ? <Loading /> : <NotFound />}</Box>
      )} */}

      {/* Lighting */}
      {/* <Box
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
      {firstFourLighting.length > 0 && (
        <ShopCategories data={firstFourLighting} />
      )}
      {firstFourLighting.length === 0 && (
        <Box>{isLoading ? <Loading /> : <NotFound />}</Box>
      )} */}
    </div>
  );
};

export default RecommendedItems;
