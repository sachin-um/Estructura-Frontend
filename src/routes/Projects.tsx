import type { RouteObject } from 'react-router-dom';

import AddNewProject from '../pages/ServiceProvider/AddNewProject';
import ViewProject from '../pages/ServiceProvider/ViewProject';

const ProjectRoutes: RouteObject[] = [
  {
    path: '/addNewProject',
    element: <AddNewProject userId={1} />,
  },
  {
    path: '/projects/:id',
    element: <ViewProject />,
  },
];

export default ProjectRoutes;
