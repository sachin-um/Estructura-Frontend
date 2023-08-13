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
                      src={`http://localhost:8080/files/retail-item-files/${retailItem?.createdBy}/${retailItem?.id}/${retailItem?.mainImageName}`}
                    />
                    <CardContent
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0,
                        justifyContent: 'space-between',
                        paddingTop: '0px',
                      }}
                    >
                      <Typography fontFamily="Poppins" variant="h6">
                        {retailItem.name ?? 'ERROR'}
                      </Typography>
                      <Typography
                        color="primary"
                        fontFamily="Poppins"
                        fontWeight="bold"
                        variant="subtitle1"
                      >
                        <Box alignItems="center" display="flex" gap={1}>
                          {`LKR. ${retailItem.price ?? 'ERROR'}`}
                        </Box>
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        justifyContent: 'center',
                        marginBottom: '5px',
                        marginTop: 'auto',
                      }}
                    >
                      <Button
                        startIcon={<EditIcon />}
                        sx={{ marginRight: 2, width: '130px' }}
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
                        {new Date(retailItem.dateAdded).toLocaleDateString(
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