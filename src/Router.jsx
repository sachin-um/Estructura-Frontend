import { createBrowserRouter } from "react-router-dom";

// Import pages
import Homepage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import HomeOwnerSignUp from "./pages/HomeOwnerSignUp";
import ServiceProviderSignUp from "./pages/ServiceProviderSignUp";
import ServiceProviderProfile from "./pages/ServiceProviderProfile";
import Product from "./pages/e-com/Product";
import Home from "./pages/e-com/Home";
import ProductList from "./pages/e-com/ProductList";
import Cart from "./pages/e-com/Cart";

//admin dashboard
import Dashboard from "./pages/adminDashboard/dashboard";
import Team from "./pages/adminDashboard/team";
import Invoices from "./pages/adminDashboard/invoices";
import Contacts from "./pages/adminDashboard/contacts";
import Bar from "./pages/adminDashboard/bar";
import Form from "./pages/adminDashboard/form";
import Line from "./pages/adminDashboard/line";
import Pie from "./pages/adminDashboard/pie";
import Reviews from "./pages/adminDashboard/reviews";
import Geography from "./pages/adminDashboard/geography";
import Calendar from "./pages/adminDashboard/calendar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/SignUp/HomeOwner",
    element: <HomeOwnerSignUp />,
  },
  {
    path: "/SignUp/ServiceProvider",
    element: <ServiceProviderSignUp />,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/e-com/Home",
    element: <Home />,
  },
  {
    path: "/e-com/ProductList",
    element: <ProductList />,
  },
  {
    path: "/e-com/Product",
    element: <Product />,
  },
  {
    path: "/e-com/Cart",
    element: <Cart />,
  },
  {
    path: "/ServiceProviderProfile",
    element: <ServiceProviderProfile />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin/team",
    element: <Team />,
  },
  {
    path: "/admin/contacts",
    element: <Contacts />,
  },
  {
    path: "/admin/invoices",
    element: <Invoices />,
  },
  {
    path: "/admin/form",
    element: <Form />,
  },
  {
    path: "/admin/bar",
    element: <Bar />,
  },
  {
    path: "/admin/pie",
    element: <Pie />,
  },
  {
    path: "/admin/line",
    element: <Line />,
  },
  {
    path: "/admin/reviews",
    element: <Reviews />,
  },
  {
    path: "/admin/calendar",
    element: <Calendar />
  },
  {
    path: "/admin/geography",
    element: <Geography />,
  },
  
  
]);

export default router;
