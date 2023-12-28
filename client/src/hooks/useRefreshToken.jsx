import useAuth from "./useAuth";
import axios from "../utils/axios";

const useRefreshToken = () => {
  const { setUser } = useAuth();

  const refresh = async() => {
    const response = await axios.get("/auth/refresh-token", {
      withCredentials: true
    })
    setUser(response.data.user)

    return response.data.user.accessToken
  }

  return refresh
}

export default useRefreshToken