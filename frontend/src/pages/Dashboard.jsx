import React from 'react'
import Card from '../components/Card.jsx'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <Card title="Weld Detection">
        <p className="text-sm text-gray-600 mb-3">Upload weld images for AI classification.</p>
        <Link className="text-sky-700 font-medium" to="/detection">Open →</Link>
      </Card>
      <Card title="Records">
        <p className="text-sm text-gray-600 mb-3">View previous runs & export reports.</p>
        <Link className="text-sky-700 font-medium" to="/records">Open →</Link>
      </Card>
      <Card title="Environment">
        <p className="text-sm text-gray-600">Live parameters (temp/humidity/light) integration hook.</p>
      </Card>
    </div>
  )
}
