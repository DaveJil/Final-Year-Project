import React, { useState } from 'react'
import Button from '../../components/Button.jsx'
import { classifyWeld } from '../../services/detectionService.js'

export default function DetectionForm({ onResult }) {
  const [file, setFile] = useState(null)
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState(null)
  const [preview, setPreview] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    if (!file) return setErr('Please choose an image.')
    setBusy(true); setErr(null)
    try {
      const fd = new FormData()
      fd.append('image', file)
      const res = await classifyWeld(fd)
      onResult?.(res)
    } catch (e) {
      setErr('Failed to classify image')
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      {err && <div className="p-2 text-sm bg-red-50 text-red-600 rounded">{err}</div>}
      <div>
        <label className="block text-sm mb-1">Weld Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={e => {
            const f = e.target.files?.[0]
            setFile(f || null)
            setPreview(f ? URL.createObjectURL(f) : null)
          }}
        />
      </div>
      {preview && (
        <img src={preview} alt="preview" className="max-h-56 rounded border" />
      )}
      <Button disabled={busy} type="submit">{busy ? 'Running…' : 'Classify'}</Button>
    </form>
  )
}
