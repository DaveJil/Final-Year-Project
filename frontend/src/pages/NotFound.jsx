import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h2 className="text-3xl font-bold mb-2">404</h2>
      <p className="mb-6 text-gray-600">Page not found.</p>
      <Link to="/" className="text-sky-700">Go Home</Link>
    </div>
  )
}
