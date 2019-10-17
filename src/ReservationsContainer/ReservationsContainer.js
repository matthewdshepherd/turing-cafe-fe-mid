import React from 'react'
import Reservation from '../Reservation/Reservation'

const ReservationsContainer = ({ reservations }) => {
  const reservationCards = reservations.map( reservation => {
    return <Reservation 
      id={reservation.id}
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
    />
  })
  
  return (
    <div>
      {reservationCards}
    </div>
  )
}

export default ReservationsContainer