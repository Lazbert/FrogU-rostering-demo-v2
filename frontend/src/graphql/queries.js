/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFlight = /* GraphQL */ `
  query GetFlight($flightNumber: String) {
    getFlight(flightNumber: $flightNumber) {
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
export const getPilot = /* GraphQL */ `
  query GetPilot($displayName: String) {
    getPilot(displayName: $displayName) {
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
