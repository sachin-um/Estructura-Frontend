import { type RouteObject } from 'react-router-dom';

import { AdminAuthenticated } from '../components/Auth/Authenticated';
import AdminDashboard from '../pages/admin/dash';

const AdminRoutes: RouteObject[] = [
  {
    path: '/admin',
    children: [{ path: 'dashboard', element: <AdminDashboard /> }],
  },
];

export default AdminRoutes;
