import useAuth from "./useAuth";
import axios from "../utils/axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

const useRefreshToken = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { setNextPage } = useContext(AppContext);

  const refresh = async() => {
    try {
      const response = await axios.get("/auth/refresh-token", {
        withCredentials: true
      })

      setUser(response.data.user)

      return response.data.user.accessToken
    } catch (error) {
      if(error.response.data.message === "invalid refresh token" || 
      error.response.data.message === "refresh token unavailable") {
        setNextPage(pathname);
        return navigate("/auth/signin")
      }
    }
  }

  return refresh
}

export default useRefreshToken