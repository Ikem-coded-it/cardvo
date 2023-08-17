import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import AboutUsPage from '../pages/AboutUsPage';
import ContactUsPage from '../pages/ContactUsPage';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';
import ExplorePage from '../pages/ExplorePage';
import EditCard from '../pages/EditCardPage';
import SingleCardPage from '../pages/SingleCardPage';

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
    path: "/explore",
    children: [
      {
        index: true,
        element: <ExplorePage />,
      },
      {
        path: "card/:id",
        element: <SingleCardPage />
      },
      {
        path: "card/:id/edit",
        element: <EditCard />
      }
    ]
  },
])

export default router;