import React from 'react'
import './Reservation.css'

const Reservation = ({ id, name, date, time, number, removeReservation}) => {
  return (
    <div key={id} className={'reservationCard'}>
      <h3 className={'reservationText'}>{name}</h3>
      <p className={'reservationText'}>{date}</p>
      <p className={'reservationText'}>{time}</p>
      <p className={'reservationText'}>Number of guests: {number}</p>
      <button className={'cancelButton'} onClick={ ()  => removeReservation(id)}>Cancel</button>
    </div>
  )
}

export default Reservation