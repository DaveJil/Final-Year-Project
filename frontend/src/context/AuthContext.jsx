import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import * as authService from '../services/authService.js'

const AuthCtx = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('qaqc_user')
    if (saved) setUser(JSON.parse(saved))
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    const data = await authService.login(email, password)
    setUser(data.user)
    localStorage.setItem('qaqc_user', JSON.stringify(data.user))
    return data.user
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('qaqc_user')
  }

  const value = useMemo(() => ({ user, login, logout }), [user])

  if (loading) return <div className="p-6">Loading...</div>

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>
}

export const useAuth = () => useContext(AuthCtx)
