import { type RouteObject } from 'react-router-dom';

import AddRetailItem from '../pages/ServiceProvider/AddRetailItem';
import ShopCart from '../pages/shop/ShopCart';
import ShopHomePage from '../pages/shop/ShopHomePage';
import ShopItem from '../pages/shop/ShopItem';
import ShopItemList from '../pages/shop/ShopItemList';

const ShopRoutes: RouteObject[] = [
  {
    path: '/shop',
    element: <ShopHomePage />,
  },
  {
    path: '/shop/item/add',
    element: <AddRetailItem userId={3} />,
  },
  {
    path: '/shop/item/:id',
    element: <ShopItem />,
  },
  {
    path: '/shop/items/:category',
    element: <ShopItemList />,
  },
  {
    path: '/shop/cart',
    element: <ShopCart />,
  },
];

export default ShopRoutes;
