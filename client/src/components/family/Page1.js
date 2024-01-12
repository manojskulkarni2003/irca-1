import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Page.css'

const Page1 = () => {
    const navigate = useNavigate();
  const [familyHistoryRows, setFamilyHistoryRows] = useState([
    {
      name: '',
      relation: '',
      age: '',
      income: '',
      education: '',
      occupation: '',
      intoxicants: '',
    },
  ]);

  const deleteRow = (index) => {
    setFamilyHistoryRows((prevRows) => prevRows.filter((row, i) => i !== index));
  };

  const addRow = () => {
    setFamilyHistoryRows((prevRows) => [
      ...prevRows,
      {
        name: '',
        relation: '',
        age: '',
        income: '',
        education: '',
        occupation: '',
        intoxicants: '',
      },
    ]);
  };

  const [fatherDeathReason, setFatherDeathReason] = useState('');
  const [motherDeathReason, setMotherDeathReason] = useState('');
  const [fatherDeathAge, setFatherDeathAge] = useState('');
  const [motherDeathAge, setMotherDeathAge] = useState('');

  const [motherTongue, setMotherTongue] = useState('');
  const [languagesKnown, setLanguagesKnown] = useState('');

  const [denialStatus, setDenialStatus] = useState('');
  const goToNextPage = async () => {
    try {
      const dataToSend = {
        familyHistoryRows,
        fatherDeathReason,
        motherDeathReason,
        fatherDeathAge,
        motherDeathAge,
        motherTongue,
        languagesKnown,
        denialStatus,
      };
    
      console.log('Data to send:', dataToSend);
    
      const response = await fetch('http://localhost:4200/family/page1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
    
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    
      // If needed, handle the response from the server
    
    } catch (error) {
      console.error('Error:', error);
    } finally {
      // Navigate to the next page
      navigate('/family/page2');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };
  
  
  return (
    <div className="page page1 active">
      <div className="mainhead">
        <h1>Integrated Rehabilitation Centre for Addicts(IRCA) - Family history</h1>
      </div>
      <div className="family_history">
        <div className="block-head">
          <p>I. Family history</p>
        </div>
        <h2>1. Details regarding parents and siblings (provide relevant information):</h2>
        <table id="myTable">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Relation</th>
              <th>Age</th>
              <th>Income</th>
              <th>Education</th>
              <th>Occupation</th>
              <th>Use of Intoxicants</th>
            </tr>
          </thead>
          <tbody>
            {familyHistoryRows.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><input type="text" name="name" /></td>
                <td><input type="text" name="relation" /></td>
                <td><input type="text" name="age" /></td>
                <td><input type="text" name="income" /></td>
                <td><input type="text" name="education" /></td>
                <td><input type="text" name="occupation" /></td>
                <td><input type="text" name="intoxicants" /></td>
                <td>
                <button
                  className="delete-row-btn"
                  onClick={() => deleteRow(index)}
                >
                  Delete
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="add-row-btn" onClick={addRow}>Add Row</button>

        <div className="container">
          <div className="form-container">
            <table>
              <tr>
                <th colspan="2">In case of death of parents</th>
              </tr>
              <tr>
                <td>Father:</td>
                <td>Mother:</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    id="father"
                    placeholder="Reason for father's death"
                    value={fatherDeathReason}
                    onChange={(e) => setFatherDeathReason(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="mother"
                    placeholder="Reason for mother's death"
                    value={motherDeathReason}
                    onChange={(e) => setMotherDeathReason(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <th colspan="2">How old were you at that time?</th>
              </tr>
              <tr>
                <td>Father's death:</td>
                <td>Mother's death:</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="number"
                    id="f_death"
                    min="1"
                    placeholder="Enter age at father's death"
                    value={fatherDeathAge}
                    onChange={(e) => setFatherDeathAge(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    id="m_death"
                    min="1"
                    placeholder="Enter age at mother's death"
                    value={motherDeathAge}
                    onChange={(e) => setMotherDeathAge(e.target.value)}
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div className="form-container1">
          <div className="form-section1">
            <label htmlFor="motherTongue" style={{ fontWeight: 'bold' }}>Mother Tongue:</label>
            <input
              type="text"
              id="motherTongue"
              name="motherTongue"
              required
              value={motherTongue}
              onChange={(e) => setMotherTongue(e.target.value)}
            />
          </div>

          <div className="form-section1">
            <label htmlFor="languagesKnown" style={{ fontWeight: 'bold' }}>Languages Known:</label>
            <input
              type="text"
              id="languagesKnown"
              name="languagesKnown"
              required
              value={languagesKnown}
              onChange={(e) => setLanguagesKnown(e.target.value)}
            />
          </div>
        </div>
        <h2>2.Motivation level during admission:</h2>

        <form>
          <label style={{ display: 'inline' }}>
            <input
              type="radio"
              name="denialStatus"
              value="Present"
              checked={denialStatus === 'Present'}
              onChange={() => setDenialStatus('Present')}
            />
            Present
          </label>

          <label style={{ display: 'inline' }}>
            <input
              type="radio"
              name="denialStatus"
              value="Absent"
              checked={denialStatus === 'Absent'}
              onChange={() => setDenialStatus('Absent')}
            />
            Absent
          </label>
        </form>
        <div className="endbtn">
        <button className="next-btn" onClick={goToNextPage}>
          Next &raquo;
        </button>
      </div>
        {/* <!-- Navigation buttons --> */}
      {/* <div class="endbtn">
          <button class="next-btn" onclick="navigatePage('page2')">Next &raquo;</button>
      </div>
    </div> */}
      </div>
    </div>
  );
};

export default Page1;
