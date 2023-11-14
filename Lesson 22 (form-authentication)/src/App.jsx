import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Layout from './components/Login'
import LinkPage from './components/LinkPage'
import Unauthorized from './components/Unauthorized'



const App = () => {
  return (

      <Routes>

        <Route path='/' element={<Layout/>}>
          {/* Public routes */}
          <Route Path='login' element={<Login/>}/>
          <Route Path='linkPage' element={<LinkPage/>}/>
          <Route Path='unauthorized' element={<Unauthorized/>}/>


          </Route>
        </Routes>
   
  )
}

export default App
