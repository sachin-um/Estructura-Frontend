import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import type { FunctionComponent } from 'react';

import { Button } from '@mui/material';
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
          <Button onClick={() => navigate(`/blogs`)}>Back To Blogs</Button>
          <Button onClick={() => navigate(`/blogs/${blogId}`)}>
            Back To Details
          </Button>
          <Button
            onClick={() => {
              dispatch(deleteBlog(blogId)).then((resultAction) => {
                if (deleteBlog.fulfilled.match(resultAction)) {
                  // ! Handle alerting the user that the Blog was deleted
                  console.log('Deleted Blog');
                  navigate('/blogs');
                }
              });
            }}
          >
            {' '}
            DELETE{' '}
          </Button>
          <BlogForm
            {...(blog
              ? { OriginalBlog: blog, userId: userInfo.id }
              : { userId: userInfo.id })}
          />
        </>
      ) : (
        <h1>Please Login as the creator to Edit</h1>
      )}
    </>
  );
};

export default BlogEdit;
