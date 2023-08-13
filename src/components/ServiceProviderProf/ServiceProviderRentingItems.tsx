import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import RoomIcon from '@mui/icons-material/Room';
import ScheduleIcon from '@mui/icons-material/Schedule';
import StoreIcon from '@mui/icons-material/Store';
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
import { useDispatch, useSelector } from 'react-redux';

import '../../assets/font.css';
import {
  fetchRentingItemByRenter,
  selectAllRentingItems,
} from '../../redux/Renting/RentingItemsReducer';
import { getRentingItemStatus } from '../../redux/Renting/SingleRentingItemReducer';
import { selectUser } from '../../redux/UserAuthenticationReducer';

function ProfileRentingItems() {
  // TODO: use Previous projects Reducer
  const LoggedInUser = useSelector(selectUser);
  const rentingItems = useSelector(selectAllRentingItems);
  const RentingItemsStatus = useSelector(getRentingItemStatus);

  const dispatch: ThunkDispatch<RentingItem[], void, AnyAction> = useDispatch();

  useEffect(() => {
    if (RentingItemsStatus === 'idle' && LoggedInUser !== null) {
      dispatch(fetchRentingItemByRenter(LoggedInUser.id));
    }
  }, [LoggedInUser, dispatch, RentingItemsStatus]);

  return (
    <Container style={{ marginBottom: '2rem' }}>
      <Box display="flex" justifyContent="flex-end" marginBottom="1rem">
        <Button variant="contained">Add Projects</Button>
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
                      style={{
                        borderBottom: '2px solid #000',
                        height: '200px',
                        width: '100%',
                      }}
                      alt="Project 1"
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
                          {`LKR. ${rentingItem.price ?? 'ERROR'} | per hour`}
                        </Box>
                        <Box
                          alignItems="center"
                          display="flex"
                          gap={1}
                          marginBottom={1}
                          marginTop="10px"
                        >
                          <PersonIcon color="primary" fontSize="small" />
                          <Typography variant="body2">
                            {rentingItem.name ?? 'Unknown User'}
                          </Typography>
                        </Box>
                        <Box
                          alignItems="center"
                          display="flex"
                          gap={1}
                          marginBottom={1}
                        >
                          <StoreIcon color="primary" fontSize="small" />
                          <Typography variant="body2">
                            {rentingItem.createdBy ?? 'Unknown Store'}
                          </Typography>
                        </Box>
                        <Box
                          alignItems="center"
                          display="flex"
                          gap={1}
                          marginBottom={1}
                        >
                          <LocationOnIcon color="primary" fontSize="small" />
                          <Typography variant="body2">
                            {rentingItem.location ?? 'Unknown Location'}
                          </Typography>
                        </Box>
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                      <Button
                        startIcon={<EditIcon />}
                        sx={{ marginRight: 3, width: '130px' }}
                        variant="outlined"
                      >
                        Edit
                      </Button>
                      <Button
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
      {rentingItems.length === 0 && (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            height: '50vh',
            justifyContent: 'center',
          }}
        >
          <Typography color="primary" marginBottom="1rem" variant="h4">
            {RentingItemsStatus === 'loading'
              ? 'Loading...'
              : RentingItemsStatus === 'failed'
              ? 'Failed to load projects'
              : 'No projects found'}
          </Typography>
        </Box>
      )}
    </Container>
  );
}

export default ProfileRentingItems;
