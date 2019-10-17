export const getReservations = () => {
  return  fetch('http://localhost:3001/api/v1/reservations')
  .then(reservations => {
    if (!reservations.ok) {
      throw new Error('Error Fetching Reservations')
    }
    return reservations.json()
  })
}