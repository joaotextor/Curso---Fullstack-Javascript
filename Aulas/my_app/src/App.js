import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'
import TemplateClean from './templates/Clean'

import Home from './pages/Home'
import Login from './pages/Login'
import CustomersList from './pages/Customers/List'
import CustomersRegister from './pages/Customers/Register'
import CustomersEdit from './pages/Customers/Edit'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<TemplateClean title={"Restricted Access"} Component={Login}/>}/>
        
          <Route path="/" element={
          <TemplateDefault>
            <TemplatePage title={"Home"} Component={Home}/>
          </TemplateDefault>
          }/>

          <Route path="/customers" element={
          <TemplateDefault>
            <TemplatePage title={"Customers"} Component={CustomersList}/>
          </TemplateDefault>
          }/>

          <Route path="/customers/add" element={
          <TemplateDefault>
            <TemplatePage title={"Add customer"} Component={CustomersRegister}/>
          </TemplateDefault>
          }/>

          <Route path="/customers/edit/:id" element={
          <TemplateDefault>
            <TemplatePage title={"Edit customer"} Component={CustomersEdit}/>
          </TemplateDefault>
          }/>

      </Routes>
  </Router>
  )
}