import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

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
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchRetailItemByRetailer,
  selectAllRetailItems,
} from '../../redux/RetailItems/RetailItemsReducer';
import { getRetailItemStatus } from '../../redux/RetailItems/SingleRetailItemReducer';
import { selectUser } from '../../redux/UserAuthenticationReducer';

function ProfileRetailItems() {
  // TODO: use Previous projects Reducer
  const LoggedInUser = useSelector(selectUser);
  const retailitems = useSelector(selectAllRetailItems);
  const retailitemsStatus = useSelector(getRetailItemStatus);

  const dispatch: ThunkDispatch<RetailItem[], void, AnyAction> = useDispatch();

  useEffect(() => {
    if (retailitemsStatus === 'idle' && LoggedInUser !== null) {
      dispatch(fetchRetailItemByRetailer(LoggedInUser.id));
    }
  }, [LoggedInUser, dispatch, retailitemsStatus]);

  return (
    <Container style={{ marginBottom: '2rem' }}>
      <Box display="flex" justifyContent="flex-end" marginBottom="1rem">
        <Button variant="contained">Add Retail Items</Button>
      </Box>
      {retailitems.length !== 0 && (
        <Grid container justifyContent="space-evenly" spacing={2} wrap="wrap">
          {retailitems.map((retailItem) => {
            console.log(retailItem);
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
                      src="BannerImage.jpg"
                    />
                    <CardContent
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography variant="h6">
                        {retailItem.name ?? 'ERROR'}
                      </Typography>
                      <Typography variant="subtitle1">
                        <Box alignItems="center" display="flex" gap={1}>
                          <ScheduleIcon
                            fontSize="inherit"
                            sx={{ marginRight: 1 }}
                          />
                          {new Date(retailItem.dateAdded).toLocaleDateString(
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
      {retailitems.length === 0 && (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            height: '50vh',
            justifyContent: 'center',
          }}
        >
          <Typography color="primary" marginBottom="1rem" variant="h4">
            {retailitemsStatus === 'loading'
              ? 'Loading...'
              : retailitemsStatus === 'failed'
              ? 'Failed to load retail items'
              : 'No retail items found'}
          </Typography>
        </Box>
      )}
    </Container>
  );
}

export default ProfileRetailItems;
