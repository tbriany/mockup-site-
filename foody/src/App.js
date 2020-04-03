import React from 'react';
import './App.css';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Specialties from './Components/Specialties';
import Menu from './Components/Menu';
import Services from './Components/Services';
import Footer from './Components/Footer';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
        date: '',
        time: '',
        ppl: '',
        firstname: '',
        lastname: '',
        submitted: ''
    }
  }

  handleDateChange = (event) => {
    let date = event.target.value 
    console.log(date)
    this.setState ({
      date: date
    })
  }

  handleTimeChange = (event) => {
    let time = event.target.value 
    console.log(time)
    this.setState ({
      time: time
    })
  }

  handlePplChange = (event) => {
    let ppl = event.target.value 
    console.log(ppl)
    this.setState ({
      ppl: ppl
    })
  }

  handlefirstName = (event) => {
    let name = event.target.value
    this.setState ({
      firstname: name
    })
  }

  handleLastName = (event) => {
    let name = event.target.value
    this.setState ({
      lastname: name
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {date, time, ppl, firstname, lastname} = this.state 
    this.setState ({
      submitted: `Thank you ${firstname} ${lastname}! Your reservation was booked for ${date} at ${time} for ${ppl} people. See you then!`
    })
  }

  render () {
    console.log(this.state)
    const {handleDateChange, handleTimeChange, handlePplChange, handlefirstName, handleLastName, handleSubmit} = this
    const {submitted} = this.state
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Specialties/>
      <Menu/>
      <Services
      handleDateChange = {handleDateChange}
      handleTimeChange = {handleTimeChange}
      handlePplChange = {handlePplChange}
      handlefirstName = {handlefirstName}
      handleLastName = {handleLastName}
      handleSubmit = {handleSubmit}
      submitted = {submitted}
      />
      <Footer/>
    </div>
  );
  }
}

export default App;
