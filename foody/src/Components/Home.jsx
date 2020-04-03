import React from 'react';
import '../App.css';

const Home = () => {
  return (
        <div className="Home" id="home">
          <div className="homeDescription">
             <h1 style={{color: "white"}}>Making Food Taste Better.</h1>
             <p>Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt. </p>
             <button>More Details</button>
          </div>
        </div>
  );
}

export default Home;