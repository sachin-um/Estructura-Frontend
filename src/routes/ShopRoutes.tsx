import type { RouteObject } from 'react-router-dom';

import AddRetailItem from '../pages/ServiceProvider/RetailItems/AddRetailItem';
import EditRetailItem from '../pages/ServiceProvider/RetailItems/EditRetailItem';
import FindFurniture from '../pages/findfurniture';
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
    path: '/shop/u/add',
    element: <AddRetailItem />,
  },
  {
    path: '/shop/u/edit/:id',
    element: <EditRetailItem />,
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
  {
    path: '/findfurniture',
    element: <FindFurniture />,
  },
];

export default ShopRoutes;
