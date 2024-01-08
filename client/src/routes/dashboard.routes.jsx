import Dashboard from "../pages/Dashboard";
import ProfilePage from "../pages/Dashboard/ProfilePage";
import LikedCardsPage from "../pages/Dashboard/LikedCardsPage";
import SavedCardsPage from "../pages/Dashboard/SavedCardsPage";
import ErrorPage from "../pages/ErrorPage";

const dashboardRoutes = {
  path: "/dashboard",
  element: <Dashboard/>,
  errorElement: <ErrorPage/>,
  children: [
    {
      path: "/dashboard/profile",
      element: <ProfilePage />,
    },
    {
      path: "/dashboard/liked-cards",
      element: <LikedCardsPage />,
    },
    {
      path: "/dashboard/saved-cards",
      element: <SavedCardsPage />,
    },
  ]
}

export default dashboardRoutes;