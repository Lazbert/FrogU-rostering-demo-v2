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

export interface PilotProps {
  id: string,
  displayName: string,
  age: number,
  seniority: number,
  position: string,
  contactEmail: string,
  baseCountry: string
}

const recommendedPilot1: Array<PilotProps> = [
  {
    id: "1",
    displayName: "Frederic Gates",
    age: 52,
    seniority: 1460,
    position: "Captain",
    contactEmail: "frederic@outlook.com",
    baseCountry: "France"
  },
  {
    id: "0",
    displayName: "Stevie Barton",
    age: 43,
    seniority: 600,
    position: "Captain",
    contactEmail: "stevie@outlook.com",
    baseCountry: "United Kingdom"
  },
  {
    id: "2",
    displayName: "Craig Mckenzie",
    age: 60,
    seniority: 2190,
    position: "Captain",
    contactEmail: "craig@outlook.com",
    baseCountry: "Canada"
  },
]

const recommendedPilot2: Array<PilotProps> = [
  {
    id: "5",
    displayName: "Lacie Carson",
    age: 43,
    seniority: 985,
    position: "First Officer",
    contactEmail: "lacie@outlook.com",
    baseCountry: "Italy"
  },
  {
    id: "0",
    displayName: "Ayub Underwood",
    age: 37,
    seniority: 480,
    position: "First Officer",
    contactEmail: "holly@outlook.com",
    baseCountry: "United Kingdom"
  },
  {
    id: "1",
    displayName: "Alia Hayden",
    age: 42,
    seniority: 876,
    position: "First Officer",
    contactEmail: "philip@outlook.com",
    baseCountry: "Japan"
  },
]

function App() {
  const [flight, setFlight] = useState<FlightProps>()
  const [completedFlight, setCompletedFlight] = useState(false)
  const [pilot1, setPilot1] = useState<PilotProps>()
  const [pilot2, setPilot2] = useState<PilotProps>()

  const confirmButtonHandler = () => {
    if (pilot1 && pilot2) {
        setCompletedFlight(true)
    }
  }

  return (
    <div className="h-screen w-screen p-10">
      <div className="h-full flex flex-col gap-4">
        <div className="w-full flex gap-8">
          <div className="w-[55%] flex">
            <FlightTable setFlight={setFlight} />
          </div>
          <div className="w-full flex flex-col">
            { flight ? (
                <div className="h-full flex flex-col gap-2 p-4 rounded-lg bg-[#E5C6F3]">
                  <div className="flex justify-between">
                    <span className="text-[24px] font-medium">Recommendations</span>
                    <button onClick={confirmButtonHandler} className="mt-auto ml-auto px-4 py-2 rounded-[25px] bg-[#24BCDC] text-white">Confirm</button>
                  </div>
                  <div className={"flex justify-center gap-2"}>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[20px] underline">Captain{ pilot1 && `: ${pilot1.displayName}` }</span>
                      <PilotSelection recommendedPilots={recommendedPilot1} setSelectedPilot={setPilot1} />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[20px] underline">First Officer{ pilot2 && `: ${pilot2.displayName}` }</span>
                      <PilotSelection recommendedPilots={recommendedPilot2} setSelectedPilot={setPilot2}/>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex justify-center items-center rounded-lg bg-transparent border border-dashed border-black/20">
                  <span className="text-[24px] font-medium text-black/20">Select a flight on the left first</span>
                </div>
              )
            
            }
          </div>
        </div>
        <PilotScheduler finishedFlight={completedFlight ? flight : undefined} />
      </div>
    </div>
  )
}