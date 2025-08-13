import React from 'react'
import useFetch from '../../hooks/useFetch.js'
import { listRecords } from '../../services/recordsService.js'
import Card from '../../components/Card.jsx'
import { formatDate } from '../../utils/formatDate.js'
import RecordCard from './RecordCard.jsx'

export default function RecordsPage() {
  const { data, loading, error } = useFetch(listRecords, [])

  if (loading) return <div>Loading…</div>
  if (error) return <div className="text-red-600">Failed to load records</div>

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.map((r) => (
        <RecordCard key={r.id} id={r.id} label={r.label} confidence={r.confidence} createdAt={formatDate(r.createdAt)} />
      ))}
      {!data?.length && <Card>No records yet.</Card>}
    </div>
  )
}
