import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import type { FunctionComponent } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton, Tooltip } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import TopAppBar from '../../components/TopAppBar';
import BlogForm from '../../components/blog/BlogForm';
import {
  deleteBlog,
  fetchBlogById,
  selectBlog,
} from '../../redux/Blogs/SingleBlogReducer';
import { selectUser } from '../../redux/UserAuthenticationReducer';
import UnauthorizedAccess from '../unauthorized_access';

// Edit and Delete here
const BlogEdit: FunctionComponent = () => {
  const userInfo = useSelector(selectUser);

  const blogId = parseInt(useParams<{ id: string }>().id ?? '0');

  const dispatch: ThunkDispatch<Blog, void, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogById(blogId));
  }, [dispatch, blogId]);

  const blog = useSelector(selectBlog);

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
