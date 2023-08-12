import type { FunctionComponent } from 'react';

import { useSelector } from 'react-redux';

import TopAppBar from '../../components/TopAppBar';
import BlogForm from '../../components/blog/BlogForm';
import { selectUser } from '../../redux/UserAuthenticationReducer';

const BlogAdd: FunctionComponent = () => {
  const userInfo = useSelector(selectUser);

  return (
    <>
      <TopAppBar />
      {userInfo && userInfo.id ? (
        <BlogForm userId={userInfo.id} />
      ) : (
        <h1>Please Login to Create a Blog</h1>
      )}
    </>
  );
};

export default BlogAdd;
