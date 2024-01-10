import { useContext } from "react";
import { AppContext } from "../App";
import { axiosPrivate } from "../utils/axios";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AppContext);

  const logout = async() => {
    const response = await axiosPrivate.get("/auth/logout");
    if (response.status === 204) {
      setUser(null);
      return navigate("/")
    }
  }

  return{user, setUser, logout};
}