import React from 'react'

export default function DetailsPane({ item }) {
  if (!item) return null
  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-xl shadow-lg p-4 w-72 border border-slate-200">
      <h3 className="font-semibold text-lg">{item.label || item.id}</h3>
      <p className="text-sm text-slate-600">Chain ID: {item.chainId}</p>
      <p className="text-sm text-slate-600 mt-2">
        (Click on edges/nodes for more data soon!)
      </p>
    </div>
  )
}
