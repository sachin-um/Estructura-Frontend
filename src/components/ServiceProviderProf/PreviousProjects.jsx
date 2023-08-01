import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
import React, { useState } from 'react';

import API from '../../lib/API';

const projectsFetch = [] // TODO: Change 1 to user id
// const projectsFetch = await API.get('/projects/all/1') // TODO: Change 1 to user id
//   .then((res) => {
//     console.log(res);
//     return res.data;
//   })
//   .catch((err) => {
//     console.log(err);
//     return [];
//   });
function PreviousProjects() {
  const [projects, setProjects] = useState(projectsFetch);
  return (
    <Container style={{ marginBottom: '2rem' }}>
      <Box display="flex" justifyContent="flex-end" marginBottom="1rem">
        <Button variant="contained">Add Projects</Button>
      </Box>
      {projects.length !== 0 && (
        <Grid container justifyContent="space-evenly" spacing={2} wrap="wrap">
          {projects.map((project) => {
            console.log(project);
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
                      sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
                    >
                      <Typography variant="h6">
                        {project.name ?? 'ERROR'}
                      </Typography>
                      <Typography variant="subtitle1">
                        <Box alignItems="center" display="inline-flex">
                          <LocationOnIcon
                            fontSize="inherit"
                            sx={{ marginRight: 1 }}
                          />
                          {project.location ?? 'ERROR'}
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
      {projects.length === 0 && (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            height: '50vh',
            justifyContent: 'center',
          }}
        >
          <Typography color="primary" marginBottom="1rem" variant="h4">
            No Projects Found
          </Typography>
        </Box>
      )}
    </Container>
  );
}

export default PreviousProjects;
