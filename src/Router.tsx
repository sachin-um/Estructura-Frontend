/* eslint-disable perfectionist/sort-objects */
import { type RouteObject, createBrowserRouter } from 'react-router-dom';

import ForgotPassword from './pages/ForgotPassword';
import HomeOwnerSignUp from './pages/HomeOwnerSignUp';
// Import pages
import Homepage from './pages/HomePage';
import AddNewProject from './pages/ServiceProvider/AddNewProject';
import ViewProject from './pages/ServiceProvider/ViewProject';
import ViewResponse from './pages/ServiceProvider/ViewResponse';
import ServiceProviderProfile from './pages/ServiceProviderProfile';
import ServiceProviderSignUp from './pages/ServiceProviderSignUp';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdminDashboard from './pages/admin/dash';
import Bar from './pages/adminDashboard/bar';
import Calendar from './pages/adminDashboard/calendar';
import Contacts from './pages/adminDashboard/contacts';
//admin dashboard
import Dashboard from './pages/adminDashboard/dashboard';
import Form from './pages/adminDashboard/form';
import Geography from './pages/adminDashboard/geography';
import Invoices from './pages/adminDashboard/invoices';
import Line from './pages/adminDashboard/line';
import Pie from './pages/adminDashboard/pie';
import Reviews from './pages/adminDashboard/reviews';
import Team from './pages/adminDashboard/team';
import BlogCreate from './pages/blog/create';
//blog pages
import BlogHome from './pages/blog/home';
import BlogView from './pages/blog/view';
import Cart from './pages/e-com/Cart';
import Home from './pages/e-com/Home';
import Product from './pages/e-com/Product';
import ProductList from './pages/e-com/ProductList';
import FindFurniture from './pages/findfurniture';

const router = createBrowserRouter([
  {
    element: <Homepage />,
    path: '/',
  },
  {
    element: <SignIn />,
    path: '/SignIn',
  },
  {
    element: <SignUp />,
    path: '/SignUp',
  },
  {
    element: <HomeOwnerSignUp />,
    path: '/SignUp/HomeOwner',
  },
  {
    element: <ServiceProviderSignUp />,
    path: '/SignUp/ServiceProvider',
  },
  {
    element: <ForgotPassword />,
    path: '/ForgotPassword',
  },
  {
    element: <Home />,
    path: '/e-com/Home',
  },
  {
    element: <ProductList />,
    path: '/e-com/ProductList',
  },
  {
    element: <Product />,
    path: '/e-com/Product',
  },
  {
    element: <Cart />,
    path: '/e-com/Cart',
  },
  {
    element: <ServiceProviderProfile />,
    path: '/ServiceProviderProfile',
  },
  {
    element: <AddNewProject />,
    path: '/AddNewProject',
  },
  {
    element: <ViewProject />,
    path: '/ViewProject',
  },
  {
    element: <Dashboard />,
    path: '/admin/dashboard',
  },
  {
    element: <Team />,
    path: '/admin/team',
  },
  {
    element: <Contacts />,
    path: '/admin/contacts',
  },
  {
    element: <Invoices />,
    path: '/admin/invoices',
  },
  {
    element: <Form />,
    path: '/admin/form',
  },
  {
    element: <Bar />,
    path: '/admin/bar',
  },
  {
    element: <Pie />,
    path: '/admin/pie',
  },
  {
    element: <Line />,
    path: '/admin/line',
  },
  {
    element: <Reviews />,
    path: '/admin/reviews',
  },
  {
    element: <Calendar />,
    path: '/admin/calendar',
  },
  {
    element: <Geography />,
    path: '/admin/geography',
  },
  {
    element: <AdminDashboard />,
    path: '/admin/dash',
  },
  {
    element: <BlogHome />,
    path: '/blog/',
  },
  {
    element: <BlogView />,
    path: '/blog/view',
  },
  {
    element: <BlogCreate />,
    path: '/blog/create',
  },
  {
    element: <ViewResponse />,
    path: '/ViewResponse',
  },
  {
    element: <FindFurniture />,
    path: '/findFurniture',
  },
]);

const authChildren: RouteObject[] = [
  { element: <SignIn />, path: '/auth/SignIn' },
  {
    children: [
      {
        element: <HomeOwnerSignUp />,
        path: '/auth/SignUp/HomeOwner',
      },
      {
        element: <ServiceProviderSignUp />,
        path: '/auth/SignUp/ServiceProvider',
      },
    ],
    element: <SignUp />,
    path: '/auth/SignUp',
  },
  {
    element: <ForgotPassword />,
    path: '/auth/ForgotPassword',
  },
];

export const altRouter = createBrowserRouter([
  {
    element: <Homepage />,
    path: '/',
    children: [
      {
        children: authChildren,
        path: '/auth',
      },
    ],
  },
]);

export default router;
