import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Users from "./pages/Users"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/users" element={<Users />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
    </Router>
  )
}

export default App
