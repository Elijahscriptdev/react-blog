import React from 'react';
import './style.css';

/**
* @author
* @function contactUs
**/

const contactUs = (props) => {
  return(
  <div class="contact-info">
        <div class="cards">
          <i class="icon fas fa-envelope"></i>
          <div class="card-content">
            <h3>Email</h3>
            <span>elijahobominuru@gmail.com</span>
          </div>
        </div>

        <div class="cards">
          <i class="icon fas fa-phone"></i>
          <div class="card-content">
            <h3>Phone Number</h3>
            <span>+2348062540732</span>
          </div>
        </div>

        <div class="cards">
          <i class="icon fas fa-map-marker-alt"></i>
          <div class="card-content">
            <h3>Location</h3>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </div>
   )

 }

export default contactUs