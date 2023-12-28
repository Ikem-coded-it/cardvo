import { axiosPrivate } from "../utils/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

// This hook adds interceptors to axios to re-run a request if it fails due to token expiry or unavailablity. It is used to make requests to protected routes
export default function useAxiosPrivate() {
  const refresh = useRefreshToken()
  const { user } = useAuth();

  useEffect(() => {
    // attach accessToken to header and send request
    const requestIntercept = axiosPrivate.interceptors.request.use(
      config => {
        if (!config.headers['authorization']) {
          config.headers['authorization'] = `Bearer ${user?.accessToken}`;
        }
        return config;
      }, (error) => Promise.reject(error)
    )

    // listen for response, if error then it was forbidden meaning token is expired or invalid so refresh
    const responseIntercept = axiosPrivate.interceptors.response.use(
      response => response, // no error so return response
      async (error) => { // error so refresh token and retry request
        const prevRequest = error?.config;
        if(error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers['authorization'] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error)
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    }
  }, [user, refresh])

  return axiosPrivate
}