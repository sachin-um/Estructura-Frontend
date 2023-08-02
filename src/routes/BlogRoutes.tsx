import { type RouteObject } from 'react-router-dom';

import BlogHome from '../pages/blog/BlogHome';

const BlogRoutes: RouteObject[] = [
  {
    path: '/blogs',
    element: <BlogHome />,
  },
];

export default BlogRoutes;
