import type { RouteObject } from 'react-router-dom';

import Billing from '../components/e-com/Billing';
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
    path: '/shop/item/add',
    element: <AddRetailItem />,
  },
  {
    path: '/shop/item/edit/:id',
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
    path: '/billing',
    element: <Billing />,
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
