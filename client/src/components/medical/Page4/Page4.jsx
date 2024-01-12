import React, { useState } from 'react';
import './Page4.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MedicationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: '',
    complaints: '',
    medicationReasons: '',
    signature: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/submitFormData', formData);

      if (response.status === 201) {
        console.log('Medication data submitted successfully');
        // Additional logic can be added here, such as redirection or displaying a success message
      } else {
        console.error('Failed to submit medication data');
        // Handle error, show a message, etc.
      }
    } catch (error) {
      console.error('An error occurred while submitting medication data', error);
      // Handle error, show a message, etc.
    }
  };

  const handleClickPrev = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/medical/page3');
  };

  return (
      <form onSubmit={handleSubmit}>
      <h2>Medication provided during treatment: Physical</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Complaints</th>
              <th>Medication/Reasons for continuing/Change of Medication</th>
              <th>Signature</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <textarea
                  rows="5"
                  cols="20"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="5"
                  cols="20"
                  name="complaints"
                  value={formData.complaints}
                  onChange={handleInputChange}
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="5"
                  cols="32"
                  name="medicationReasons"
                  value={formData.medicationReasons}
                  onChange={handleInputChange}
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="5"
                  cols="20"
                  name="signature"
                  value={formData.signature}
                  onChange={handleInputChange}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div id="div7">
          <p id="p">4</p>
        </div>
        <button onClick={handleClickPrev}>Prev</button>
        <button type="submit">Submit</button>
      </form>
  );
};

export default MedicationForm;
