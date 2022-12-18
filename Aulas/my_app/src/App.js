import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import Home from './pages/Home'
import Customers from './pages/Customers'



export default function App() {
  return (
    <TemplateDefault>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/customers" element={<Customers />}/>
        </Routes>
      </Router>
    </TemplateDefault>
  )
}