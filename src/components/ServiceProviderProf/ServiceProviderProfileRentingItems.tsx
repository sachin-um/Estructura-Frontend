import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ScheduleIcon from '@mui/icons-material/Schedule';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../assets/font.css';
import { useFetchRentingItems } from '../../hooks/rentingItem/useFetchRentingItems';
import { useRentingItem } from '../../hooks/rentingItem/useRentingItem';
import { useUsers } from '../../redux/UserInfo/useUsers';
import NotFound from '../NoResults';

function ProfileRentingItems() {
  const { currentUser } = useUsers();
  const { fetchRentingItems, rentingItems } = useFetchRentingItems();
  const { deleteRentingItemById } = useRentingItem();

  useEffect(() => {
    if (currentUser) fetchRentingItems({ userId: currentUser.id });
  }, [currentUser, fetchRentingItems]);

  const navigate = useNavigate();

  return (
    <Container style={{ marginBottom: '2rem' }}>
      <Box display="flex" justifyContent="flex-end" marginBottom="1rem">
        <Button
          onClick={() => {
            navigate('/rentingItems/add');
          }}
          variant="contained"
        >
          Add Renting Items
        </Button>
      </Box>
      {rentingItems.length !== 0 && (
        <Grid container justifyContent="space-evenly" spacing={2} wrap="wrap">
          {rentingItems.map((rentingItem) => {
            console.log(rentingItem);
            return (
              <>
                <Grid item sm={4} xs={12}>
                  <Card elevation={4}>
                    <img
                      onClick={() => {
                        navigate(`/rentingItems/${rentingItem?.id}`);
                      }}
                      style={{
                        borderBottom: '2px solid #000',
                        height: '200px',
                        width: '100%',
                      }}
                      alt="Renting items 1"
                      src={`http://localhost:8080/files/renting-item-files/${rentingItem?.createdBy}/${rentingItem?.id}/${rentingItem?.mainImageName}`}
                    />
                    <CardContent
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        paddingTop: '5px',
                      }}
                    >
                      <Typography fontFamily="Poppins" variant="h6">
                        {rentingItem.name ?? 'ERROR'}
                      </Typography>
                      <Typography
                        color="primary"
                        fontFamily="Poppins"
                        fontWeight="bold"
                        variant="subtitle1"
                      >
                        <Box alignItems="center" display="flex" gap={1}>
                          {`LKR. ${rentingItem.price ?? 'ERROR'} | ${
                            rentingItem.scale ?? 'ERROR'
                          }`}
                        </Box>
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                      <Button
                        onClick={() => {
                          navigate(`/rentingItems/edit/${rentingItem.id}`);
                        }}
                        startIcon={<EditIcon />}
                        sx={{ marginRight: 3, width: '130px' }}
                        variant="outlined"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => {
                          deleteRentingItemById(rentingItem.id).then(
                            (deleted) => {
                              if (deleted) {
                                alert('Renting Item Deleted');
                              }
                            },
                          );
                        }}
                        startIcon={<DeleteIcon />}
                        sx={{ width: '130px' }}
                        variant="outlined"
                      >
                        Delete
                      </Button>
                    </CardActions>
                    <Typography variant="subtitle1">
                      <Box
                        alignItems="center"
                        color="grey"
                        display="flex"
                        fontSize="13px"
                        gap={1}
                        justifyContent="right"
                        marginBottom={1}
                        marginRight="5px"
                        marginTop="5px"
                      >
                        <ScheduleIcon color="inherit" fontSize="inherit" />
                        {new Date(rentingItem.dateAdded).toLocaleDateString(
                          'en-US',
                        )}
                      </Box>
                    </Typography>
                  </Card>
                </Grid>
              </>
            );
          })}
        </Grid>
      )}
      {rentingItems.length === 0 && <NotFound />}
    </Container>
  );
}

export default ProfileRentingItems;
