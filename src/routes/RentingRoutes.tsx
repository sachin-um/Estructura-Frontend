import { type RouteObject } from 'react-router-dom';

import AllRenters from '../pages/renter/AllRenters';

const RentingItemRoutes: RouteObject[] = [
  {
    path: '/rentingItems',
    element: <AllRenters />,
  },
  //   {
  //     path: '/rentingItems/add',
  //     element: <RentingItemAdd />,
  //   },
  //   {
  //     path: '/rentingItems/edit/:id',
  //     element: <RentingItemEdit />,
  //   },
  //   {
  //     path: '/rentingItems/:id',
  //     element: <RentingItemDetails />,
  //   },
];

export default RentingItemRoutes;
