import React, { Component } from 'react';
import './App.css';
import NewReservation from '../NewReservation/NewReservation'
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer'

class App extends Component {
constructor() {
  super()
  this.state = {
    reservations: [],
    error: ''
  }
}

componentDidMount() {
  // getReservations()
  fetch('http://localhost:3001/api/v1/reservations')
    .then ( response => response.json())
    .then(reservations => this.setState({ reservations: reservations}))
    .catch( error => console.error(error))
}

  addReservation = NewReservation => {
    const options = {
      method: 'POST',
      body: JSON.stringify(NewReservation),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('http://localhost:3001/api/v1/reservations', options)
      .then(response =>  response.json())
      .then(reservation => this.setState({
        reservations: [...this.state.reservations, reservation]
      }))
      .catch(error => console.error(error))
  }

  removeReservation = id => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <NewReservation addReservation={this.addReservation}/>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ReservationsContainer 
          reservations={this.state.reservations} 
          />
        </div>
      </div>
    )
  }
}

export default App;
