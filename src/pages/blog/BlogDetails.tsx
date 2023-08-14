import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import type { FunctionComponent } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { Avatar } from '@mui/material';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import TopAppBar from '../../components/TopAppBar';
import {
  deleteBlog,
  fetchBlogById,
  getBlogError,
  getBlogStatus,
  selectBlog,
} from '../../redux/Blogs/SingleBlogReducer';
import {
  fetchUserById,
  getUser,
  getUserStatus,
} from '../../redux/UserInfo/SingleUserInfoReducer';

const BlogDetails: FunctionComponent = () => {
  const blogId = parseInt(useParams<{ id: string }>().id ?? '0');

  const dispatch: ThunkDispatch<Blog, void, AnyAction> = useDispatch();
  const dispatchUser: ThunkDispatch<User, void, AnyAction> = useDispatch();

  const blog = useSelector(selectBlog);
  const [userId, setUserId] = useState(0);
  const blogStatus = useSelector(getBlogStatus);
  const blogError = useSelector(getBlogError);

  const navigate = useNavigate();

  useEffect(() => {
    if (blogStatus === 'idle') {
      dispatch(fetchBlogById(blogId));
    }
    if (blog) {
      setUserId(blog.createdBy);
    }
  }, [dispatch, blogId, blogStatus, blog]);

  const [isMobile, setIsMobile] = useState(false);
  const userinfo = useSelector(getUser);
  const userStatus = useSelector(getUserStatus);

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatchUser(fetchUserById(userId));
    } else {
      console.log(userinfo);
    }
  }, [userStatus, dispatchUser, userinfo, userId]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const paragraphs =
    typeof blog?.content === 'string'
      ? blog.content.split('. ').reduce((acc, sentence) => {
          if (!acc.length || acc[acc.length - 1].split('. ').length >= 7) {
            acc.push(sentence);
          } else {
            acc[acc.length - 1] += sentence + '. ';
          }
          return acc;
        }, [])
      : [];

  return (
    <>
      <TopAppBar />

      {blogError ? (
        <h1>ERROR: {blogError}</h1>
      ) : blogStatus === 'loading' ? (
        <h1>Loading...</h1>
      ) : blog ? (
        <div
          style={{
            backgroundColor: '#f9f9f9',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'flex-start',
            padding: '10px',
          }}
        >
          <br />
          {/* blogcard */}
          <Card
            sx={{
              backgroundColor: 'white',
              borderRadius: 5,
              marginBottom: 2,
              maxWidth: 950,
              padding: 2,
            }}
          >
            <CardContent>
              <Typography
                marginBottom={1}
                marginTop={2}
                textAlign="center"
                variant="h4"
              >
                {blog.title}
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                justifyContent="center"
                spacing={1}
              >
                <Typography color="textSecondary" variant="body2">
                  {blog.creatorName}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  {' | '}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  Date: {new Date(blog.dateAdded).toLocaleDateString('en-US')}
                </Typography>
              </Stack>
            </CardContent>
            <div
              style={{ height: '25rem', marginBottom: '10px', width: '100%' }}
            >
              <img
                style={{
                  borderRadius: '12px',
                  height: '100%',
                  objectFit: 'cover',
                  width: '100%',
                }}
                alt="Cover"
                src={`http://localhost:8080/files/blog-files/${blog.createdBy}/${blog.id}/${blog.mainImageName}`}
              />
            </div>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Tooltip title="Go Back">
                <IconButton color="primary" size="small">
                  <ArrowBackIcon
                    onClick={() => {
                      navigate('/blogs');
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Edit">
                <IconButton color="primary" size="small">
                  <EditIcon
                    onClick={() => navigate(`/blogs/edit/${blog.id}`)}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton color="secondary" size="small">
                  <DeleteIcon
                    onClick={() => {
                      dispatch(deleteBlog(blogId)).then((resultAction) => {
                        if (deleteBlog.fulfilled.match(resultAction)) {
                          // ! Handle alerting the user that the Blog was deleted
                          console.log('Deleted Blog');
                          navigate('/blogs');
                        }
                      });
                    }}
                  />
                </IconButton>
              </Tooltip>
            </CardActions>
            {/* <Card sx={{ borderColor: 'green', borderWidth: 2, boxShadow: 'none', borderStyle: 'solid', marginTop: 2, borderRadius: 3 }}> */}
            <Card
              sx={{
                border: 'none',
                borderRadius: 3,
                boxShadow: 'none',
                marginTop: 2,
              }}
            >
              <CardContent>
                {paragraphs?.map((paragraph, index) => (
                  <Typography
                    align="justify"
                    gutterBottom
                    key={index} // Use the index as the key
                    sx={{ marginBottom: 2 }}
                    variant="body1"
                  >
                    {paragraph}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Card>
          {/* profilecard */}
          {!isMobile && (
            <Card
              sx={{
                '&:hover': { transform: 'scale(1.008)' },
                backgroundColor: 'white',
                borderRadius: 5,
                marginLeft: 1,
                maxHeight: 430,
                maxWidth: '340px',
                padding: 1.5,
                position: 'relative',
                transition: 'transform 0.2s ease',
                width: '100%',
              }}
            >
              <div
                style={{ height: '150px', marginBottom: '10px', width: '100%' }}
              >
                <img
                  style={{
                    borderRadius: '12px',
                    height: '120%',
                    objectFit: 'cover',
                    width: '100%',
                  }}
                  alt="Background"
                  src={'/Professionals/InteriorDesigner.jpg'}
                />
              </div>
              <CardContent>
                <Stack alignItems="center" direction="column" spacing={2}>
                  <Avatar
                    alt="User Avatar"
                    src={'/User/user.png'}
                    sx={{ height: 100, marginTop: '-50px', width: 100 }}
                  />
                  <Typography variant="h6">{blog.creatorName}</Typography>
                  <Typography color="textSecondary" variant="body2">
                    {userinfo?.role}
                  </Typography>
                  <Stack alignItems="center" direction="row" spacing={1}>
                    <LocationOnIcon sx={{ fontSize: 16 }} />
                    <Typography color="textSecondary" variant="body2">
                      {userinfo?.district}, Sri Lanka
                    </Typography>
                  </Stack>
                  <Stack alignItems="center" direction="row" spacing={1}>
                    <EmailIcon sx={{ fontSize: 16 }} />
                    <Typography color="textSecondary" variant="body2">
                      {userinfo?.email}
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          )}
        </div>
      ) : (
        <h1>Blog Not Found</h1>
      )}
    </>
  );
};

export default BlogDetails;
