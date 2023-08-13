import type { RouteObject } from 'react-router-dom';

import AddProject from '../pages/ServiceProvider/Projects/AddProject';
import EditProject from '../pages/ServiceProvider/Projects/EditProject';
import ViewProject from '../pages/ServiceProvider/ViewProject';

const ProjectRoutes: RouteObject[] = [
  {
    path: '/projects/:id',
    element: <ViewProject />,
  },
  {
    path: '/projects/edit/:id',
    element: <EditProject />,
  },
  {
    path: '/projects/add',
    element: <AddProject />,
  },
];

export default ProjectRoutes;
