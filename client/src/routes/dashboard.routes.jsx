import Dashboard from "../pages/Dashboard";
import ProfilePage from "../pages/Dashboard/ProfilePage";
import ChangePassword from "../components/Dashboard/EditProfilePage/ChangePassword";
import EditProfileForm from "../components/Dashboard/EditProfilePage";
import LikedCardsPage from "../pages/Dashboard/LikedCardsPage";
import SavedCardsPage from "../pages/Dashboard/SavedCardsPage";
import MyCollectionPage from "../pages/Dashboard/MyCollectionPage";
import ErrorPage from "../pages/ErrorPage";

const dashboardRoutes = {
  path: "/dashboard",
  element: <Dashboard/>,
  errorElement: <ErrorPage/>,
  children: [
    {
      path: "/dashboard/profile",
      element: <ProfilePage />,
      children: [
        {
          path: "/dashboard/profile",
          element: <EditProfileForm />
        },
        {
          path: "/dashboard/profile/change-password",
          element: <ChangePassword />
        }
      ]
    },
    {
      path: "/dashboard/liked-cards",
      element: <LikedCardsPage />,
    },
    {
      path: "/dashboard/saved-cards",
      element: <SavedCardsPage />,
    },
    {
      path: "/dashboard/my-collection",
      element: <MyCollectionPage />
    }
  ]
}

export default dashboardRoutes;