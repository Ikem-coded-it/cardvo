import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import AboutUsPage from '../pages/AboutUsPage';
import ContactUsPage from '../pages/ContactUsPage';
import authRoutes from './auth.routes';
import cardRoutes from './exploreCards.routes';
import SocialShare from '../components/SocialShare';

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
  cardRoutes,
  {
    path: "/social",
    element: <SocialShare/>
  }
])

export default router;