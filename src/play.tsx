import { type AnyAction, type ThunkDispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Blog,
  fetchBlogs,
  getBlogsError,
  getBlogsStatus,
  selectAllBlogs,
} from './redux/BlogsReducer';

export default function Play() {
  const dispatch: ThunkDispatch<Blog[], void, AnyAction> = useDispatch();

  const Blogs = useSelector(selectAllBlogs);
  const BlogsStatus = useSelector(getBlogsStatus);
  const BlogsError = useSelector(getBlogsError);

  useEffect(() => {
    if (BlogsStatus === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [BlogsStatus, dispatch]);

  return (
    <div>
      <h1>Play</h1>
      <pre>{JSON.stringify(Blogs, null, '\t')}</pre>
    </div>
  );
}
