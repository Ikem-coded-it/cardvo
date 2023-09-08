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

  const getUser = async() => {
    try {
      const response = await axios.get(
        `${serverURL}/auth/login/success`,
        {withCredentials: true}
      )
      setUser(response.data.user)
    } catch (error) {
      setUser(null)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

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
