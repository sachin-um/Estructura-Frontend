import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import API from "../../lib/API";

const projectsFetch = await API.get("/projects/all/1") // TODO: Change 1 to user id
  .then((res) => {
    console.log(res);
    return res.data;
  })
  .catch((err) => {
    console.log(err);
    return [];
  });
function PreviousProjects() {
  const [projects, setProjects] = useState(projectsFetch);
  return (
    <Container style={{ marginBottom: "2rem" }}>
      <Box display='flex' justifyContent='flex-end' marginBottom='1rem'>
        <Button variant='contained'>Add Projects</Button>
      </Box>
      { projects.length !== 0 &&
      <Grid container spacing={2} justifyContent='space-evenly' wrap='wrap'>
        {projects.map((project) => {
          console.log(project);
          return (
            <>
              <Grid item xs={12} sm={4}>
                <Card elevation={4}>
                  <img
                    src='BannerImage.jpg'
                    alt='Project 1'
                    style={{
                      width: "100%",
                      height: "200px",
                      borderBottom: "2px solid #000",
                    }}
                  />
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <Typography variant='h6'>
                      {project.name ?? "ERROR"}
                    </Typography>
                    <Typography variant='subtitle1'>
                      <Box display='inline-flex' alignItems='center'>
                        <LocationOnIcon
                          fontSize='inherit'
                          sx={{ marginRight: 1 }}
                        />
                        {project.location ?? "ERROR"}
                      </Box>
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button
                      variant='outlined'
                      startIcon={<EditIcon />}
                      sx={{ marginRight: 2 }}
                    >
                      Edit
                    </Button>
                    <Button variant='outlined' startIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid> }
      {
        projects.length === 0 &&
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <Typography variant='h4' color='primary' marginBottom='1rem'>No Projects Found</Typography>
        </Box>
      }
    </Container>
  );
}

export default PreviousProjects;
