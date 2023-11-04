import { Box, Pagination, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import '../../assets/font.css';
import Footer from '../../components/Footer';
import NotFound from '../../components/NoResults';
import ProfessionalCategories from '../../components/Professionals/ProfessionalCategories';
import TopAppBar from '../../components/TopAppBar';
import { useFetchAllProfessionals } from '../../hooks/professional/useFetchProfessionals';
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

const RecommendedProfessionals = ({ recommendedProfessionals }) => {
  //   const category = useParams().category as Role;

  const [pageSize, _setPageSize] = useState(8); // Should add a selector
  const [pageNumber, setPageNumber] = useState(1);

  //   const { fetchAllProfessionals, isLoading, professionals } =
  //     useFetchAllProfessionals();

  //   useEffect(() => {
  //     fetchAllProfessionals(category);
  //   }, [fetchAllProfessionals, category]);
  const professionals = [
    {
      id: 1,
      profileImageName: 'wwwwe',
      firstName: 'Saman',
      lastName: 'Perera',
      city: 'Kottawa',
    },
    {
      id: 2,
      profileImageName: 'wwwwe',
      firstName: 'Kamal',
      lastName: 'Wijesuriya',
      city: 'Nugegoda',
    },
    {
      id: 3,
      profileImageName: 'wwwwe',
      firstName: 'Nimali',
      lastName: 'Jayasekara',
      city: 'Maharagama',
    },
    {
      id: 4,
      profileImageName: 'wwwwe',
      firstName: 'Kasun',
      lastName: 'Hewage',
      city: 'Homagama',
    },
  ];
  const PaginatedItems = Paginate(
    recommendedProfessionals,
    pageNumber,
    pageSize,
  );

  return (
    <Container>
      <Typography
        color="#435834"
        fontFamily="Poppins"
        fontSize="30px"
        variant="h4"
      >
        Recommended Professionals
      </Typography>
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
          count={Math.ceil(recommendedProfessionals?.length / pageSize)}
        />
      </Box>
      <Footer />
    </Container>
  );
};

export default RecommendedProfessionals;
