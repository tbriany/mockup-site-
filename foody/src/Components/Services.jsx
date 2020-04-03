import React from 'react';
import '../App.css';

const Services = (props) => {

  const {handleDateChange, handleTimeChange, handlePplChange, handlefirstName, handleLastName, handleSubmit, submitted} = props

  return (
        <div className="Services" id="services">
          <div>
          <h1>Book a Table</h1>                 
          <p style={{color: "white"}}>Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
          </div>

          <div id="formDiv">
          <form onSubmit={handleSubmit}>

          <input type="text" placeholder="Enter Firstname" onChange={handlefirstName} style={{float: "left"}}></input>
          <input type="text" placeholder="Enter Lastname" onChange={handleLastName} style={{float: "left"}}></input>

           <label htmlFor="date">Choose a date</label>
           <select id="date" onChange={handleDateChange}>
            <option> 04/01/2020 </option>
            <option> 04/01/2020 </option>
            <option> 04/02/2020 </option>
            <option> 04/03/2020 </option>
            <option> 04/04/2020 </option>
            <option> 04/05/2020 </option>
            <option> 04/06/2020 </option>
            <option> 04/07/2020 </option>
            <option> 04/08/2020 </option>
            <option> 04/09/2020 </option>
            <option> 04/10/2020 </option>
            <option> 04/11/2020 </option>
            <option> 04/12/2020 </option>
            <option> 04/13/2020 </option>
            <option> 04/14/2020 </option>
            <option> 04/15/2020 </option>
            <option> 04/16/2020 </option>
            <option> 04/17/2020 </option>
            <option> 04/18/2020 </option>
            <option> 04/19/2020 </option>
            <option> 04/20/2020 </option>
            <option> 04/21/2020 </option>
            <option> 04/22/2020 </option>
            <option> 04/23/2020 </option>
            <option> 04/24/2020 </option>
            <option> 04/25/2020 </option>
            <option> 04/26/2020 </option>
            <option> 04/27/2020 </option>
            <option> 04/28/2020 </option>
            <option> 04/29/2020 </option>
            <option> 04/30/2020 </option>
            </select>

            <label htmlFor="time">Choose a time</label>
            <select id="time" onChange={handleTimeChange}>
            <option> 4:00pm </option>
            <option> 4:00pm </option>
            <option> 5:00pm </option>
            <option> 6:00pm </option>
            <option> 7:00pm </option>
            <option> 8:00pm </option>
            <option> 9:00pm </option>
            <option> 10:00pm </option>
            <option> 11:00pm </option>
            <option> 12:00am </option>
            </select>

            <label htmlFor="num">Choose number of people</label>
            <select id="num" onChange={handlePplChange}>
            <option> 2 people </option>
            <option> 2 people </option>
            <option> 3 people </option>
            <option> 4 people </option>
            <option> 5 people </option>
            <option> 6 people </option>
            <option> 7 people </option>
            <option> 8 people </option>
            <option> 9 people </option>
            <option> 10 people </option>
            <option> 11 people </option>
            <option> 12 people </option>
            <option> 13 people </option>
            <option> 14 people </option>
            <option> 15 people </option>
            </select>

            <button>Book now</button>
          </form>
          </div>
          <p style={{color: "white"}}>{submitted}</p>
        </div>
  );
}

export default Services;