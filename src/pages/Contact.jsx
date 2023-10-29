import React, { useState } from 'react';

function Contact() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  return (
    <><h2>Contact Us</h2>
    <div className="containercontact">


          <form id="contactForm" className="form">
              <div className="form-group">
                  <label htmlFor="firstname">Name:</label>
                  <input type="text" id="firstname" name="firstname" className="input-field" required />
              </div>
              <div className="form-group">
                  <label htmlFor="Surname">Subject:</label>
                  <input type="text" id="Subject" name="Subject" className="input-field" required />
              </div>
              <div className="form-group">
                  <label htmlFor="Message">Message:</label>
                  <textarea id="Message" name="Message" className="input-field" rows="4" required></textarea>
              </div>
              <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" className="input-field" required />
              </div>

              <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <div className="password-input">
                      <input
                          type={showPassword ? 'text' : 'password'}
                          id="password"
                          name="password"
                          className="input-field"
                          required />
                      <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="show-password-button"
                      >
                          {showPassword ? '👁️' : '👁️‍🗨️'}
                      </button>
                  </div>
              </div>
              <div className="form-group">
                  <input type="submit" value="Submit" className="button" />
              </div>
          </form>
          <div id="response"></div>
      </div></>
  );
}

export default Contact;