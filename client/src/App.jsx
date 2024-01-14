import { RouterProvider } from 'react-router-dom';
import router from './routes/index'
import { ThemeProvider } from 'styled-components';
import theme from './theme/index.js';
import { createContext } from "react";
// import AuthContextProvider from "./Contexts/AuthContext";
import AppContextProvider from './Contexts/AppContext/index.jsx';
// import axios from "axios";

export const AppContext = createContext(null)

import './App.css'

function App() {

  return (
    <>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} /> 
        </ThemeProvider>
      </AppContextProvider>
    </>
  )
}

export default App
