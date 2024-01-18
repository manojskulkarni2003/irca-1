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
      // Perform any necessary validation or data processing before navigating
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
  
      const response = await fetch('http://localhost:5000/family/page1', {
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
      // Navigate to the next page
      navigate('/family/page2');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  return (
    <div className="page page1 active">
      <div className="fh_mainhead">
      </div>
      <div className="fh_family_history">
        <div className="fh_block-head">
          <p>I. Family history</p>
        </div>
        <h2 className='fh_h2'>2. Details regarding parents and siblings (provide relevant information):</h2>
        <table id="fh_myTable">
          <thead>
            <tr>
              <th className='fh_th'></th>
              <th className='fh_th'>Name</th>
              <th className='fh_th'>Relation</th>
              <th className='fh_th'>Age</th>
              <th className='fh_th'>Income</th>
              <th className='fh_th'>Education</th>
              <th className='fh_th'>Occupation</th>
              <th className='fh_th'>Use of Intoxicants</th>
            </tr>
          </thead>
          <tbody>
            {familyHistoryRows.map((row, index) => (
              <tr key={index}>
                <td className='fh_td'>{index + 1}</td>
                <td className='fh_td'><input className='fh_input'  type="text" name="name" /></td>
                <td className='fh_td'><input className='fh_input'  type="text" name="relation" /></td>
                <td className='fh_td'><input className='fh_input'  type="text" name="age" /></td>
                <td className='fh_td'><input className='fh_input'  type="text" name="income" /></td>
                <td className='fh_td'><input className='fh_input'  type="text" name="education" /></td>
                <td className='fh_td'><input className='fh_input'  type="text" name="occupation" /></td>
                <td className='fh_td'><input className='fh_input'  type="text" name="intoxicants" /></td>
                <td className='fh_td'>
                <button
                  className="fh_delete-row-btn"
                  onClick={() => deleteRow(index)}
                >
                  Delete
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="fh_add-row-btn" onClick={addRow}>Add Row</button>

        <div className="fh_container">
          <div className="fh_form-container">
            <table className='fh_table'>
              <tr>
                <th  className='fh_th' colspan="2">In case of death of parents</th>
              </tr>
              <tr>
                <td className='fh_td' >Father:</td>
                <td className='fh_td' >Mother:</td>
              </tr>
              <tr>
                <td className='fh_td'>
                  <input
                    className='fh_input'
                    type="text"
                    id="father"
                    placeholder="Reason for father's death"
                    value={fatherDeathReason}
                    onChange={(e) => setFatherDeathReason(e.target.value)}
                  />
                </td>
                <td className='fh_td'>
                  <input
                    className='fh_input'
                    type="text"
                    id="mother"
                    placeholder="Reason for mother's death"
                    value={motherDeathReason}
                    onChange={(e) => setMotherDeathReason(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <th  className='fh_th'  colspan="2">How old were you at that time?</th>
              </tr>
              <tr>
                <td className='fh_td' >Father's death:</td>
                <td className='fh_td' >Mother's death:</td>
              </tr>
              <tr>
                <td className='fh_td'>
                  <input
                    className='fh_input'
                    type="number"
                    id="f_death"
                    min="1"
                    placeholder="Enter age at father's death"
                    value={fatherDeathAge}
                    onChange={(e) => setFatherDeathAge(e.target.value)}
                  />
                </td>
                <td className='fh_td'>
                  <input
                    className='fh_input'
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

        <div className="fh_form-container1">
          <div className="fh_form-section1">
            <label htmlFor="motherTongue" style={{ fontWeight: 'bold' }}>Mother Tongue:</label>
            <input
              className='fh_input'
              type="text"
              id="motherTongue"
              name="motherTongue"
              required
              value={motherTongue}
              onChange={(e) => setMotherTongue(e.target.value)}
            />
          </div>

          <div className="fh_form-section1">
            <label htmlFor="languagesKnown" style={{ fontWeight: 'bold' }}>Languages Known:</label>
            <input
              className='fh_input'
              type="text"
              id="languagesKnown"
              name="languagesKnown"
              required
              value={languagesKnown}
              onChange={(e) => setLanguagesKnown(e.target.value)}
            />
          </div>
        </div>
        <h2 className='fh_h2'>2.Motivation level during admission:</h2>

        <form className='fh_form'>
          <label style={{ display: 'inline' }}>
            <input
              className='fh_input'
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
              className='fh_input'
              type="radio"
              name="denialStatus"
              value="Absent"
              checked={denialStatus === 'Absent'}
              onChange={() => setDenialStatus('Absent')}
            />
            Absent
          </label>
        </form>
        <div className="fh_endbtn">
        <div class="page-number">8</div>
        <button className="fh_next-btn" onClick={goToNextPage}>
          Next &raquo;
        </button>
      </div>
      </div>
    </div>
  );
};

export default Page1;
