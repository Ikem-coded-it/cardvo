import { RouterProvider } from 'react-router-dom';
import router from './routes/index'
import { ThemeProvider } from 'styled-components';
import theme from './theme/index.js';
import { createContext, useState } from "react";

export const Context = createContext(null)

import './App.css'

function App() {
  const [user, setUser] = useState("Ikem")
  const [currentPage, setCurrentPage] = useState(null);

  const values = {
    user,
    setUser,
    currentPage,
    setCurrentPage
  }

  return (
    <>
    <Context.Provider value={values}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Context.Provider>
    </>
  )
}

export default App
