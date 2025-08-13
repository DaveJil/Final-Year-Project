import React from 'react'

export default function Card({ title, children, footer }) {
  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm">
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div>{children}</div>
      {footer && <div className="pt-3 mt-3 border-t">{footer}</div>}
    </div>
  )
}
