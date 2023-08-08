import { Button } from '@mui/material';
import { type AnyAction, type ThunkDispatch } from '@reduxjs/toolkit';
import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import TopAppBar from '../../components/TopAppBar';
import {
  fetchBlogById,
  getBlogError,
  getBlogStatus,
  selectBlog,
} from '../../redux/Blogs/SingleBlogReducer';

const BlogDetails: FunctionComponent = () => {
  const blogId = parseInt(useParams<{ id: string }>().id ?? '0');

  const dispatch: ThunkDispatch<Blog, void, AnyAction> = useDispatch();

  const blog = useSelector(selectBlog);
  const blogStatus = useSelector(getBlogStatus);
  const blogError = useSelector(getBlogError);

  const navigate = useNavigate();

  useEffect(() => {
    if (blogStatus === 'idle') {
      dispatch(fetchBlogById(blogId));
    }
  }, [dispatch, blogId, blogStatus]);

  return (
    <>
      <TopAppBar />
      <Button
        onClick={() => {
          navigate('/blogs');
        }}
      >
        Back to Blogs
      </Button>
      {blogError ? (
        <h1>ERROR: {blogError}</h1>
      ) : blogStatus === 'loading' ? (
        <h1>Loading...</h1>
      ) : blog ? (
        // Blog Found
        // ! TODO: Create a BlogView
        <div>
          <pre>{JSON.stringify(blog, null, ' ')}</pre>
          <img
            alt="cover"
            src={`http://localhost:8080/files/blog-files/${blog.createdBy}/${blog.id}/${blog.mainImageName}`}
            width={100}
          />
          <Button onClick={() => navigate(`/blogs/edit/${blog.id}`)}>
            Edit
          </Button>
        </div>
      ) : (
        <h1>Blog Not Found</h1>
      )}
    </>
  );
};

export default BlogDetails;
