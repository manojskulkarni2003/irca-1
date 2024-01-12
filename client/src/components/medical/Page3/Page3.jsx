import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Page3 = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    pulseRate: '',
    bloodPressure: '',
    temperature: '',
    weight: '',
    symptoms: {
      anemia: false,
      lymphNodes: false,
      glossitis: false,
      flushedFace: false,
      palmarErythema: false,
      pedalEdema: false,
      tremors: false,
      jaundice: false,
      lossOfBodyHair: false,
      wastingOfMuscles: false,
      abscess: false,
      hallucination: false,
      malnutrition: false,
      clubbingOfNails: false,
      spiderNaevi: false,
      gynaecomastia: false,
      injectionMarks: false,
    },
    untowardIncident: false,
    incidentDescription: '',
    actionTaken: '',
    impression: [],
    investigation: '',
    certificateDetails: '',
  });

  const [abnormalities, setAbnormalities] = useState({
    respiratorySystem: { yes: false, no: false },
    cardiovascularSystem: { yes: false, no: false },
    gastrointestinalSystem: { yes: false, no: false },
    nervousSystem: { yes: false, no: false },
  });

  const handleAbnormalitiesChange = (system, option) => {
    setAbnormalities((prev) => ({
      ...prev,
      [system]: { ...prev[system], [option]: !prev[system][option] },
    }));
  };

  const handleClickNext = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/medical/page4');
  };

  const handleClickPrev = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/medical/page3');
  };

  const loadSavedData = () => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  };

  const handleCheckboxChange = (category, symptom) => {
    setFormData((prev) => ({
      ...prev,
      symptoms: { ...prev.symptoms, [symptom]: !prev.symptoms[symptom] },
    }));
  };

  const handleImpressionChange = (value) => {
    const impressionIndex = formData.impression.indexOf(value);
    if (impressionIndex === -1) {
      setFormData((prev) => ({ ...prev, impression: [...prev.impression, value] }));
    } else {
      setFormData((prev) => ({
        ...prev,
        impression: prev.impression.filter((item, index) => index !== impressionIndex),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/submitFormData', {
        ...formData,
        abnormalities: { ...abnormalities },
        // Add any other variables you want to send here
      });
  
      if (response.status >= 200 && response.status < 300) {
        console.log('Form data submitted successfully');
        // You can add additional logic here, such as redirecting to another page
      } else {
        console.error('Failed to submit form data. Server responded with status:', response.status);
        // Handle error, show a message, etc.
      }
    } catch (error) {
      console.error('An error occurred while submitting form data', error);
      // Handle error, show a message, etc.
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: inputValue }));
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PAGE3</title>
        <style>
          {`
            form{
              width: 21cm;
              height: 41cm;
              margin-bottom: 0px;
              padding-bottom: 2cm;
              font-family: Arial, sans-serif;
            }


            table {
              width: 100%;
              border-collapse: collapse;
            }

            table, th, td {
              border: 1px solid #000;
              padding: 10px;
              text-align: left;
            }

            textarea {
              width: calc(100% - 6px);
              height: 90px;
              margin: 0;
              padding: 2px;
              box-sizing: border-box;
              border: 1px solid #000;
            }

            li {
              display: flex;
              justify-content: space-between;
              padding: 5px;
            }

            .l1, p {
              padding: 10px;
              font-size: 20px;
            }

            #form input[type="text"] {
              width: 50px;
              height: 20px;
              border: 1px solid #000;
            }

            #div-body {
              display: flex;
              justify-content: space-between;
              padding: 20px;
            }

            .div {
              flex: 1;
              max-width: 350px;
              padding-right: 20px;
            }

            #divOther {
              padding-right: 0px;
            }

            table.bordered-table input[type="text"], textarea {
              border: none;
              outline: none;
            }

            a {
              color: white;
              background-color: gray;
              border-radius: 3px;
              text-decoration: none;
              padding: 5px 10px;
              transition: background-color 0.3s ease;
              display: inline-block;
            }

            a:hover {
              background-color: darkgray;
            }

            #div7 {
              padding: 0cm;
              display: flex;
              justify-content: center;
            }

            #p {
              text-align: center;
              border: 2px solid black;
              width: 20px;
              padding: 5px;
            }

            .body {
              position: relative;
            }
          `}
        </style>
      </head>
      <body className="body">
  <form id="form" onSubmit={handleSubmit}>
  <h1 align="center"><b>PHYSICAL EXAMINATION OF THE DAY OF ADMISSION</b></h1>
    <div>
      <div> 
        <label className="l1">
          Pulse Rate :{' '}
          <input
            type="text"
            name="pulseRate"
            value={formData.pulseRate}
            onChange={handleInputChange}
          />
        </label>
        <label className="l1">
          Blood Pressure :{' '}
          <input
            type="text"
            name="bloodPressure"
            value={formData.bloodPressure}
            onChange={handleInputChange}
          />
        </label>
        <label className="l1">
          Temperature :{' '}
          <input
            type="text"
            name="temperature"
            value={formData.temperature}
            onChange={handleInputChange}
          />
        </label>
        <label className="l1">
          Weight :{' '}
          <input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
          />
        </label>
      </div>
    </div>


