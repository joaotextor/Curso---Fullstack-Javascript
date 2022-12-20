import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'
import Home from './pages/Home'
import CustomersList from './pages/Customers/List'
import CustomersRegister from './pages/Customers/Register'



export default function App() {
  return (
    <Router>
        <TemplateDefault>
        <Routes>
          <Route path="/" element={<TemplatePage title={"Home"} Component={Home}/>}/>
          <Route path="/customers" element={<TemplatePage title={"Customers"} Component={CustomersList}/>}/>
          <Route path="/customers/add" element={<TemplatePage title={"Add Customer"} Component={CustomersRegister}/>}/>
        </Routes>
    </TemplateDefault>
      </Router>
  )
}