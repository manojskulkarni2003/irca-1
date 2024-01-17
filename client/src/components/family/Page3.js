import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Page3 = () => {
  const navigate = useNavigate();
  const [childhoodProblems, setChildhoodProblems] = useState({
    runningAway: '',
    frequentFights: '',
    destructionOfProperty: '',
    stealing: '',
    scholasticBackwardness: '',
    experimentingWithDrugs: '',
    gambling: '',
    anyOther: '',
  });
  const [educationYears, setEducationYears] = useState('');
  const [achievementsInPast, setAchievementsInPast] = useState('');
  const [educationalActivities, setEducationalActivities] = useState({
    goodAcademicRecords: '',
    highAchieverInActivities: '',
  });
  const [spouseDetails, setSpouseDetails] = useState({
    name: '',
    age: '',
    religion: '',
    education: '',
    occupation: '',
    income: '',
  });
  const goToNextPage = async () => {
    try {
      // Create the data object to send to the server
      const dataToSend = {
        childhoodProblems,
        educationYears,
        achievementsInPast,
        educationalActivities,
        spouseDetails,
      };

      // Use fetch to send data to the server
      const response = await fetch('http://localhost:5000/family/page3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    
    //   // If needed, handle the response from the server
    
    } catch (error) {
      console.error('Error:', error);
    } finally {
      // Navigate to the next page
      navigate('/family/page4');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };
  const goToPrevPage = () => {
    // Perform any necessary validation or data processing before navigating
    navigate('/family/page2');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  return (
    <div className="fh_page fh_page3">
      <h2 className='fh_h2'>8. Childhood/ adolescence (before the age of 15 years)</h2>
      <table  className='fh_table'>
        <thead>
          <tr>
            <th className='fh_th'>Problems Identified</th>
            <th className='fh_th'>Present</th>
            <th className='fh_th'>Absent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='fh_td'>Running away from home</td>
            <td  className="checkbox-container fh_td">
              <input className='fh_input'  type="radio" name="attendance1" />
            </td>
            <td className="checkbox-container fh_td">
              <input className='fh_input'  type="radio" name="attendance1" />
            </td>
          </tr>
          <tr>
            <td className='fh_td'>Frequent physical fights and violence</td>
            <td className="checkbox-container fh_td">
              <input className='fh_input'  type="radio" name="attendance2" />
            </td>
            <td className="checkbox-container fh_td">
              <input className='fh_input'  type="radio" name="attendance2" />
            </td>
          </tr>
          <tr>
            <td className='fh_td'>Destruction of others' property</td>
            <td className="checkbox-container fh_td">
              <input className='fh_input'  type="radio" name="attendance3" />
            </td>
            <td className="checkbox-container fh_td">
              <input className='fh_input'  type="radio" name="attendance3" />
            </td>
          </tr>
          <tr>
            <td className='fh_td'>Stealing</td>
            <td className="checkbox-container fh_td">
              <input  className='fh_input' type="radio" name="attendance4" />
            </td>
            <td className="checkbox-container fh_td">
              <input  className='fh_input' type="radio" name="attendance4" />
            </td>
          </tr>
          <tr>
            <td className='fh_td'>Scholastic backwardness</td>
            <td className="checkbox-container fh_td">
              <input  className='fh_input' type="radio" name="attendance5" />
            </td>
            <td className="checkbox-container fh_td">
              <input  className='fh_input' type="radio" name="attendance5" />
            </td>
          </tr>
          <tr>
            <td className='fh_td'>Experimenting with drugs/alcohol</td>
            <td className="checkbox-container fh_td">
              <input className='fh_input' type="radio" name="attendance6" />
            </td>
            <td className="checkbox-container fh_td">
              <input className='fh_input' type="radio" name="attendance6" />
            </td>
          </tr>
          <tr>
            <td  className='fh_td'>Gambling</td>
            <td className="checkbox-container fh_td">
              <input className='fh_input' type="radio" name="attendance7" />
            </td>
            <td className="checkbox-container fh_td">
              <input className='fh_input' type="radio" name="attendance7" />
            </td>
          </tr>
          <tr>
            <td className='fh_td'>Any other</td>
            <td className="checkbox-container fh_td">
              <input className='fh_input' type="radio" name="attendance9" />
            </td>
            <td className="checkbox-container fh_td">
              <input   className='fh_input' type="radio" name="attendance9" />
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <div className="fh_block-head">
          <p>III. Educational history</p>
        </div>
        <label style={{ fontWeight: 'bold' }} htmlFor="yoe">
          <h2 className='fh_h2'>9. Years of education</h2>
        </label>
        <input   className='fh_input' type="number" id="yoe" placeholder="Enter here:" />
        <br />
        <label style={{ fontWeight: 'bold' }} htmlFor="Acinpast">
        <h2 className='fh_h2'>10. Achievements in the past</h2>
        </label>
        <br />
        <textarea  className='fh_textarea' placeholder="Write here"></textarea>
        <br />
        <br/>
        <table className="fh_table">
          <thead>
            <tr>
              <th className='fh_th'>Activities</th>
              <th className='fh_th'>Present</th>
              <th className='fh_th'>Absent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='fh_td' >Good Academic Records</td>
              <td className="checkbox-container fh_td">
                <input  className='fh_input' type="radio" name="attendance11" />
              </td>
              <td className="checkbox-container fh_td">
                <input  className='fh_input' type="radio" name="attendance11" />
              </td>
            </tr>
            <tr>
              <td className='fh_td'>High Achiever in Extracurricular Activities</td>
              <td className="checkbox-container fh_td">
                <input  className='fh_input' type="radio" name="attendance12" />
              </td>
              <td className="checkbox-container fh_td">
                <input  className='fh_input' type="radio" name="attendance12" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="fh_block-head">
        <p>IV. Marital history</p>
      </div>
      <span>
        <p style={{ fontWeight: 'bold', color: 'black' }}>
          <h2 className='fh_h2'>11. Details regarding spouse:</h2>
        </p>
      </span>
      <table className='fh_table'>
        <tbody>
          <tr>
            <td className=" fh_td  fh_label">Name:</td>
            <td className=" fh_td  fh_input">
              <input  className='fh_input' type="text" id="spouseName" name="spouseName" />
            </td>
          </tr>
          <tr>
            <td className=" fh_td  fh_label">Age:</td>
            <td className=" fh_td  fh_input">
              <input  className='fh_input' type="text" id="spouseAge" name="spouseAge" />
            </td>
          </tr>
          <tr>
            <td className=" fh_td  fh_label">Religion/Community:</td>
            <td className=" fh_td  fh_input">
              <input  className='fh_input' type="text" id="spouseReligion" name="spouseReligion" />
            </td>
          </tr>
          <tr>
            <td className="fh_label fh_td">Education:</td>
            <td className="fh_input fh_td" >
              <input  className='fh_input'  type="text" id="spouseEducation" name="spouseEducation" />
            </td>
          </tr>
          <tr>
            <td className="fh_label fh_td">Occupation:</td>
            <td className="fh_input fh_td">
              <input className='fh_input'  
                type="text"
                id="spouseOccupation"
                name="spouseOccupation"
              />
            </td>
          </tr>
          <tr>
            <td className="fh_label fh_td">Income per Month:</td>
            <td className="fh_input fh_td">
              <input  className='fh_input'   type="text" id="spouseIncome" name="spouseIncome" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="fh_endbtn">
        <button className="fh_prev-btn" onClick={goToPrevPage}>
          &laquo;  Prev
        </button>
        <button className="fh_next-btn" onClick={goToNextPage}>
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default Page3;
