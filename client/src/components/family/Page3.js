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
      const response = await fetch('http://localhost:4200/family/page3', {
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
    <div className="page page3">
      <h2>8. Childhood/ adolescence (before the age of 15 years)</h2>
      <table id="myTable">
        <thead>
          <tr>
            <th>Problems Identified</th>
            <th>Present</th>
            <th>Absent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Running away from home</td>
            <td className="checkbox-container">
              <input type="radio" name="attendance1" />
            </td>
            <td className="checkbox-container">
              <input type="radio" name="attendance1" />
            </td>
          </tr>
          <tr>
            <td>Frequent physical fights and violence</td>
            <td className="checkbox-container">
              <input type="radio" name="attendance2" />
            </td>
            <td className="checkbox-container">
              <input type="radio" name="attendance2" />
            </td>
          </tr>
          <tr>
            <td>Destruction of others' property</td>
            <td className="checkbox-container">
              <input type="radio" name="attendance3" />
            </td>
            <td className="checkbox-container">
              <input type="radio" name="attendance3" />
            </td>
          </tr>
          <tr>
            <td>Stealing</td>
            <td className="checkbox-container">
              <input type="radio" name="attendance4" />
            </td>
            <td className="checkbox-container">
              <input type="radio" name="attendance4" />
            </td>
          </tr>
          <tr>
            <td>Scholastic backwardness</td>
            <td className="checkbox-container">
              <input type="radio" name="attendance5" />
            </td>
            <td className="checkbox-container">
              <input type="radio" name="attendance5" />
            </td>
          </tr>
          <tr>
            <td>Experimenting with drugs/alcohol</td>
            <td className="checkbox-container">
              <input type="radio" name="attendance6" />
            </td>
            <td className="checkbox-container">
              <input type="radio" name="attendance6" />
            </td>
          </tr>
          <tr>
            <td>Gambling</td>
            <td className="checkbox-container">
              <input type="radio" name="attendance7" />
            </td>
            <td className="checkbox-container">
              <input type="radio" name="attendance7" />
            </td>
          </tr>
          <tr>
            <td>Any other</td>
            <td className="checkbox-container">
              <input type="radio" name="attendance9" />
            </td>
            <td className="checkbox-container">
              <input type="radio" name="attendance9" />
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <div className="block-head">
          <p>III. Educational history</p>
        </div>
        <label style={{ fontWeight: 'bold' }} htmlFor="yoe">
          9. Years of education
        </label>
        <input type="number" id="yoe" placeholder="Enter here:" />
        <br />
        <label style={{ fontWeight: 'bold' }} htmlFor="Acinpast">
          10. Achievements in the past
        </label>
        <br />
        <textarea placeholder="Write here"></textarea>
        <br />

        <table id="myTable2">
          <thead>
            <tr>
              <th>Activities</th>
              <th>Present</th>
              <th>Absent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Good Academic Records</td>
              <td className="checkbox-container">
                <input type="radio" name="attendance11" />
              </td>
              <td className="checkbox-container">
                <input type="radio" name="attendance11" />
              </td>
            </tr>
            <tr>
              <td>High Achiever in Extracurricular Activities</td>
              <td className="checkbox-container">
                <input type="radio" name="attendance12" />
              </td>
              <td className="checkbox-container">
                <input type="radio" name="attendance12" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="block-head">
        <p>IV. Marital history</p>
      </div>
      <span>
        <p style={{ fontWeight: 'bold', color: 'black' }}>
          11. Details regarding spouse:
        </p>
      </span>
      <table>
        <tbody>
          <tr>
            <td className="label">Name:</td>
            <td className="input">
              <input type="text" id="spouseName" name="spouseName" />
            </td>
          </tr>
          <tr>
            <td className="label">Age:</td>
            <td className="input">
              <input type="text" id="spouseAge" name="spouseAge" />
            </td>
          </tr>
          <tr>
            <td className="label">Religion/Community:</td>
            <td className="input">
              <input type="text" id="spouseReligion" name="spouseReligion" />
            </td>
          </tr>
          <tr>
            <td className="label">Education:</td>
            <td className="input">
              <input type="text" id="spouseEducation" name="spouseEducation" />
            </td>
          </tr>
          <tr>
            <td className="label">Occupation:</td>
            <td className="input">
              <input
                type="text"
                id="spouseOccupation"
                name="spouseOccupation"
              />
            </td>
          </tr>
          <tr>
            <td className="label">Income per Month:</td>
            <td className="input">
              <input type="text" id="spouseIncome" name="spouseIncome" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="endbtn">
        <button className="prev-btn" onClick={goToPrevPage}>
          &laquo;  Prev
        </button>
        <button className="next-btn" onClick={goToNextPage}>
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default Page3;
