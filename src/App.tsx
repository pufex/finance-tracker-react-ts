import { Routes, Route } from "react-router-dom"

import Nav from "./components/Nav/Nav"

import Home from "./pages/Home/Home"
import Dashboard from "./pages/Dashboard/Dashboard"
import RegisterPage from "./pages/RegisterPage/RegisterPage"

import ThemeProvider from "./contexts/Theme"
import IconsProvider from "./contexts/Icons"

import "./assets/App.css"


function App() {

  return <ThemeProvider>
    <IconsProvider>
      <Routes>
        <Route
          path="/"
          element={<Nav />}
        >
          <Route 
            index 
            element={<Home />}
          />
          <Route 
            path="/dashboard" 
            element={<Dashboard />}
          />
        </Route>
        <Route
          path="/register"
          element={<RegisterPage />}
        />
      </Routes>
    </IconsProvider>
  </ThemeProvider>
}

export default App
