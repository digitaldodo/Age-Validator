import React, { useState } from 'react';
import './App.css'; // Make sure this CSS file is also updated

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [message, setMessage] = useState('');

  // The minimum age for eligibility. You can change this number.
  const MINIMUM_AGE = 18;

  // Handles the change event of the date input field
  const handleDateChange = (event) => {
    setBirthDate(event.target.value);
  };

  // Calculates the age and validates eligibility
  const validateAge = () => {
    // Check if a date has been entered
    if (!birthDate) {
      setMessage('Please enter your birth date.');
      return;
    }

    // Create Date objects for the current date and the entered birth date
    const today = new Date();
    const dob = new Date(birthDate);

    // Calculate the age in years
    let age = today.getFullYear() - dob.getFullYear();

    // Adjust the age if the birthday hasn't happened yet this year
    const monthDifference = today.getMonth() - dob.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    // Check if the user is eligible and set the message
    if (age >= MINIMUM_AGE) {
      setMessage(`You are ${age} years old. You are eligible for our services!`);
    } else {
      setMessage(`You are ${age} years old. Sorry, you are not eligible for our services yet.`);
    }
  };

  return (
    <div className="app-container">
      <div className="validator-card">
        <h1>Age Validator</h1>
        <p>Please tell us your birth date to check your eligibility.</p>
        <input
          type="date"
          value={birthDate}
          onChange={handleDateChange}
          className="date-input"
        />
        <button onClick={validateAge} className="validate-button">
          Check Eligibility
        </button>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default App;

