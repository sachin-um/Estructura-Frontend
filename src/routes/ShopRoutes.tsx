import { type RouteObject } from 'react-router-dom';

import AddRetailItem from '../pages/ServiceProvider/AddRetailItem';
import ShopCart from '../pages/shop/ShopCart';
import ShopCategoryItemList from '../pages/shop/ShopCategoryItemList';
import ShopHome from '../pages/shop/ShopHome';
import ShopItem from '../pages/shop/ShopItem';

const ShopRoutes: RouteObject[] = [
  {
    path: '/shop',
    element: <ShopHome />,
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
    element: <ShopCategoryItemList />,
  },
  {
    path: '/shop/cart',
    element: <ShopCart />,
  },
];

export default ShopRoutes;
