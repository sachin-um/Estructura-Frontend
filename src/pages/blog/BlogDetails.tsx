import type { FunctionComponent } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import NotFound from '../../components/NoResults';
import TopAppBar from '../../components/TopAppBar';
import { useBlog } from '../../hooks/blog/useBlog';
import useCurrentUser from '../../hooks/users/useCurrentUser';
import useFetchUser from '../../hooks/users/useFetchUser';
import Loading from '../../pages/loading';

const BlogDetails: FunctionComponent = () => {
  const blogId = parseInt(useParams<{ id: string }>().id ?? '0');

  const {
    deleteBlogById,
    getBlog: { blog, fetchBlog, isLoading },
  } = useBlog();

  useEffect(() => {
    fetchBlog(blogId);
  }, [blogId, fetchBlog]);

  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);

  const currentUser = useCurrentUser();

  const { fetchUserById, user } = useFetchUser();

  useEffect(() => {
    if (blog) {
      fetchUserById(blog.createdBy);
    }
  }, [blog, fetchUserById]);

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
      ? blog.content.split('. ').reduce<string[]>((acc, sentence) => {
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

      {isLoading ? (
        <Loading />
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
              {currentUser?.id === blog.createdBy && (
                <>
                  <Tooltip title="Edit">
                    <IconButton
                      color="primary"
                      onClick={() => navigate(`/blogs/edit/${blog.id}`)}
                      size="small"
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton
                      onClick={() => {
                        deleteBlogById(blog.id).then((deleted) => {
                          if (deleted) {
                            navigate('/blogs');
                          } else {
                            alert('Failed to delete blog');
                          }
                        });
                      }}
                      color="secondary"
                      size="small"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </>
              )}
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
                    {user?.role}
                  </Typography>
                  <Stack alignItems="center" direction="row" spacing={1}>
                    <LocationOnIcon sx={{ fontSize: 16 }} />
                    <Typography color="textSecondary" variant="body2">
                      {user?.district}, Sri Lanka
                    </Typography>
                  </Stack>
                  <Stack alignItems="center" direction="row" spacing={1}>
                    <EmailIcon sx={{ fontSize: 16 }} />
                    <Typography color="textSecondary" variant="body2">
                      {user?.email}
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          )}
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default BlogDetails;
