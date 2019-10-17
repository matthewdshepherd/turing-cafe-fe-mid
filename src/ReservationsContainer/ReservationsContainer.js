import React from 'react'
import Reservation from '../Reservation/Reservation'
// import './ReservationsContainer.css'


const ReservationsContainer = ({ reservations, removeReservation }) => {
  const reservationCards = reservations.map( reservation => {
    return <Reservation key={reservation.id}
      id={reservation.id}
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
      removeReservation={removeReservation}
    />
  })

  return (
    <>
      {reservationCards}
    </>
  )
}

export default ReservationsContainer