import React, { useState } from 'react'
import DetectionForm from './DetectionForm.jsx'
import Card from '../../components/Card.jsx'

export default function DetectionPage() {
  const [result, setResult] = useState(null)

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card title="Run Detection">
        <DetectionForm onResult={setResult} />
      </Card>
      <Card title="Result">
        {result ? (
          <div className="space-y-1">
            <div><span className="font-medium">Label:</span> {result.label}</div>
            <div><span className="font-medium">Confidence:</span> {(result.confidence*100).toFixed(1)}%</div>
            <div className="text-xs text-gray-500">Model: {result.meta.model} • {result.meta.inference_ms} ms</div>
          </div>
        ) : (
          <p className="text-gray-600">No result yet. Upload an image to begin.</p>
        )}
      </Card>
    </div>
  )
}
