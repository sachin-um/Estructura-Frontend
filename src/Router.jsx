import { createBrowserRouter } from "react-router-dom";

// Import pages
import Homepage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import HomeOwnerSignUp from "./pages/HomeOwnerSignUp";
import ServiceProviderSignUp from "./pages/ServiceProviderSignUp";

import Product from "./pages/e-com/Product";
import Home from "./pages/e-com/Home";
import ProductList from "./pages/e-com/ProductList";
import Cart from "./pages/e-com/Cart";


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
  
]);

export default router;
