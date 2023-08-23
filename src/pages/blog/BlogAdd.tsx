import type { FunctionComponent } from 'react';

import TopAppBar from '../../components/TopAppBar';
import BlogForm from '../../components/blog/BlogForm';
import { useUsers } from '../../redux/UserInfo/useUsers';
import UnauthorizedAccess from '../unauthorized_access';

const BlogAdd: FunctionComponent = () => {
  const { currentUser } = useUsers();

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
