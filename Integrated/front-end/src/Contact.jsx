// ContactPage.js

import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className='body1'>
    <div className="content-container">
      <h2>Contact Us</h2>
      <p>If you have any questions or concerns, please feel free to reach out to us:</p>

      <div className="contact-info">
        <div>
          <strong>Email:</strong> admission@university.edu
        </div>

        <div>
          <strong>Phone:</strong> +1 (123) 456-7890
        </div>

        <div>
          <strong>Address:</strong> 123 University Street, Coimbatore, TamilNadu
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactPage;
