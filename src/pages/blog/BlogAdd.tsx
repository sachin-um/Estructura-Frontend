import type { FunctionComponent } from 'react';

import TopAppBar from '../../components/TopAppBar';
import BlogForm from '../../components/blog/BlogForm';
import useCurrentUser from '../../hooks/users/useCurrentUser';
import UnauthorizedAccess from '../unauthorized_access';

const BlogAdd: FunctionComponent = () => {
  const currentUser = useCurrentUser();

  return (
    <>
      <TopAppBar />
      {currentUser && currentUser.id ? (
        <BlogForm userId={currentUser.id} />
      ) : (
        <UnauthorizedAccess />
      )}
    </>
  );
};

export default BlogAdd;
