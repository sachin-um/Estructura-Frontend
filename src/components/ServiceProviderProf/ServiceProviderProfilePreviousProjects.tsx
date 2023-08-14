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
import { useNavigate } from 'react-router-dom';

import NotFound from '../../components/NoResults';
import {
  fetchProjectByProfessional,
  getProjectsMutated,
  getProjectsStatus,
  selectAllProjects,
  setProjectsMutated,
} from '../../redux/Projects/ProjectsReducer';
import {
  deleteProject,
  getProjectStatus,
} from '../../redux/Projects/SingleProjectReducer';
import { selectUser } from '../../redux/UserAuthenticationReducer';

function ProfilePreviousProjects() {
  // TODO: use Previous projects Reducer
  const LoggedInUser = useSelector(selectUser);
  const projects = useSelector(selectAllProjects);
  const projectsStatus = useSelector(getProjectsStatus);
  const projectsMutated = useSelector(getProjectsMutated);

  const dispatch: ThunkDispatch<Project[], void, AnyAction> = useDispatch();

  useEffect(() => {
    if (projectsStatus === 'idle' && LoggedInUser !== null) {
      dispatch(fetchProjectByProfessional(LoggedInUser.id));
    }
  }, [LoggedInUser, dispatch, projectsMutated, projectsStatus]);

  useEffect(() => {
    if (projectsMutated && LoggedInUser) {
      dispatch(fetchProjectByProfessional(LoggedInUser.id ?? 0));
      dispatch(setProjectsMutated(false));
    }
  }, [LoggedInUser, dispatch, projectsMutated]);

  const navigate = useNavigate();

  return (
    <Container style={{ marginBottom: '2rem' }}>
      <Box display="flex" justifyContent="flex-end" marginBottom="1rem">
        <Button
          onClick={() => {
            navigate('/projects/add');
          }}
          variant="contained"
        >
          Add Projects
        </Button>
      </Box>
      {projects.length !== 0 && (
        <Grid container justifyContent="space-evenly" spacing={2} wrap="wrap">
          {projects.map((project) => {
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
                      alt={`${project.mainImage}`}
                      src={`http://localhost:8080/files/project-files/${project.createdBy}/${project.id}/${project.mainImageName}`}
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
                        onClick={() => navigate(`/projects/edit/${project.id}`)}
                        startIcon={<EditIcon />}
                        sx={{ marginRight: 2 }}
                        variant="outlined"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() =>
                          dispatch(deleteProject(project.id)).then((action) => {
                            if (deleteProject.fulfilled.match(action)) {
                              dispatch(setProjectsMutated(true));
                            }
                          })
                        }
                        startIcon={<DeleteIcon />}
                        variant="outlined"
                      >
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
          {projectsStatus === 'loading' ? (
            <Typography color="primary" marginBottom="1rem" variant="h4">
              Loading...
            </Typography>
          ) : projectsStatus === 'failed' ? (
            'Failed to load projects'
          ) : (
            <img alt="hi" src="/noContent.jpg" />
          )}
        </Box>
      )}
    </Container>
  );
}

export default ProfilePreviousProjects;
