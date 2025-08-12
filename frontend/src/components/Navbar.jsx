import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-sky-100 text-sky-700' : 'text-gray-700 hover:bg-gray-100'}`
    }
  >
    {children}
  </NavLink>
)

export default function Navbar() {
  const { user, logout } = useAuth()
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-7 w-7" />
          <span className="font-semibold">QAQC Monitor</span>
        </Link>
        <nav className="flex items-center gap-2">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          {user && (
            <>
              <NavItem to="/dashboard">Dashboard</NavItem>
              <NavItem to="/detection">Detection</NavItem>
              <NavItem to="/records">Records</NavItem>
            </>
          )}
        </nav>
        <div>
          {user ? (
            <button onClick={logout} className="px-3 py-2 text-sm rounded-md bg-gray-900 text-white">
              Logout
            </button>
          ) : (
            <Link to="/login" className="px-3 py-2 text-sm rounded-md bg-sky-600 text-white">Login</Link>
          )}
        </div>
      </div>
    </header>
  )
}
