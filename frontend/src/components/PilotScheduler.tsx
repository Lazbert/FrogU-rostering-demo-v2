import { FlightProps } from "./FlightTable"
import { DayPilotScheduler } from "daypilot-pro-react"

const pilots = [
    { name: "Stevie Barton", id: "0" },
    { name: "Frederic Gates", id: "1" },
    { name: "Craig Mckenzie", id: "2" },
    { name: "Holly Vaughan", id: "3" },
    { name: "Philip Dale", id: "4" },
    { name: "Lacie Carson", id: "5" },
    { name: "Catrin Harvey", id: "6" },
    { name: "Ayub Underwood", id: "7" },
    { name: "Alia Hayden", id: "8" },
    { name: "Jana Norman", id: "9" }
]

const rosteredFlights: Array<FlightProps> = [
    {
        id: "3",
        flightNumber: "G021",
        airplaneType: "Airbus",
        airplaneCode: "A320",
        departureIATA: "HKG",
        arrivalIATA: "HND",
        departureTime: new Date(2023, 10, 4, 12, 15),
        arrivalTime: new Date(2023, 10, 9, 22, 0),
        totalMiles: 3191,
        pilotId: "3",
    },
    {
        id: "4",
        flightNumber: "T340",
        airplaneType: "Airbus",
        airplaneCode: "A320NEO",
        departureIATA: "HKG",
        arrivalIATA: "TPE",
        departureTime: new Date(2023, 10, 1, 8, 40),
        arrivalTime: new Date(2023, 10, 4, 14, 10),
        totalMiles: 1007,
        pilotId: "4",
    },
    {
        id: "5",
        flightNumber: "T555",
        airplaneType: "Airbus",
        airplaneCode: "A320NEO",
        departureIATA: "HKG",
        arrivalIATA: "TPE",
        departureTime: new Date(2023, 10, 8, 8, 40),
        arrivalTime: new Date(2023, 10, 13, 14, 10),
        totalMiles: 3191,
        pilotId: "5",
    }
]

export const PilotScheduler: React.FC = () => {
    return (
        <div className="h-max flex-grow">
            <DayPilotScheduler
                heightSpec={"Parent100Pct"}
                rowMinHeight={40}
                cellWidthSpec={"Auto"}
                resources={pilots}
                startDate={"2023-11-01"}
                days={30}
                scale={"Day"}
                timeHeaders={[
                    { groupBy: "Month" },
                    { groupBy: "Day", format: "d" }
                ]}
                events={rosteredFlights.map((flight) => {  // convert flights to events on scheduler
                    return {
                        id: flight.id,
                        text: `${flight.arrivalIATA} ${flight.flightNumber} ${flight.airplaneCode}`,
                        start: flight.departureTime.toISOString().substring(0, 19),
                        end: flight.arrivalTime.toISOString().substring(0, 19),
                        resource: flight.pilotId,
                        barColor: "#0E4C72"
                    }
                })}
            />
        </div>
    )
}

export default PilotScheduler;