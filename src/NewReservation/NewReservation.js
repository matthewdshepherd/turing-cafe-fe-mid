import React from 'react'
import './NewReservation.css'

export class NewReservation extends React.Component {
  constructor() {
    super()
      this.state = {
        name: '',
        date: '',
        time: '',
        number: ''
      }
    
  }

  handlChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(event)
    const { addReservation } = this.props;
    console.log(addReservation)
    const newReservation = { ...this.state, id: Date.now()};
    console.log(newReservation)
    addReservation(newReservation)
    this.resetInputs();
  }

  resetInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
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
          placeholder='Date (mm/dd)'
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
         <label htmlFor='number' className='NewReservationLabel'>Number Of Guests</label>
          <input
          className='NewReservationInput'
          id='number'
          type='text'
          name='number'
          placeholder='Number Of Guests'
          onChange={this.handlChange}
          value={this.state.number} />
        </div>
        <button 
        type='button'
        className={'makeReservationButton'}
          onClick={(event) => this.handleSubmit(event)}
        >Make Reservation</button>
      </form>
    )
  }
}

export default NewReservation;