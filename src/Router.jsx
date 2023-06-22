import { createBrowserRouter } from 'react-router-dom';

// Import pages
import Homepage from './pages/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import HomeOwnerSignUp from './pages/HomeOwnerSignUp';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />
	},
	{
		path: "/SignIn",
		element: <SignIn />
	},
	{
		path: "/SignUp",
		element: <SignUp />
	},
	{
		path: "/SignUp/HomeOwner",
		element: <HomeOwnerSignUp />
	},
	{
		path: "/ForgotPassword",
		element: <ForgotPassword />
	},
])

export default router;