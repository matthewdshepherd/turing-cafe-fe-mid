import React from 'react'

export class NewReservation extends React.Component {
  constructor() {
    super{
      this.state = {
        id: 0
        name: '',
        date: '',
        time: '',
        number: 0
      }
    }
  }

  render() {
    return (
      <form className={'NewReservation'}>
        <label htmlFor='name' className='NewReservationLabel'>Name</label>
        <input
          className='NewReservationInput'
          id='name'
          type='text'
          name='name'
          placeholder='Name'
          onChange={this.handlChange}
          value={this.state.name} />
        <label htmlFor='date' className='NewReservationLabel'>Date</label>
        <input
          className='NewReservationInput'
          id='date'
          type='text'
          name='date'
          placeholder='Date'
          onChange={this.handlChange}
          value={this.state.name} />
        <label htmlFor='time' className='NewReservationLabel'>Time</label>
        <input
          className='NewReservationInput'
          id='time'
          type='time'
          name='time'
          placeholder='Time'
          onChange={this.handlChange}
          value={this.state.name} />
        <label htmlFor='numOfGuests' className='NewReservationLabel'>Number Of Guests</label>
        <input
          className='NewReservationInput'
          id='numOfGuests'
          type='number'
          name='numOfGuests'
          placeholder='Number Of Guests'
          onChange={this.handlChange}
          value={this.state.name} />
          <button className={'makeReservationButton'}>Make Reservation</button>
      </form>
    )
  }
}

export default NewReservation;