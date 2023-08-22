import type { FunctionComponent } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Tooltip } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import TopAppBar from '../../components/TopAppBar';
import BlogForm from '../../components/blog/BlogForm';
import { useBlogs } from '../../redux/Blogs/useBlogs';
import { selectUser } from '../../redux/UserAuthenticationReducer';
import UnauthorizedAccess from '../unauthorized_access';

// Edit and Delete here
const BlogEdit: FunctionComponent = () => {
  const userInfo = useSelector(selectUser);

  const blogId = parseInt(useParams<{ id: string }>().id ?? '0');

  const { deleteBlogById, selectBlogById } = useBlogs();

  const blog = selectBlogById(blogId);

  const navigate = useNavigate();

  return (
    <>
      <TopAppBar />
      {userInfo && userInfo.id === blog?.createdBy ? (
        <>
          <Tooltip title="Go Back">
            <IconButton color="primary" size="small">
              <ArrowBackIcon
                onClick={() => {
                  navigate('/blogs');
                }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton color="secondary" size="small">
              <DeleteIcon
                onClick={async () => {
                  // TODO: Add a confirmation menu
                  const deleted = await deleteBlogById(blogId);
                  if (deleted) {
                    navigate('/blogs');
                  }
                }}
              />
            </IconButton>
          </Tooltip>
          <BlogForm
            {...(blog
              ? { OriginalBlog: blog, userId: userInfo.id }
              : { userId: userInfo.id })}
          />
        </>
      ) : (
        <UnauthorizedAccess />
      )}
    </>
  );
};

export default BlogEdit;
