import React from 'react'
import './NewReservation.css'

export class NewReservation extends React.Component {
  constructor() {
    super()
      this.state = {
        name: '',
        date: '',
        time: '',
        number: null
      }
    
  }

  handlChange = event => {
    console.log(event)
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    const { addReservation } = this.props;
    const newReservation = { ...this.state, id: date.Now()};
    addReservation(newReservation)
    this.resetInputs();
  }

  resetInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: null
    })
  }

  render() {
    return (
      <form className={'NewReservation'}>
        <div className={'labelInput__div'}>
          <label htmlFor='name' className='NewReservationLabel'>Name</label>
          <input
          className='NewReservationInput'
          id='name'
          type='text'
          name='name'
          placeholder='Name'
          onChange={this.handlChange}
          value={this.state.name} />
        </div>
        <div className={'labelInput__div'}>
          <label htmlFor='date' className='NewReservationLabel'>Date</label>
          <input
          className='NewReservationInput'
          id='date'
          type='text'
          name='date'
          placeholder='Date'
          onChange={this.handlChange}
          value={this.state.date} />
        </div>
        <div className={'labelInput__div'}>
          <label htmlFor='time' className='NewReservationLabel'>Time</label>
          <input
          className='NewReservationInput'
          id='time'
          type='time'
          name='time'
          placeholder='Time'
          onChange={this.handlChange}
          value={this.state.time} />
        </div>
        <div className={'labelInput__div'}>
         <label htmlFor='numOfGuests' className='NewReservationLabel'>Number Of Guests</label>
          <input
          className='NewReservationInput'
          id='numOfGuests'
          type='number'
          name='numOfGuests'
          placeholder='Number Of Guests'
          onChange={this.handlChange}
          value={this.state.number} />
        </div>
        <button className={'makeReservationButton'}>Make Reservation</button>
      </form>
    )
  }
}

export default NewReservation;