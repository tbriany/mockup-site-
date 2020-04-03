import React from 'react';
import '../App.css';
import shrimp from '../Assets/shrimppic2.png';

const About = () => {
  return (
        <div className="About" id="about">
          <div>
            <h1>About Us</h1>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
            <p>Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta.</p>
            <button>More Details</button>
          </div>
          <div>
            <img src={shrimp} alt="shrimp" style={{height: "100%", width: "100%"}}/>
          </div>
        </div>
  );
}

export default About;