<div>
  <label className="l1">Which of the following symptoms are present during admission-</label><br />
  <div id="div-body">
    <div className="div">
      <ul className="star-list">
        <li>
          <label className="l1">• Anemia</label>
          <input
            type="checkbox"
            name="symptoms"
            checked={formData.symptoms.anemia}
            onChange={() => handleCheckboxChange('symptoms', 'anemia')}
          />
        </li>
        <li>
          <label className="l1">• Lymph Nodes</label>
          <input
            type="checkbox"
            name="symptoms"
            checked={formData.symptoms.lymphNodes}
            onChange={() => handleCheckboxChange('symptoms', 'lymphNodes')}
          />
        </li>
        <li>
          <label className="l1">• Glossitis</label>
          <input
            type="checkbox"
            name="symptoms"
            checked={formData.symptoms.glossitis}
            onChange={() => handleCheckboxChange('symptoms', 'glossitis')}
          />
        </li>
        <li>
          <label className="l1">• Flushed Face</label>
          <input
            type="checkbox"
            name="symptoms"
            checked={formData.symptoms.flushedFace}
            onChange={() => handleCheckboxChange('symptoms', 'flushedFace')}
          />
        </li>
        <li>
          <label className="l1">• Palmar Erythema</label>
          <input
            type="checkbox"
            name="symptoms"
            checked={formData.symptoms.palmarErythema}
            onChange={() => handleCheckboxChange('symptoms', 'palmarErythema')}
          />
        </li>
        <li>
          <label className="l1">• Pedal Edema</label>
          <input
            type="checkbox"
            name="symptoms"
            checked={formData.symptoms.pedalEdema}
            onChange={() => handleCheckboxChange('symptoms', 'pedalEdema')}
          />
        </li>
        <li>
          <label className="l1">• Tremors</label>
          <input
            type="checkbox"
            name="symptoms"
            checked={formData.symptoms.tremors}
            onChange={() => handleCheckboxChange('symptoms', 'tremors')}
          />
        </li>
      </ul>
    </div>

    <div className="div">
      <ul>
        <li>
          <label className="l1">• Jaundice</label>
          <input
            type="checkbox"
            name="symptoms"
            checked={formData.symptoms.jaundice}
            onChange={() => handleCheckboxChange('symptoms', 'jaundice')}
          />
        </li>
        <li>
          <label className="l1">• Loss of Body hair</label>
          <input
            type="checkbox"
            name="symptoms"
            checked={formData.symptoms.lossOfBodyHair}
            onChange={() => handleCheckboxChange('symptoms', 'lossOfBodyHair')}
          />
        </li>
        <li>
          <label className="l1">• Wasting of muscles</label>
          <input
            type="checkbox"
            name="symptoms"
            checked={formData.symptoms.wastingOfMuscles}
            onChange={() => handleCheckboxChange('symptoms', 'wastingOfMuscles')}
          />
        </li>
        <li>
          <label className="l1">• Abscess</label>
          <input
            type="checkbox"
            name="symptoms"
            checked={formData.symptoms.abscess}
            onChange={() => handleCheckboxChange('symptoms', 'abscess')}
          />
        </li>
        <li>
          <label className="l1">• Hallucination</label>
          <input
            type="checkbox"
            name="symptoms"
            checked={formData.symptoms.hallucination}
            onChange={() => handleCheckboxChange('symptoms', 'hallucination')}
          />
        </li>
      </ul>
    </div>

    <div className="div" id="divOther">
      <ul>
        <li>
          <label className="l1">• Malnutrition</label>
          <input
            type="checkbox"
            name="symptoms"
            checked={formData.symptoms.malnutrition}
            onChange={() => handleCheckboxChange('symptoms', 'malnutrition')}
          />
        </li>
        <li>
          <label className="l1">• Clubbing of nails</label>
          <input
            type="checkbox"
            name="symptoms"
            checked={formData.symptoms.clubbingOfNails}
            onChange={() => handleCheckboxChange('symptoms', 'clubbingOfNails')}
          />
        </li>
        <li>
          <label className="l1">• Spider Naevi</label>
          <input
            type="checkbox"
            name="symptoms"
            checked={formData.symptoms.spiderNaevi}
            onChange={() => handleCheckboxChange('symptoms', 'spiderNaevi')}
          />
        </li>
        <li>
          <label className="l1">• Gynaecomastia</label>
          <input
            type="checkbox"
            name="symptoms"
            checked={formData.symptoms.gynaecomastia}
            onChange={() => handleCheckboxChange('symptoms', 'gynaecomastia')}
          />
        </li>
        <li>
          <label className="l1">• Injection marks</label>
          <input
            type="checkbox"
            name="symptoms"
            checked={formData.symptoms.injectionMarks}
            onChange={() => handleCheckboxChange('symptoms', 'injectionMarks')}
          />
        </li>
      </ul>
    </div>
  </div>
</div>

