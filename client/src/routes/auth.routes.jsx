import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";

const authRoutes = {
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
}

export default authRoutes;