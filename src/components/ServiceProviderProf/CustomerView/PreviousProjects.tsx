import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFetchProjects } from '../../../hooks/project/useFetchProjects';
import Loading from '../../../pages/loading';

function PreviousProjects({ userId }: { userId: number }) {
  const { fetchProjects, isLoading, projects } = useFetchProjects();

  useEffect(() => {
    fetchProjects(userId);
  }, [fetchProjects, userId]);

  console.log(projects);

  const navigate = useNavigate();

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <Grid container margin={'2rem'} spacing={2}>
        {projects.map((project) => (
          <Grid item key={project.id} sm={4} xs={12}>
            <Card
              onClick={() => {
                navigate(`/projects/${project.id}`);
              }}
              sx={{ height: '100%' }}
            >
              <img
                alt={project.mainImage}
                src={`http://localhost:8080/files/project-files/${project.createdBy}/${project.id}/${project.mainImageName}`}
                style={{ height: '200px', width: '100%' }}
              />
              <CardContent>
                <Typography variant="h6">{project.name}</Typography>
                <Box alignItems="center" display="flex">
                  <LocationOnIcon fontSize="small" />
                  <Typography variant="body2">{project.location}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PreviousProjects;
