import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import { type AnyAction, type ThunkDispatch } from '@reduxjs/toolkit';
import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Footer from '../../components/Footer';
import TopBar from '../../components/TopBar';
import {
  fetchProjectByById,
  getProjectError,
  getProjectStatus,
  selectProject,
} from '../../redux/Projects/SingleProjectReducer';

const ViewProject: FunctionComponent = () => {
  const projectId = parseInt(useParams<{ id: string }>().id ?? '0');
  const dispatch: ThunkDispatch<Project, void, AnyAction> = useDispatch();

  const project = useSelector(selectProject);
  const projectStatus = useSelector(getProjectStatus);
  const projectError = useSelector(getProjectError);
  const [selectedImage, setSelectedImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const navigate = useNavigate();
  useEffect(() => {
    if (projectStatus === 'idle') {
      dispatch(fetchProjectByById(projectId));
    }
    if (project) {
      setSelectedImage(
        `http://localhost:8080/files/project-files/${project?.createdBy}/${project?.id}/${project?.mainImageName}`,
      );
      setImageUrl(
        `http://localhost:8080/files/project-files/${project?.createdBy}/${project?.id}/`,
      );
      console.log(project);
    }
  }, [dispatch, project, projectId, projectStatus]);

  console.log(selectedImage);
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <>
      <TopBar />
      {projectError ? (
        <h1>ERROR: {projectError}</h1>
      ) : projectStatus === 'loading' ? (
        <h1>Loading...</h1>
      ) : project ? (
        <Container
          style={{
            backgroundColor: '#f7f8f1',
            minHeight: '100vh',
          }}
          maxWidth={false}
        >
          <Grid
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '1rem 3rem 3rem',
            }}
          >
            <Typography
              style={{
                fontSize: '1.5rem',
                lineHeight: '1',
                textAlign: 'center',
              }}
              variant="h4"
            >
              {project.name}
            </Typography>

            <Box
              height="350px"
              marginTop="20px"
              position="relative"
              width="100%"
            >
              {project.mainImage ? (
                <img
                  style={{
                    height: '100%',
                    objectFit: 'cover',
                    width: '100%',
                  }}
                  alt="main pic"
                  src={selectedImage}
                />
              ) : (
                <></>
              )}
            </Box>

            <Grid container spacing={1}>
              {project.extraImage1 ? (
                <Grid item xs={4}>
                  <Box
                    onClick={() =>
                      handleImageClick(imageUrl + project.extraImage1Name)
                    }
                    height="150px"
                    marginTop="30px"
                    position="relative"
                    width="100%"
                  >
                    <img
                      style={{
                        height: '100%',
                        objectFit: 'cover',
                        width: '100%',
                      }}
                      alt="Banner"
                      src={imageUrl + project.extraImage1Name}
                    />
                  </Box>
                </Grid>
              ) : (
                <></>
              )}
              {project.extraImage2 ? (
                <Grid item xs={4}>
                  <Box
                    onClick={() =>
                      handleImageClick(imageUrl + project.extraImage2Name)
                    }
                    height="150px"
                    marginTop="30px"
                    position="relative"
                    width="100%"
                  >
                    <img
                      style={{
                        height: '100%',
                        objectFit: 'cover',
                        width: '100%',
                      }}
                      alt="Banner"
                      src={imageUrl + project.extraImage2Name}
                    />
                  </Box>
                </Grid>
              ) : (
                <></>
              )}
              {project.extraImage3 ? (
                <Grid item xs={4}>
                  <Box
                    onClick={() =>
                      handleImageClick(imageUrl + project.extraImage3Name)
                    }
                    height="150px"
                    marginTop="30px"
                    position="relative"
                    width="100%"
                  >
                    <img
                      style={{
                        height: '100%',
                        objectFit: 'cover',
                        width: '100%',
                      }}
                      alt="Banner"
                      src={imageUrl + project.extraImage3Name}
                    />
                  </Box>
                </Grid>
              ) : (
                <></>
              )}
            </Grid>
            <Divider
              style={{
                marginTop: '20px',
                width: '100%',
              }}
            />
            <Typography
              style={{
                fontSize: '1.2rem',
                lineHeight: '1',
                marginTop: '20px',
              }}
              variant="h3"
            >
              Project Details
            </Typography>

            <Divider />

            <Grid container justifyContent="center" spacing={4}>
              <Grid
                style={{
                  marginTop: '2rem',
                }}
                item
                md={6}
                xs={12}
              >
                <Card sx={{ minHeight: 300, minWidth: 200 }}>
                  <CardContent>
                    <Typography>Description</Typography>
                    {project.description}
                  </CardContent>
                </Card>
              </Grid>

              <Grid
                style={{
                  marginTop: '2rem',
                }}
                item
                md={6}
                xs={12}
              >
                <Card sx={{ marginBottom: 7, minHeight: 120, minWidth: 200 }}>
                  <CardContent>
                    <Typography>Budget</Typography>
                    {project.cost}
                  </CardContent>
                </Card>
                <Card sx={{ minHeight: 120, minWidth: 200 }}>
                  <CardContent>
                    <Typography>Location</Typography>
                    {project.location ? project.location : 'Unknown'}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Divider
              style={{
                marginTop: '20px',
                width: '100%',
              }}
            />
            <Typography
              style={{
                fontSize: '1.2rem',
                lineHeight: '1',
                marginTop: '20px',
              }}
              variant="h4"
            >
              Documents
            </Typography>

            <Grid container spacing={2}>
              {project.document1 ? (
                <Grid xs={4}>
                  <Box
                    sx={{
                      borderColor: 'grey',
                      borderStyle: 'dashed',
                    }}
                    display={'flex'}
                    height="50px"
                    marginTop="30px"
                    position="relative"
                    width="100%"
                  >
                    <InsertDriveFileIcon
                      style={{
                        marginLeft: '10px',
                        marginTop: '10px',
                      }}
                    />

                    {/* <Typography
                      style={{
                        backgroundColor: '#F9F6EE',
                        justifyContent: 'center',
                        marginLeft: '20px',
                        marginTop: '10px',
                      }}
                    >
                      {fileName}
                    </Typography> */}
                    <Link
                      href={imageUrl + project.document1Name}
                      underline="hover"
                    >
                      {project.document1}
                    </Link>
                  </Box>
                </Grid>
              ) : (
                <></>
              )}
              {project.document2 ? (
                <Grid xs={4}>
                  <Box
                    sx={{
                      borderColor: 'grey',
                      borderStyle: 'dashed',
                    }}
                    display={'flex'}
                    height="50px"
                    marginTop="30px"
                    position="relative"
                    width="100%"
                  >
                    <InsertDriveFileIcon
                      style={{
                        marginLeft: '10px',
                        marginTop: '10px',
                      }}
                    />

                    {/* <Typography
                      style={{
                        backgroundColor: '#F9F6EE',
                        justifyContent: 'center',
                        marginLeft: '20px',
                        marginTop: '10px',
                      }}
                    >
                      {fileName}
                    </Typography> */}
                    <Link
                      href={imageUrl + project.document2Name}
                      underline="hover"
                    >
                      {project.document2}
                    </Link>
                  </Box>
                </Grid>
              ) : (
                <></>
              )}
              {project.document3 ? (
                <Grid xs={4}>
                  <Box
                    sx={{
                      borderColor: 'grey',
                      borderStyle: 'dashed',
                    }}
                    display={'flex'}
                    height="50px"
                    marginTop="30px"
                    position="relative"
                    width="100%"
                  >
                    <InsertDriveFileIcon
                      style={{
                        marginLeft: '10px',
                        marginTop: '10px',
                      }}
                    />

                    {/* <Typography
                      style={{
                        backgroundColor: '#F9F6EE',
                        justifyContent: 'center',
                        marginLeft: '20px',
                        marginTop: '10px',
                      }}
                    >
                      {fileName}
                    </Typography> */}
                    <Link
                      href={imageUrl + project.document3Name}
                      underline="hover"
                    >
                      {project.document3}
                    </Link>
                  </Box>
                </Grid>
              ) : (
                <></>
              )}
            </Grid>
          </Grid>
        </Container>
      ) : (
        <h1>Project is Not Found</h1>
      )}

      <Footer />
    </>
  );
};

export default ViewProject;
