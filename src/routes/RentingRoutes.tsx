import type { RouteObject } from 'react-router-dom';

import AddRentalItem from '../pages/ServiceProvider/RentalItems/AddRentalItem';
import EditRentalItem from '../pages/ServiceProvider/RentalItems/EditRentalItem';
import ViewRentalItem from '../pages/ServiceProvider/ViewRentalItem';
import AllRenters from '../pages/renter/Renters';

const RentingItemRoutes: RouteObject[] = [
  {
    path: '/renting',
    element: <AllRenters />,
  },
  {
    path: '/rentingItems/add',
    element: <AddRentalItem />,
  },
  {
    path: '/rentingItems/edit/:id',
    element: <EditRentalItem />,
  },
  {
    path: '/rentingItems/:id',
    element: <ViewRentalItem />,
  },
];

export default RentingItemRoutes;
