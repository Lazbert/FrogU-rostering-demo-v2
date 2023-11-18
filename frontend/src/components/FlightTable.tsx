import { DataGrid, GridColDef } from "@mui/x-data-grid"

const WIDTH = 120;

interface FlightTableProps {
    setFlight: React.Dispatch<React.SetStateAction<FlightProps | undefined>>
}

export interface FlightProps {
    id: string,
    flightNumber: string,
    airplaneType: string,
    airplaneCode: string,
    departureIATA: string,
    arrivalIATA: string,
    departureTime: Date,
    arrivalTime: Date,
    totalMiles: number,
    pilotId: string
}

const flightsData: Array<FlightProps> = [
    {
        id: "0",
        flightNumber: "O134",
        airplaneType: "Airbus",
        airplaneCode: "A320",
        departureIATA: "HKG",
        arrivalIATA: "KIX",
        departureTime: new Date(2023, 10, 1, 1, 30),
        arrivalTime: new Date(2023, 10, 5, 6, 30),
        totalMiles: 1537,
        pilotId: "0",
    },
    {
        id: "1",
        flightNumber: "K056",
        airplaneType: "Airbus",
        airplaneCode: "A321",
        departureIATA: "HKG",
        arrivalIATA: "HND",
        departureTime: new Date(2023, 10, 14, 8, 40),
        arrivalTime: new Date(2023, 10, 19, 14, 10),
        totalMiles: 2156,
        pilotId: "1",
    },
    {
        id: "2",
        flightNumber: "T056",
        airplaneType: "Airbus",
        airplaneCode: "A320 Neo",
        departureIATA: "HKG",
        arrivalIATA: "TPE",
        departureTime: new Date(2023, 10, 23, 6, 45),
        arrivalTime: new Date(2023, 10, 26, 15, 6),
        totalMiles: 5429,
        pilotId: "2",
    },
]

const columns: GridColDef[] = [
    {
        field: "flightNumber",
        headerName: "Flight No.",
        width: WIDTH,
    },
    {
        field: "airplaneType",
        headerName: "Type of Aircraft",
        width: WIDTH,
    },
    {
        field: "airplaneCode",
        headerName: "Code of Aircraft",
        width: WIDTH,
    },
    {
        field: "departureIATA",
        headerName: "Departure",
        width: WIDTH,
    },
    {
        field: "arrivalIATA",
        headerName: "Destination",
        width: WIDTH,
    },
    {
        field: "departureTime",
        headerName: "Departing at",
        width: WIDTH,
    },
    {
        field: "arrivalTime",
        headerName: "Arriving at",
        width: WIDTH,
    },
    {
        field: "totalMiles",
        headerName: "Length",
        width: WIDTH,
    },
]

export const FlightTable: React.FC<FlightTableProps> = ({
    setFlight
}) => {
    
    return (
        <div className="w-[50%]">
            <DataGrid 
                checkboxSelection 
                disableRowSelectionOnClick 
                rows={flightsData}
                columns={columns}
                onRowSelectionModelChange={(ids) => {
                    // single selection only
                    if (ids.length == 1) {
                        // set selected flight as row id matching with data ind in list
                        const selectedRowData = flightsData.filter((_, ind) => ind == ids[0])
                        setFlight(selectedRowData[0])
                    }
                }}
            />
        </div>
    )
}

export default FlightTable;