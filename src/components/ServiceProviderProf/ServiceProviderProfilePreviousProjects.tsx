import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

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
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchProjectByProfessional,
  selectAllProjects,
} from '../../redux/Projects/ProjectsReducer';
import { getProjectStatus } from '../../redux/Projects/SingleProjectReducer';
import { selectUser } from '../../redux/UserAuthenticationReducer';

function ProfilePreviousProjects() {
  // TODO: use Previous projects Reducer
  const LoggedInUser = useSelector(selectUser);
  const projects = useSelector(selectAllProjects);
  const projectsStatus = useSelector(getProjectStatus);

  const dispatch: ThunkDispatch<Project[], void, AnyAction> = useDispatch();

  useEffect(() => {
    if (projectsStatus === 'idle' && LoggedInUser !== null) {
      dispatch(fetchProjectByProfessional(LoggedInUser.id));
    }
  }, [LoggedInUser, dispatch, projectsStatus]);

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
            {projectsStatus === 'loading'
              ? 'Loading...'
              : projectsStatus === 'failed'
              ? 'Failed to load projects'
              : 'No projects found'}
          </Typography>
        </Box>
      )}
    </Container>
  );
}

export default ProfilePreviousProjects;
