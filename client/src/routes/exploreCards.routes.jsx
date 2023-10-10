import ExplorePage from "../pages/ExplorePage";
import SingleCardPage from "../pages/SingleCardPage";
import EditCard from "../pages/EditCardPage";

const cardRoutes = {
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
};

export default cardRoutes;