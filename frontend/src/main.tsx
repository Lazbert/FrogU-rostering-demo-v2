import { useState } from "react"
import React from "react"
import ReactDOM from 'react-dom/client'
import './index.css'
import FlightTable from '@/components/FlightTable'
import { FlightProps } from "@/components/FlightTable"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function App() {
  const [flight, setFlight] = useState<FlightProps>()
  console.log(flight)
  return (
    <div className="h-screen w-screen p-10">
      <div className="flex flex-col gap-4">
        <div className="h-[40%] flex">
          <FlightTable setFlight={setFlight} />
        </div>
      </div>
    </div>
  )
}