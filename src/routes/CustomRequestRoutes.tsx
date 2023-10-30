import type { RouteObject } from 'react-router-dom';

import AddCustomerRequest from '../pages/customerRequests/AddCustomerRequest';
import AddResponse from '../pages/customerRequests/AddResponse';
import ViewCustomerRequestCard from '../pages/customerRequests/ViewCustomerRequestCard';
import ViewCustomerRequests from '../pages/customerRequests/ViewCustomerRequests';
import ViewResponseCard from '../pages/customerRequests/ViewResponseCard';
import ViewResponses from '../pages/customerRequests/ViewResponses';

const CustomRequestRoutes: RouteObject[] = [
  {
    path: '/custom-requests/add',
    element: <AddCustomerRequest />,
  },
  {
    path: '/custom-requests',
    element: <ViewCustomerRequests />,
  },
  {
    path: '/custom-requests/my',
    element: <ViewCustomerRequests my={true} />,
  },
  {
    path: '/custom-requests/req/:id',
    element: <ViewCustomerRequestCard />,
  },
  {
    path: '/custom-requests/req/:id/respond',
    element: <AddResponse />,
  },
  {
    path: '/custom-requests/req/:id/responses',
    element: <ViewResponses />,
  },
  {
    path: '/custom-requests/req/:id/responses/:resId',
    element: <ViewResponseCard />,
  },
];

export default CustomRequestRoutes;
