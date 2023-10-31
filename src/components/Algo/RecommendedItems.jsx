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

const RecommendedItems = ({ recommendedItems }) => {
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
  const PaginatedItems = Paginate(recommendedItems, pageNumber, pageSize);
  const navigate = useNavigate();
  return (
    <Container>
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
          Recommended Products
        </Typography>
      </Box>
      {PaginatedItems.length > 0 ? (
        <ShopCategories data={PaginatedItems} />
      ) : (
        <NotFound />
      )}

      <Box display={'flex'} justifyContent={'center'} marginBottom={'2rem'}>
        <Pagination
          onChange={(_event, value) => {
            setPageNumber(value);
          }}
          count={Math.ceil(recommendedItems.length / pageSize)}
        />
      </Box>
    </Container>
  );
};

export default RecommendedItems;
