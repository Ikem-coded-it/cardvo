import { RouterProvider } from 'react-router-dom';
import router from './routes/index'
import { ThemeProvider } from 'styled-components';
import theme from './theme/index.js';
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext(null)

import './App.css'

function App() {
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const [user, setUser] = useState(null)
  const [currentPage, setCurrentPage] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const startServer = async() => {
      await axios.get(`${serverURL}/start`);
    }

    startServer()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    async function getUserData() {
      // check if user info is stored in local storage
      const user = JSON.parse(localStorage.getItem('cardvo-user'));

      if (user) return setUser(user);

      fetch(`${serverURL}/auth/login/success`, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        },
      })
      .then(response => {
        if(response.status === 200) return response.json();
        return
      })
      .then(resObject => {
        setUser(resObject.user);
      })
      .catch(err => console.log(err))
    }

    getUserData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverURL])

  const values = {
    user,
    setUser,
    currentPage,
    setCurrentPage,
    serverURL,
  }

  return (
    <>
    <AppContext.Provider value={values}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} /> 
      </ThemeProvider>
    </AppContext.Provider>
    </>
  )
}

export default App
