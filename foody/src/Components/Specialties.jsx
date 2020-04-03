import React from 'react';
import '../App.css';
import shrimp from '../Assets/shrimppic2.png';


const Specialties = () => {
  return (
        <div className="Specialties" id="specialties">
          <div className="textDiv">
            <h1 style={{color: "green"}}>Our Specialties</h1>
            <p style={{color: "white"}}>Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla port or accumsan tincidunt.</p>
          </div>

          <div className="picsDiv">
            {/* <ul>
              <li> */}
                <div>
                  <img src={shrimp} alt="shrimp" style={{height: "75%", width: "100%"}}/>
                  <p>Italinao - 19.99$</p>
                </div>
              {/* </li>

              <li> */}
                <div>
                  <img src={shrimp} alt="shrimp" style={{height: "75%", width: "100%"}}/>
                  <p>Lemonia - 19.99$</p>
                </div>
              {/* </li>

              <li> */}
                <div>
                  <img src={shrimp} alt="shrimp" style={{height: "75%", width: "100%"}}/>
                  <p>Mangua - 19.99$</p>
                </div>
              {/* </li>

            
              <li> */}
                <div>
                  <img src={shrimp} alt="shrimp" style={{height: "75%", width: "100%"}}/>
                  <p>Biriyani - 19.99$</p>
                </div>
              {/* </li>  
            </ul>   */}
          </div>
        </div>
  );
}

export default Specialties;