import React from 'react';
import './Page.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Page2 = () => {
  const [causativeFactors, setCausativeFactors] = useState('');
  const [experienceOfTolerance, setExperienceOfTolerance] = useState('');
  const [behavioralChanges, setBehavioralChanges] = useState({
    violent: false,
    moreTalkative: false,
    moreFunny: false,
    angry: false,
    depressed: false,
    sleeping: false,
    grandiosity: false,
  });
  const [childhoodHistory, setChildhoodHistory] = useState('');
  const [situationsBefore15, setSituationsBefore15] = useState({
    poverty: '',
    parental_loss: '',
    marital_affair: '',
    parenting: '',
    vioelnce: '',
    sexual_abuse: '',
    none: '',
    other: '',
  });
    const navigate = useNavigate();

    const goToNextPage = async () => {
      try {
        // Create the data object to send to the server
        const dataToSend = {
          causativeFactors,
          experienceOfTolerance,
          behavioralChanges,
          childhoodHistory,
          situationsBefore15,
        };
  
        // Use fetch to send data to the server
        const response = await fetch('http://localhost:4200/family/page2', {
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
        navigate('/family/page3');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

      const goToPrevPage = () => {
        // Perform any necessary validation or data processing before navigating
        navigate('/family/page1');
        window.scrollTo({ top: 0, behavior: 'instant' });
      };
    
  return (
    <div className="page page2">
      <h2>3. Causative factors:</h2>
      <textarea placeholder="Enter causative factors here"></textarea>

      <h2>4. Experience of Black out:</h2>
      <label style={{ fontWeight: 'bold' }}>Experience of Tolerance:</label>
      <textarea placeholder="Enter experience of tolerance here"></textarea>

      <h2>5. Behavioural changes after consuming Alcohol/Drugs</h2>
      <div className="checkbox-group">
        <label>
          <input type="checkbox" name="violent" />
          <span className="custom-checkbox"></span>
          Violent
        </label>
        <label>
          <input type="checkbox" name="moreTalkative" />
          <span className="custom-checkbox"></span>
          More talkative
        </label>
        <label>
          <input type="checkbox" name="moreFunny" />
          <span className="custom-checkbox"></span>
          Funny
        </label>
        <label>
          <input type="checkbox" name="angry" />
          <span className="custom-checkbox"></span>
          Angry
        </label>
        <label>
          <input type="checkbox" name="depressed" />
          <span className="custom-checkbox"></span>
          Depressed
        </label>
        <label>
          <input type="checkbox" name="sleeping" />
          <span className="custom-checkbox"></span>
          Sleeping
        </label>
        <label>
          <input type="checkbox" name="grandiosity" />
          <span className="custom-checkbox"></span>
          Grandiosity
        </label>
      </div>
      <br />
      <br />
      <div className="block-head">
        <p>II. Childhood and adolescence history</p>
      </div>
      <h2>6. How would you describe your childhood/teenage years?</h2>
      <textarea placeholder="Describe your childhood/teenage years here"></textarea>

      <h2>7. Did you experience the following before the age of 15 years?</h2>
      <table>
        <thead>
          <tr>
            <th>Situations</th>
            <th>Present</th>
            <th>Absent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Poverty/severe debts of parents</td>
            <td><input type="radio" name="poverty" value="present" /></td>
            <td><input type="radio" name="poverty" value="absent" /></td>
          </tr>
          <tr>
            <td>Early parental loss</td>
            <td><input type="radio" name="parental_loss" value="present" /></td>
            <td><input type="radio" name="parental_loss" value="absent" /></td>
          </tr>
          <tr>
            <td>Extra-marital affairs of parents</td>
            <td>
              <input type="radio" name="marital_affair" value="present" />
            </td>
            <td><input type="radio" name="marital_affair" value="absent" /></td>
          </tr>
          <tr>
            <td>Broken home/single parenting</td>
            <td><input type="radio" name="parenting" value="present" /></td>
            <td><input type="radio" name="parenting" value="absent" /></td>
          </tr>
          <tr>
            <td>Violence</td>
            <td><input type="radio" name="vioelnce" value="present" /></td>
            <td><input type="radio" name="vioelnce" value="absent" /></td>
          </tr>
          <tr>
            <td>Sexual abuse by others</td>
            <td><input type="radio" name="sexual_abuse" value="present" /></td>
            <td><input type="radio" name="sexual_abuse" value="absent" /></td>
          </tr>
          <tr>
            <td>None</td>
            <td><input type="radio" name="none" value="present" /></td>
            <td><input type="radio" name="none" value="absent" /></td>
          </tr>
          <tr>
            <td>Any other</td>
            <td><input type="radio" name="other" value="present" /></td>
            <td><input type="radio" name="other" value="absent" /></td>
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

export default Page2;
