import axios from "axios";
import useAuth from "./useAuth";
import useRefreshToken from "./useRefreshToken";

export default function useFormDataAxios() {
  const { user, setUser } = useAuth();
  const refresh = useRefreshToken();

  async function formDataAxios(url, body, token) {
    try {
      const response = await axios.put(url, body, {
        withCredentials: true,
        headers: {
          'Authorization': token ? `Bearer ${token}`:`Bearer ${user.accessToken}`,
          'Content-Type' : 'multipart/form-data'
        }
      })
      return response
    } catch (error) {
      if (error.response?.data?.error === "getaddrinfo ENOTFOUND api.cloudinary.com")
        return "Check your internet connection"

      if (error.response?.data === "Forbidden") {
        const newAccessToken = await refresh();
        if (!newAccessToken) return
        setUser(prev => {
          prev.accessToken = newAccessToken
          return prev
        })
        return secondCall(url, body, newAccessToken)
      }

      return error
    }
  }

  // called within  formDataFetch when accessToken is expired
  const secondCall = async(url, body, token) => await formDataAxios(url, body, token)

  return formDataAxios
}