<div>
  <p>Record abnormalities, if any, on examination of the following:</p>
  <table className="bordered-table">
    <tr>
      <th>System</th>
      <th>YES</th>
      <th>NO</th>
    </tr>
    <tr>
      <td>Respiratory system:</td>
      <td>
        <input
          type="radio"
          name="respiratorySystem"
          checked={abnormalities.respiratorySystem.yes}
          onChange={() => handleAbnormalitiesChange('respiratorySystem', 'yes')}
        />
      </td>
      <td>
        <input
          type="radio"
          name="respiratorySystem"
          checked={abnormalities.respiratorySystem.no}
          onChange={() => handleAbnormalitiesChange('respiratorySystem', 'no')}
        />
      </td>
    </tr>
    <tr>
      <td>Cardiovascular system:</td>
      <td>
        <input
          type="radio"
          name="cardiovascularSystem"
          checked={abnormalities.cardiovascularSystem.yes}
          onChange={() => handleAbnormalitiesChange('cardiovascularSystem', 'yes')}
        />
      </td>
      <td>
        <input
          type="radio"
          name="cardiovascularSystem"
          checked={abnormalities.cardiovascularSystem.no}
          onChange={() => handleAbnormalitiesChange('cardiovascularSystem', 'no')}
        />
      </td>
    </tr>
    <tr>
      <td>Gastrointestinal system:</td>
      <td>
        <input
          type="radio"
          name="gastrointestinalSystem"
          checked={abnormalities.gastrointestinalSystem.yes}
          onChange={() => handleAbnormalitiesChange('gastrointestinalSystem', 'yes')}
        />
      </td>
      <td>
        <input
          type="radio"
          name="gastrointestinalSystem"
          checked={abnormalities.gastrointestinalSystem.no}
          onChange={() => handleAbnormalitiesChange('gastrointestinalSystem', 'no')}
        />
      </td>
    </tr>
    <tr>
      <td>Nervous system:</td>
      <td>
        <input
          type="radio"
          name="nervousSystem"
          checked={abnormalities.nervousSystem.yes}
          onChange={() => handleAbnormalitiesChange('nervousSystem', 'yes')}
        />
      </td>
      <td>
        <input
          type="radio"
          name="nervousSystem"
          checked={abnormalities.nervousSystem.no}
          onChange={() => handleAbnormalitiesChange('nervousSystem', 'no')}
        />
      </td>
    </tr>
  </table>
</div>

        <div>
      <label className="l1">
        Any untoward incident occurred during treatment:
      </label>
      <label>
        <input
          type="checkbox"
          name="untowardIncident"
          checked={formData.untowardIncident}
          onChange={handleInputChange}
          value="yes"
        />{' '}
        Yes
      </label>
      <label>
        <input
          type="checkbox"
          name="untowardIncident"
          checked={!formData.untowardIncident}
          onChange={handleInputChange}
          value="no"
        />{' '}
        No
      </label>
    </div>

    <div>
      <label className="l1">If Yes, describe the incident:</label><br />
      <textarea
        rows="10"
        cols="100"
        name="incidentDescription"
        value={formData.incidentDescription}
        onChange={handleInputChange}
      ></textarea>
    </div>

    <div>
      <label className="l1">Action Taken:</label><br />
      <textarea
        rows="10"
        cols="100"
        name="actionTaken"
        value={formData.actionTaken}
        onChange={handleInputChange}
      ></textarea>
    </div>

    <div>
      <label className="l1">Impression of the counselor:</label>
      <label>
        <input
          type="checkbox"
          name="impression"
          value="Denial"
          checked={formData.impression.includes('Denial')}
          onChange={handleImpressionChange}
        />{' '}
        Denial
      </label>
      <label>
        <input
          type="checkbox"
          name="impression"
          value="Mild"
          checked={formData.impression.includes('Mild')}
          onChange={handleImpressionChange}
        />{' '}
        Mild
      </label>
      <label>
        <input
          type="checkbox"
          name="impression"
          value="Moderate"
          checked={formData.impression.includes('Moderate')}
          onChange={handleImpressionChange}
        />{' '}
        Moderate
      </label>
      <label>
        <input
          type="checkbox"
          name="impression"
          value="Severe"
          checked={formData.impression.includes('Severe')}
          onChange={handleImpressionChange}
        />{' '}
        Severe
      </label>
    </div>

    <div>
      <label className="l1">Investigation:</label><br />
      <textarea
        rows="10"
        cols="100"
        name="investigation"
        value={formData.investigation}
        onChange={handleInputChange}
      ></textarea>
    </div>

    <div>
      <label className="l1">Certificate Issued(Details):</label><br />
      <textarea
        rows="10"
        cols="100"
        name="certificateDetails"
        value={formData.certificateDetails}
        onChange={handleInputChange}
      ></textarea>
    </div>

    <div id="div7">
      <p id="p">3</p>
    </div>
    <div>
    <button type="button" onClick={handleClickPrev}>Prev</button>
    <button type="submit">Submit</button>
    <button type="button" onClick={handleClickNext}>Next</button>
    </div>
  </form>
</body>
    </html>
  );
};

export default Page3;