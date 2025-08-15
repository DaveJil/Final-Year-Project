import React from 'react'
import AppRouter from './router.jsx'
import MainLayout from './layouts/MainLayout.jsx'

export default function App() {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  )
}
