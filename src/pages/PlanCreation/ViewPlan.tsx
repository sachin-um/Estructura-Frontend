import { RedoRounded } from '@mui/icons-material';
import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Professional from '../../components/Auth/signup/Professional';
import Footer from '../../components/Footer';
import TopAppBar from '../../components/TopAppBar';
import { useFetchPlan } from '../../hooks/plans/useFetchPlan';
import { useFetchAllProfessionals } from '../../hooks/professional/useFetchProfessionals';
import { useFetchRentingItems } from '../../hooks/rentingItem/useFetchRentingItems';
import { useFetchRetailItems } from '../../hooks/retailItem/useFetchRetailItems';
import useCurrentUser from '../../hooks/users/useCurrentUser';
import Loading from '../loading';

function ViewPlan() {
  const planId = parseInt(useParams<{ id: string }>().id ?? '0');

  const cardContent = [
    {
      title: 'Professionals',
    },
    {
      title: 'Retail Items',
    },
    {
      title: 'Rental Items',
    },
  ];

  const { fetchPlan, isLoading, plan } = useFetchPlan();

  useEffect(() => {
    fetchPlan(planId);
  }, [fetchPlan, planId]);

  const { fetchAllProfessionals, professionals } = useFetchAllProfessionals();

  useEffect(() => {
    fetchAllProfessionals();
  }, [fetchAllProfessionals]);

  const { fetchRentingItems, rentingItems } = useFetchRentingItems();

  useEffect(() => {
    fetchRentingItems({});
  }, [fetchRentingItems]);

  const { fetchRetailItems, retailItems } = useFetchRetailItems();

  useEffect(() => {
    fetchRetailItems({});
  }, [fetchRetailItems]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <TopAppBar />

      <Paper
        sx={{
          alignItems: 'center',
          // backgroundColor: selectedImage ? 'transparent' : '#F3F3F3',
          // backgroundImage: selectedImage ? `url(${selectedImage})` : 'none',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          height: '300px',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
        elevation={3}
      >
        <Typography
          // color={selectedImage ? 'white' : '#435834'}
          fontFamily="Poppins"
          variant="h4"
        >
          Plan Your Dream Project
        </Typography>
      </Paper>

      <Container>
        <Typography
          fontFamily="Poppins"
          fontSize="20px"
          marginTop="30px"
          variant="body1"
        >
          Title of your plan:
        </Typography>
        <Typography
          fontFamily="Poppins"
          fontSize="16px"
          marginLeft="20px"
          variant="body2"
        >
          {plan?.planName}
        </Typography>
      </Container>

      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
      >
        {cardContent.map((item, index) => (
          <Grid item key={index} marginTop="30px" md={4} sm={6} xs={12}>
            <Paper
              sx={{
                alignItems: 'flex-start',
                backgroundColor: '#F3F3F3',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                margin: '0px 10px 30px 40px',
                marginRight: '5px',
                minHeight: '200px',
                padding: '1rem',
                width: '350px',
              }}
            >
              <Box textAlign="center">
                <Typography fontFamily="Poppins" mb={2} variant="h5">
                  {item.title}
                </Typography>
                <Box marginBottom={3}>
                  {item.title === 'Professionals' ? (
                    <Stack sx={{ textAlign: 'left' }}>
                      {plan?.customerPlanProfessionals.map((prof) => {
                        const professional = professionals.find(
                          (p) => p.id === prof.professionalId,
                        );
                        return (
                          <div key={prof.professionalId}>
                            {professional?.firstName} {professional?.lastName} [
                            {professional?.role}]
                          </div>
                        );
                      })}
                    </Stack>
                  ) : item.title === 'Retail Items' ? (
                    <Stack>
                      {plan?.customerPlanRetailItems.map((ret) => {
                        const retailItem = retailItems.find(
                          (i) => i.id === ret.retailItems,
                        );
                        return (
                          <div key={ret.id}>
                            {retailItem?.name} Rs.{retailItem?.price}
                          </div>
                        );
                      })}
                    </Stack>
                  ) : (
                    <Stack>
                      {plan?.customerPlanRentingItems.map((ren) => {
                        const rentingItem = rentingItems.find(
                          (r) => r.id === ren.rentingItemId,
                        );
                        return (
                          <div key={ren.id}>
                            {rentingItem?.name} Rs.{rentingItem?.price}
                          </div>
                        );
                      })}
                    </Stack>
                  )}
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Box>

      <Container>
        <Typography
          fontFamily="Poppins"
          fontSize="20px"
          marginTop="30px"
          variant="body1"
        >
          Special Notes:
        </Typography>
        <Typography
          fontFamily="Poppins"
          fontSize="16px"
          marginLeft="20px"
          variant="body1"
        >
          {plan?.note}
        </Typography>
      </Container>

      <Container>Images</Container>

      <Container>Documents</Container>

      <Container>
        <Typography
          fontFamily="Poppins"
          fontSize="20px"
          marginTop="30px"
          variant="body1"
        >
          Estimated Budget
        </Typography>
        <Typography fontSize="20px" marginLeft="50px" variant="h6">
          <strong>LKR {plan?.budget}</strong>
        </Typography>
      </Container>

      {/* <Box display='flex' justifyContent='center' marginTop='30px' marginBottom='50px'>
          <Button variant='contained' color='primary' size='large'>
            Edit Plan
          </Button>
        </Box> */}

      <Footer />
    </>
  );
}

export default ViewPlan;
