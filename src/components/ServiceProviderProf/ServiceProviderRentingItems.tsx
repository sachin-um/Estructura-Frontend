import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import RoomIcon from '@mui/icons-material/Room';
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
                      sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
                    >
                      <Typography variant="h6">
                        {rentingItem.name ?? 'ERROR'}
                      </Typography>
                      <Typography variant="subtitle1">
                        <Box alignItems="center" display="inline-flex">
                          <LocationOnIcon
                            fontSize="inherit"
                            sx={{ marginRight: 1 }}
                          />
                          {new Date(rentingItem.dateAdded).toLocaleDateString(
                            'en-US',
                          )}
                        </Box>
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                      <Button
                        startIcon={<EditIcon />}
                        sx={{ marginRight: 2 }}
                        variant="outlined"
                      >
                        Edit
                      </Button>
                      <Button startIcon={<DeleteIcon />} variant="outlined">
                        Delete
                      </Button>
                    </CardActions>
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
