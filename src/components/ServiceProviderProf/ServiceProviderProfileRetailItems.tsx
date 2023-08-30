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

import NotFound from '../../components/NoResults';
import { useFetchRetailItems } from '../../hooks/retailItem/useFetchRetailItems';
import { useRetailItem } from '../../hooks/retailItem/useRetailItem';
import useCurrentUser from '../../hooks/users/useCurrentUser';

function ProfileRetailItems() {
  const currentUser = useCurrentUser();
  const { deleteRetailItemById } = useRetailItem();
  const { fetchRetailItems, retailItems } = useFetchRetailItems();

  useEffect(() => {
    if (currentUser) fetchRetailItems({ storeId: currentUser.id });
  }, [currentUser, fetchRetailItems]);

  const navigate = useNavigate();

  return (
    <Container style={{ marginBottom: '2rem' }}>
      <Box display="flex" justifyContent="flex-end" marginBottom="1rem">
        <Button
          onClick={() => {
            navigate('/shop/item/add');
          }}
          variant="contained"
        >
          Add Retail Items
        </Button>
      </Box>
      {retailItems.length !== 0 && (
        <Grid container justifyContent="space-evenly" spacing={2} wrap="wrap">
          {retailItems.map((retailItem) => {
            console.log(retailItem);
            return (
              <>
                <Grid item sm={4} xs={12}>
                  <Card elevation={4}>
                    <img
                      onClick={() => {
                        navigate(`/shop/item/${retailItem?.id}`);
                      }}
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
                        onClick={() => {
                          navigate(`/shop/item/edit/${retailItem.id}`);
                        }}
                        startIcon={<EditIcon />}
                        sx={{ marginRight: 2, width: '130px' }}
                        variant="outlined"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => {
                          deleteRetailItemById(retailItem.id).then(
                            (deleted) => {
                              if (deleted) {
                                alert('Deleted Item');
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
      {retailItems.length === 0 && <NotFound />}
    </Container>
  );
}

export default ProfileRetailItems;
