import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'
import Home from './pages/Home'
import Customers from './pages/Customers'



export default function App() {
  return (
    <Router>
        <TemplateDefault>
        <Routes>
          <Route path="/" element={<TemplatePage title={"Home"} Component={Home}/>}/>
          <Route path="/customers" element={<TemplatePage title={"Customers"} Component={Customers}/>}/>
        </Routes>
    </TemplateDefault>
      </Router>
  )
}