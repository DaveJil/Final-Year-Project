import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t py-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} QAQC Monitor — All rights reserved.
    </footer>
  )
}
