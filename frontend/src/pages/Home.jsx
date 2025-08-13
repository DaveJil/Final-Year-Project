import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'

export default function Home() {
  return (
    <section className="grid md:grid-cols-2 gap-6 items-center">
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">IoT + AI QA/QC Monitor</h1>
        <p className="text-gray-600 mb-6">
          Monitor environmental conditions and automate weld defect classification with a sleek, web-based dashboard.
        </p>
        <div className="flex gap-3">
          <Link to="/dashboard"><Button>Open Dashboard</Button></Link>
          <Link to="/about" className="px-4 py-2 rounded-md border">Learn more</Link>
        </div>
      </div>
      <Card title="Highlights">
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
          <li>Real-time environmental logs</li>
          <li>Image-based weld defect classification</li>
          <li>Standards-aware reporting</li>
        </ul>
      </Card>
    </section>
  )
}
