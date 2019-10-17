import React from 'react'

const Reservation = ({ id, name, date, time, number}) => {
  return (
    <div key={id} className={'reservationCard'}>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
    </div>
  )
}

export default Reservation