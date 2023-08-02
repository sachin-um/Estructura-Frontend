import { type RouteObject } from 'react-router-dom';

import AddNewProject from '../pages/ServiceProvider/AddNewProject';

const ProjectRoutes: RouteObject[] = [
  {
    path: '/AddNewProject',
    element: <AddNewProject />,
  },
];

export default ProjectRoutes;
