// PatientInformation.jsx

import React, { useState } from 'react';
import './PatientInformation.css';
import { useNavigate } from 'react-router-dom';

const PatientInformation = () => {
  const [formData, setFormData] = useState({
    lastDrinkOrDrugsDaysAgo: '',
    diagnosis: '',
    previousHistory: '',
    alcoholSymptoms: Array(6).fill(false),
    drugSymptoms: Array(5).fill(false),
    psychiatricComplications: Array(6).fill(false),
    medicalProblems: Array(6).fill(false),
    chronicProblems: Array(7).fill(false),
    tobaccoUse: '',
    allergyKnowledge: '',
  });

  const [alcoholSymptoms, setAlcoholSymptoms] = useState(Array(6).fill(false));
  const [drugSymptoms, setDrugSymptoms] = useState(Array(5).fill(false));
  const [psychiatricComplications, setPsychiatricComplications] = useState(Array(6).fill(false));
  const [medicalProblems, setMedicalProblems] = useState(Array(6).fill(false));
  const [chronicProblems, setChronicProblems] = useState(Array(7).fill(false));

  const navigate = useNavigate();

  const handleClickNext = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/medical/page3');
  };

  const handleClickPrev = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/medical/page1');
  };

  const toggleCheckbox = (index, currentListId) => {
    switch (currentListId) {
      case 'alcoholSymptoms':
        setAlcoholSymptoms((prev) => {
          const newState = [...prev];
          newState[index] = !newState[index];
          return newState;
        });
        break;
      case 'drugSymptoms':
        setDrugSymptoms((prev) => {
          const newState = [...prev];
          newState[index] = !newState[index];
          return newState;
        });
        break;
      case 'psychiatricComplications':
        setPsychiatricComplications((prev) => {
          const newState = [...prev];
          newState[index] = !newState[index];
          return newState;
        });
        break;
      case 'medicalProblems':
        setMedicalProblems((prev) => {
          const newState = [...prev];
          newState[index] = !newState[index];
          return newState;
        });
        break;
      case 'chronicProblems':
        setChronicProblems((prev) => {
          const newState = [...prev];
          newState[index] = !newState[index];
          return newState;
        });
        break;
      default:
        break;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/submitFormData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          alcoholSymptoms,
          drugSymptoms,
          psychiatricComplications,
          medicalProblems,
          chronicProblems,
        }),
      });

      if (response.ok) {
        console.log('Form data submitted successfully');
        // You can add additional logic here, such as redirecting to another page
      } else {
        console.error('Failed to submit form data');
        // Handle error, show a message, etc.
      }
    } catch (error) {
      console.error('An error occurred while submitting form data', error);
      // Handle error, show a message, etc.
    }
  };

  return (
      <form className="page" onSubmit={handleSubmit}>
        <div className="pad">
        <h1>Patient Information</h1>
        <div className="form-group">
          Last drink/Drugs taken{' '}
          <input
            type="text"
            name="lastDrinkOrDrugsDaysAgo"
            value={formData.lastDrinkOrDrugsDaysAgo}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="diagnosis">Diagnosis</label>
          <input
            type="text"
            id="diagnosis"
            name="diagnosis"
            value={formData.diagnosis}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="previousHistory">Previous History</label>
          <input
            type="text"
            id="previousHistory"
            name="previousHistory"
            value={formData.previousHistory}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <h4>Withdrawal symptoms experienced when the patient stopped drinks/Drugs.</h4>
      <div className="symptoms-container">
        <div>
          <p id="hed">Alcohol</p>
          <ul id="alcoholSymptoms">
            {alcoholSymptoms.map((checked, index) => (
              <li
                key={index}
                className={checked ? 'checked' : ''}
                onClick={() => toggleCheckbox(index, 'alcoholSymptoms')}
              >
                {checked ? '✔' : '+'} {['Tremors', 'Insomnia', 'Fits', 'Aches/Pains', 'Hallucination', 'Delirium'][index]}
              </li>
            ))}
          </ul>
        </div>
        <div> 
          <p id="hed">Drug</p>
          <ul id="drugSymptoms" className="symptoms-list">
            {drugSymptoms.map((checked, index) => (
              <li
                key={index}
                className={checked ? 'checked' : ''}
                onClick={() => toggleCheckbox(index, 'drugSymptoms')}
              >
                {checked ? '✔' : '+'} {['Tremors', 'Insomnia', 'Fits', 'Severe pain', 'Restlessness'][index]}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p id="hed">Other psychiatric complications</p>
      <ul id="psychiatricComplications">
        {psychiatricComplications.map((checked, index) => (
          <li
            key={index}
            className={checked ? 'checked' : ''}
            onClick={() => toggleCheckbox(index, 'psychiatricComplications')}
          >
            {checked ? '✔' : '+'} {['Depression', 'Suicidal ideation/attempts', 'Confusion', 'Aggressive outbursts', 'Hallucination', 'Paranoia'][index]}
          </li>
        ))}
      </ul>

      <p id="hed">History of other Medical problems in the past</p>
      <ul id="medicalProblems">
        {medicalProblems.map((checked, index) => (
          <li
            key={index}
            className={checked ? 'checked' : ''}
            onClick={() => toggleCheckbox(index, 'medicalProblems')}
          >
            {checked ? '✔' : '+'} {['Haematemesis', 'Jaundice', 'Abscesses', 'Bleeding piles', 'Skin problems', 'Any other'][index]}
          </li>
        ))}
      </ul>

      <p id="hed">Chronic health problems</p>
      <ul id="chronicProblems">
        {chronicProblems.map((checked, index) => (
          <li
            key={index}
            className={checked ? 'checked' : ''}
            onClick={() => toggleCheckbox(index, 'chronicProblems')}
          >
            {checked ? '✔' : '+'} {['Diabetes', 'Liver disorders', 'Epilepsy', 'Respiratory problems - Pulmonary TB/Chronic Bronchitis/Bronchial asthma', 'Cardiac problems - HBP/IHD/RHD', 'Infections', 'Others'][index]}
          </li>
        ))}
      </ul>

      <h3>Other Information:</h3>

      <div className="form-group">
        <label htmlFor="tobaccoUse">Use of Tobacco Products - Smoking/Pan chewing/Others:</label>
        <input type="text" id="tobaccoUse" name="tobaccoUse" value={formData.tobaccoUse} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="allergyKnowledge">Knowledge of allergy to specific Drugs:</label>
        <input type="text" id="allergyKnowledge" name="allergyKnowledge" value={formData.allergyKnowledge} onChange={handleInputChange} required />
      </div>
      <div id="div7">
        <p id="p">2</p>
      </div>
      <button onClick={handleClickPrev}>Prev</button>
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <button onClick={handleClickNext}>Next</button>
    </form>
  );
};

export default PatientInformation;
