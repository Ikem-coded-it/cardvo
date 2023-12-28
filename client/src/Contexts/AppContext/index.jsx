import { AppContext } from "../../App";
import { useState, useEffect } from "react"
import PropTypes from "prop-types";
import axios from "../../utils/axios";

export default function AppContextProvider({ children }) {
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const [user, setUser] = useState(null)
  const [currentPage, setCurrentPage] = useState(null);
  const [previousPage, setPreviousPage] = useState("/");
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    async function getUserData() {
      const response = await axios.get("/auth/refresh-token", {withCredentials: true});
      if (response.status === 200) setUser(response.data.user);
    }

    getUserData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const values = {
    user,
    setUser,
    currentPage,
    setCurrentPage,
    serverURL,
    previousPage,
    setPreviousPage,
    nextPage,
    setNextPage
  }

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}

AppContextProvider.propTypes = {
  children: PropTypes.element
}