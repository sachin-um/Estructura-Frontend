import { type RouteObject } from 'react-router-dom';

import BlogAdd from '../pages/blog/BlogAdd';
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
];

export default BlogRoutes;
