import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import type { FunctionComponent } from 'react';

import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Footer from '../../components/Footer';
import NotFound from '../../components/NoResults';
import TopAppBar from '../../components/TopAppBar';
import Loading from '../../pages/loading';
import {
  fetchProjectByById,
  getProjectError,
  getProjectStatus,
  selectProject,
} from '../../redux/Projects/SingleProjectReducer';
import {
  fetchUserById,
  getUser,
  getUserStatus,
} from '../../redux/UserInfo/SingleUserInfoReducer';

const ViewProject: FunctionComponent = () => {
  const projectId = parseInt(useParams<{ id: string }>().id ?? '0');
  const dispatch: ThunkDispatch<Project, void, AnyAction> = useDispatch();
  const dispatchUser: ThunkDispatch<User, void, AnyAction> = useDispatch();

  const project = useSelector(selectProject);
  const projectStatus = useSelector(getProjectStatus);
  const projectError = useSelector(getProjectError);
  const [selectedImage, setSelectedImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [userId, setUserId] = useState(0);

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
      setUserId(project.createdBy);
      console.log(project);
    }
  }, [dispatch, project, projectId, projectStatus]);

  const userinfo = useSelector(getUser);
  const userStatus = useSelector(getUserStatus);

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatchUser(fetchUserById(userId));
    } else {
      console.log(userinfo);
    }
  }, [userStatus, dispatchUser, userinfo, userId]);
  console.log(selectedImage);
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <>
      <TopAppBar />
      {projectError ? (
        <h1>ERROR: {projectError}</h1>
      ) : projectStatus === 'loading' ? (
        <Loading />
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
                fontSize: '2rem',
                fontWeight: 'bold',
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
              sx={{ border: 1, borderColor: 'grey.500' }}
              width="80%"
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

            <Grid
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginTop: '30px',
              }}
              container
              spacing={1}
            >
              {project.mainImage ? (
                <Box
                  onClick={() =>
                    handleImageClick(imageUrl + project.mainImageName)
                  }
                  sx={{
                    border: 1,
                    borderColor: 'grey.500',
                    height: '200px',
                    overflow: 'hidden',
                    position: 'relative',
                    width: '20%',
                  }}
                >
                  <img
                    style={{
                      height: '200px',
                      objectFit: 'cover',
                      width: '100%',
                    }}
                    alt="Banner"
                    src={imageUrl + project.mainImageName}
                  />
                </Box>
              ) : (
                <></>
              )}
              {project.extraImage1 ? (
                <Box
                  onClick={() =>
                    handleImageClick(imageUrl + project.extraImage1Name)
                  }
                  sx={{
                    border: 1,
                    borderColor: 'grey.500',
                    height: '200px',
                    overflow: 'hidden',
                    position: 'relative',
                    width: '20%',
                  }}
                >
                  <img
                    style={{
                      height: '200px',
                      objectFit: 'cover',
                      width: '100%',
                    }}
                    alt="Banner"
                    src={imageUrl + project.extraImage1Name}
                  />
                </Box>
              ) : (
                <></>
              )}
              {project.extraImage2 ? (
                <Box
                  onClick={() =>
                    handleImageClick(imageUrl + project.extraImage2Name)
                  }
                  sx={{
                    border: 1,
                    borderColor: 'grey.500',
                    height: '200px',
                    overflow: 'hidden',
                    position: 'relative',
                    width: '20%',
                  }}
                >
                  <img
                    style={{
                      height: '200px',
                      objectFit: 'cover',
                      width: '100%',
                    }}
                    alt="Banner"
                    src={imageUrl + project.extraImage2Name}
                  />
                </Box>
              ) : (
                <></>
              )}
              {project.extraImage3 ? (
                <Box
                  onClick={() =>
                    handleImageClick(imageUrl + project.extraImage3Name)
                  }
                  sx={{
                    border: 1,
                    borderColor: 'grey.500',
                    height: '200px',
                    overflow: 'hidden',
                    position: 'relative',
                    width: '20%',
                  }}
                >
                  <img
                    style={{
                      height: '200px',
                      objectFit: 'cover',
                      width: '100%',
                    }}
                    alt="Banner"
                    src={imageUrl + project.extraImage3Name}
                  />
                </Box>
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
                md={8}
                xs={12}
              >
                <Card sx={{ minHeight: 300, minWidth: 300 }}>
                  <CardContent>
                    <Typography sx={{ marginBottom: '20px' }}>
                      Description
                    </Typography>
                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid
                style={{
                  marginTop: '2rem',
                }}
                item
                md={4}
                xs={12}
              >
                <Card sx={{ marginBottom: 7, minHeight: 120, minWidth: 100 }}>
                  <CardContent>
                    <Typography sx={{ marginBottom: '20px' }}>
                      Budget
                    </Typography>
                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                      LKR:{project.cost.toFixed(2)}{' '}
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minHeight: 120, minWidth: 100 }}>
                  <CardContent>
                    <Typography sx={{ marginBottom: '20px' }}>
                      Location
                    </Typography>
                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                      {project.location ? project.location : 'Unknown'}
                    </Typography>
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

            <Grid
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px',
                width: '60%',
              }}
              container
              spacing={1}
            >
              {project.document1 ? (
                <Box
                  sx={{
                    backgroundColor: '#f3f3f3',
                    border: 1,
                    borderColor: 'grey',
                  }}
                  display={'flex'}
                  height="50px"
                  marginTop="30px"
                  position="relative"
                  width="200px"
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
                    <Typography
                      style={{
                        fontWeight: 'bold',
                        marginLeft: '5px',
                        marginTop: '10px',
                        maxWidth: '150px',
                        overflow: 'hidden',
                        textAlign: 'left',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {project.document1}
                    </Typography>
                  </Link>
                </Box>
              ) : (
                <></>
              )}
              {project.document2 ? (
                <Box
                  sx={{
                    backgroundColor: '#f3f3f3',
                    border: 1,
                    borderColor: 'grey',
                  }}
                  display={'flex'}
                  height="50px"
                  marginTop="30px"
                  position="relative"
                  width="200px"
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
                    <Typography
                      style={{
                        fontWeight: 'bold',
                        marginLeft: '5px',
                        marginTop: '10px',
                        maxWidth: '150px',
                        overflow: 'hidden',
                        textAlign: 'left',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {project.document2}
                    </Typography>
                  </Link>
                </Box>
              ) : (
                <></>
              )}
              {project.document3 ? (
                <Box
                  sx={{
                    backgroundColor: '#f3f3f3',
                    border: 1,
                    borderColor: 'grey',
                  }}
                  display={'flex'}
                  height="50px"
                  marginTop="30px"
                  position="relative"
                  width="200px"
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
                    <Typography
                      style={{
                        fontWeight: 'bold',
                        marginLeft: '5px',
                        marginTop: '10px',
                        maxWidth: '150px',
                        overflow: 'hidden',
                        textAlign: 'left',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {project.document3}
                    </Typography>
                  </Link>
                </Box>
              ) : (
                <></>
              )}
            </Grid>
          </Grid>
        </Container>
      ) : (
        <NotFound />
      )}

      <Footer />
    </>
  );
};

export default ViewProject;
