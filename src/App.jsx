import React from 'react'
import GraphCanvas from './components/GraphCanvas'
import ControlsPanel from './components/ControlsPanel'
import DetailsPane from './components/DetailsPane'
import useBridgeData from './hooks/useBridgeData'

export default function App() {
  const { data, loading, error, selected, setSelected } = useBridgeData()

  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-semibold">🌉 Cross-Chain Bridge Visualizer</h1>
        <p className="text-sm text-slate-600">
          Explore bridge routes, protocols, and volume.
        </p>
      </header>

      <div className="grid grid-cols-4 gap-4">
        <aside className="col-span-1">
          <ControlsPanel />
        </aside>

        <main className="col-span-3">
          <div className="bg-white rounded-xl shadow p-4">
            {loading && <div>Loading mock data...</div>}
            {error && <div className="text-red-600">{String(error)}</div>}
            {data && <GraphCanvas graph={data} onSelect={setSelected} />}
          </div>
        </main>
      </div>

      {selected && <DetailsPane item={selected} />}
    </div>
  )
}
