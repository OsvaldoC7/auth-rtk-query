import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import RequireAuth from './components/auth/RequireAuth'
import Layout from './components/Layout'
import Public from './components/Public'
import UsersList from './components/users/UsersList'
import Welcome from './components/Welcome'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>

          {/* Public Routes */}
          <Route index element={<Public />} />
          <Route path='login' element={<Login />} />

          {/* Protected Routes */}
          <Route element={<RequireAuth />}>
            <Route path='welcome' element={<Welcome />} />
            <Route path='userslist' element={<UsersList />} />
          </Route>

        </Route>
      </Routes>
    </>
  )
}

export default App
