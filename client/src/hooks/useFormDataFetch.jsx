import useAuth from "./useAuth";
import useRefreshToken from "./useRefreshToken";

export default function useFormDataFetch() {
  const { user, setUser } = useAuth();
  const refresh = useRefreshToken();

  async function formDataFetch(url, method, body, token) {
    try {
      const response = await fetch(url, {
        method: method,
        credentials: 'include',
        headers: {
          'Authorization': token ? `Bearer ${token}`:`Bearer ${user.accessToken}`,
          'Content-Type' : 'multipart/form-data'
        },
        body
      })
      console.log(response)
      if (response.status === 403) {
        const newAccessToken = await refresh();
        setUser(prev => {
          prev.accessToken = newAccessToken
          return prev
        })
        return secondCall(url, method, body, newAccessToken)
      } else {
        return await response.json()
      }
    } catch (error) {
      console.log(error)
      return error
    }
  }

  // called within  formDataFetch when accessToken is expired
  const secondCall = async(url, method, body, token) => await formDataFetch(url, method, body, token)

  return formDataFetch
}