import { type RouteObject } from 'react-router-dom';

import BlogAdd from '../pages/blog/BlogAdd';
import BlogDetails from '../pages/blog/BlogDetails';
import BlogEdit from '../pages/blog/BlogEdit';
import BlogHome from '../pages/blog/BlogHome';

const BlogRoutes: RouteObject[] = [
  {
    path: '/blogs',
    element: <BlogHome />,
  },
  {
    path: '/blogs/add',
    element: <BlogAdd />,
  },
  {
    path: '/blogs/edit/:id',
    element: <BlogEdit />,
  },
  {
    path: '/blogs/:id',
    element: <BlogDetails />,
  },
];

export default BlogRoutes;
