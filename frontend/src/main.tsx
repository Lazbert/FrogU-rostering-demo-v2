import { useState } from "react"
import React from "react"
import ReactDOM from 'react-dom/client'
import './index.css'
import FlightTable from '@/components/FlightTable'
import { FlightProps } from "@/components/FlightTable"
import PilotScheduler from "./components/PilotScheduler"
import PilotSelection from "./components/PilotSelection"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const recommendedPilot1 = [
  "Stevie Barton",
  "Frederic Gates",
  "Craig Mckenzie",
]

const recommendedPilot2 = [
  "Holly Vaughan",
  "Philip Dale",
  "Lacie Carson",
]

function App() {
  const [flight, setFlight] = useState<FlightProps>()

  return (
    <div className="h-screen w-screen p-10">
      <div className="h-full flex gap-4">
        <div className="w-[55%] flex flex-col gap-8">
          <div className="h-[40%] flex">
            <FlightTable setFlight={setFlight} />
          </div>
          <PilotScheduler />
        </div>
        <div className="w-max flex flex-col">
          <div className="flex flex-col p-4 border border-black/20 rounded-lg">
            <span>Recommendations</span>
            <div className="h-[75%] flex gap-4">
              <div className="flex flex-col items-center">
                <span>Captain</span>
                <PilotSelection recommendedPilots={recommendedPilot1} />
              </div>
              <div className="flex flex-col items-center">
                <span>First Officer</span>
                <PilotSelection recommendedPilots={recommendedPilot2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}