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
import { useNavigate } from 'react-router-dom';

import NotFound from '../../components/NoResults';
import Loading from '../../pages/loading';
import { useProjects } from '../../redux/Projects/useProjects';

function ProfilePreviousProjects() {
  const navigate = useNavigate();

  const { deleteProjectById, projects, projectsStatus } = useProjects();

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
                      onClick={() => {
                        navigate(`/projects/${project.id}`);
                      }}
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
                          deleteProjectById(project.id).then((deleted) => {
                            if (deleted) {
                              alert('Project Deleted');
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
          {projectsStatus === 'loading' || projectsStatus === 'idle' ? (
            <Loading />
          ) : projectsStatus === 'failed' ? (
            'Failed to load projects'
          ) : (
            <NotFound />
          )}
        </Box>
      )}
    </Container>
  );
}

export default ProfilePreviousProjects;
