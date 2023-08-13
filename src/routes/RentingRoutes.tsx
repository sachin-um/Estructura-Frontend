import type { RouteObject } from 'react-router-dom';

import AddRentalItem from '../pages/ServiceProvider/AddRentalItem';
import ViewRentalItem from '../pages/ServiceProvider/ViewRentalItem';
import AllRenters from '../pages/renter/Renters';

const RentingItemRoutes: RouteObject[] = [
  {
    path: '/renting',
    element: <AllRenters />,
  },
  {
    path: '/rentingItems/add',
    element: <AddRentalItem userId={5} />,
  },
  // {
  //   path: '/rentingItems/edit/:id',
  //   element: <RentingItemEdit />,
  // },
  {
    path: '/rentingItems/:id',
    element: <ViewRentalItem />,
  },
];

export default RentingItemRoutes;
