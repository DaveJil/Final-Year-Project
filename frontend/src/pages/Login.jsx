import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { email as emailV, required } from '../utils/validators.js'

export default function Login() {
  const nav = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState(null)
  const [busy, setBusy] = useState(false)

  const handle = async (e) => {
    e.preventDefault()
    const e1 = required(email) || emailV(email)
    const e2 = required(password)
    if (e1 || e2) return setErr(e1 || e2)
    setBusy(true)
    try {
      await login(email, password)
      nav('/dashboard')
    } catch (e) {
      setErr('Login failed')
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={handle} className="max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Login</h2>
      {err && <div className="p-2 text-sm bg-red-50 text-red-600 rounded">{err}</div>}
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input className="w-full border rounded px-3 py-2" value={email} onChange={e=>setEmail(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm mb-1">Password</label>
        <input type="password" className="w-full border rounded px-3 py-2" value={password} onChange={e=>setPassword(e.target.value)} />
      </div>
      <button disabled={busy} className="w-full px-4 py-2 rounded-md bg-sky-600 text-white">
        {busy ? 'Signing in…' : 'Login'}
      </button>
      <p className="text-sm text-gray-600">
        No account? <Link className="text-sky-700" to="/register">Register</Link>
      </p>
    </form>
  )
}
