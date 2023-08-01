import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import TopAppBar from '../../components/TopAppBar';
import { selectAllBlogs } from '../../redux/BlogsReducer';

interface BlogHomeProps {
  children?: React.ReactNode;
}

const BlogHome: FunctionComponent<BlogHomeProps> = () => {
  const blogs = useSelector(selectAllBlogs);

  return (
    <>
      <TopAppBar />
      <h1>Blogs</h1>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))
      ) : (
        <p>No blogs found</p>
      )}
    </>
  );
};

export default BlogHome;
