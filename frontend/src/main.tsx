import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function App() {
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col gap-4">
        Testing
      </div>
    </div>
  )
}