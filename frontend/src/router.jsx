import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import NotFound from './pages/NotFound.jsx'
import DetectionPage from './features/detection/DetectionPage.jsx'
import RecordsPage from './features/records/RecordsPage.jsx'
import { useAuth } from './context/AuthContext.jsx'

function PrivateRoute({ children }) {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" replace />
}

export default function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />

      <Route path="/detection" element={
        <PrivateRoute>
          <DetectionPage />
        </PrivateRoute>
      } />

      <Route path="/records" element={
        <PrivateRoute>
          <RecordsPage />
        </PrivateRoute>
      } />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
