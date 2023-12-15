import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import AboutUsPage from '../pages/AboutUsPage';
import ContactUsPage from '../pages/ContactUsPage';
import authRoutes from './auth.routes';
import cardRoutes from './exploreCards.routes';

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
  authRoutes,
  cardRoutes
])

export default router;