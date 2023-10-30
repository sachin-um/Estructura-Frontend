import type { FunctionComponent } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Tooltip } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import TopAppBar from '../../components/TopAppBar';
import BlogForm from '../../components/blog/BlogForm';
import { useBlog } from '../../hooks/blog/useBlog';
import { selectUser } from '../../redux/UserAuthenticationReducer';
import Loading from '../loading';
import UnauthorizedAccess from '../unauthorized_access';

// Edit and Delete here
const BlogEdit: FunctionComponent = () => {
  const userInfo = useSelector(selectUser);

  const blogId = parseInt(useParams<{ id: string }>().id ?? '0');

  const {
    deleteBlogById,
    getBlog: { blog, fetchBlog },
  } = useBlog();

  useEffect(() => {
    fetchBlog(blogId);
  }, [blogId, fetchBlog]);

  const navigate = useNavigate();

  return (
    <>
      <TopAppBar />
      {userInfo && blog && userInfo.id === blog.createdBy ? (
        <>
          <Tooltip title="Go Back">
            <IconButton
              onClick={() => {
                navigate('/blogs');
              }}
              color="primary"
              size="small"
            >
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              onClick={async () => {
                const deleted = await deleteBlogById(blogId);
                if (deleted) {
                  navigate('/blogs');
                }
              }}
              color="secondary"
              size="small"
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <BlogForm
            {...(blog
              ? { OriginalBlog: blog, userId: userInfo.id }
              : { userId: userInfo.id })}
          />
        </>
      ) : userInfo && blog && userInfo.id !== blog.createdBy ? (
        <UnauthorizedAccess />
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  );
};

export default BlogEdit;
