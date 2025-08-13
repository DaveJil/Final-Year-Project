import React from 'react'
import Card from '../../components/Card.jsx'

export default function RecordCard({ id, label, confidence, createdAt }) {
  return (
    <Card title={id} footer={<div className="text-right text-sm text-gray-500">{createdAt}</div>}>
      <div className="space-y-1">
        <div><span className="font-medium">Label:</span> {label}</div>
        <div><span className="font-medium">Confidence:</span> {(confidence*100).toFixed(1)}%</div>
      </div>
    </Card>
  )
}
