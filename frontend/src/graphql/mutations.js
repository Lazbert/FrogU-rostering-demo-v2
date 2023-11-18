/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const upsertFlight = /* GraphQL */ `
  mutation UpsertFlight($flight: FlightInput!) {
    upsertFlight(flight: $flight) {
      id
      flightNumber
      airplaneType
      airplaneCOde
      departureIATA
      arrivalIATA
      departureTime
      arrivalTime
      totalMiles
      pilots {
        id
        displayName
        age
        seniority
        position
        preference {
          id
          birthday
          mostPreferredDest
          leastPreferredDest
        }
      }
    }
  }
`;
export const upsertPilot = /* GraphQL */ `
  mutation UpsertPilot($pilot: PilotInput!) {
    upsertPilot(pilot: $pilot) {
      id
      displayName
      age
      seniority
      position
      preference {
        id
        birthday
        mostPreferredDest
        leastPreferredDest
      }
    }
  }
`;
