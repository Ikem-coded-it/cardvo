import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import AboutUsPage from '../pages/AboutUsPage';
import ContactUsPage from '../pages/ContactUsPage';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';
import ExplorePage from '../pages/ExplorePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/about",
    element: <AboutUsPage />
  },
  {
    path: "/contact",
    element: <ContactUsPage />
  },
  {
    path: "/auth",
    children: [
      {
        path: "signin",
        element: <SigninPage />
      },
      {
        path: "signup",
        element: <SignupPage />
      },
    ]
  },
  {
    path: "/cards",
    element: <ExplorePage />
  },
])

export default router;