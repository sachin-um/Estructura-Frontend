import { type RouteObject } from 'react-router-dom';

import Test from './Test';

const TestRoutes: RouteObject[] = [
  {
    path: '/test',
    element: <Test />,
  },
];

export default TestRoutes;
