import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdjustmentPatterns = () => {
  const [extraMarital, setExtraMarital] = useState('');
  const [highRiskActivity, setHighRiskActivity] = useState('');
  const [HIV, setHIV] = useState('');
  const [sexualProblem, setSexualProblem] = useState('');
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [showDetailBlock4, setShowDetailBlock4] = useState(false);
  const navigate = useNavigate();


  const handleRadioChange4 = (value) => {
    setSexualProblem(value);
    setShowDetailBlock4(value === 'present');
  };

  const showDetails = () => {
    // Implement your logic here if needed
  };

  const hideDetails = () => {
    // Implement your logic here if needed
  };

  const showDetails2 = () => {
    // Implement your logic here if needed
  };

  const hideDetails2 = () => {
    // Implement your logic here if needed
  };

  const showDetails3 = () => {
    // Implement your logic here if needed
  };

  const hideDetails3 = () => {
    // Implement your logic here if needed
  };

  const showDetails4 = () => {
    // Implement your logic here if needed
  };

  const hideDetails4 = () => {
    // Implement your logic here if needed
  };

  const handleRadioChange = (value) => {
    setExtraMarital(value);
    setDetailsVisible(value === 'present');
  };

  const [detailBlockVisible, setDetailBlockVisible] = useState(false);

  const handleRadioChange1 = (value) => {
    setHighRiskActivity(value);
    setDetailBlockVisible(value === 'present');
  };

  const [isDetailBlockVisible, setIsDetailBlockVisible] = useState(false);

  const handleRadioChange2 = (value) => {
    setHIV(value);
    setIsDetailBlockVisible(value === 'present');
  };

  const goToPrevPage = () => {
    navigate('/family/page4');
    window.scrollTo({ top: 0, behavior:'instant' });
    // You can add additional logic here, such as saving form data, validation, etc.
  };
  const onSubmit = async () => {
    try {
      // Gather the data from the form
      const formData = {
        extraMarital,
        highRiskActivity,
        HIV,
        sexualProblem,
        // Include other form fields accordingly
      };

      // Make a POST request to the server
      const response = await fetch('http://localhost:4200/family/page5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // If needed, handle the response from the server

      // You can perform additional actions after the form submission if necessary

      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      // Handle errors as needed
    }
  };

  return (
    <div className="page page5">
      {/* Adjustment Patterns */}
      <div >
        <div className="adj_patterns">
          <h2>20. Adjustment patterns</h2>
          <table>
            <thead>
              <tr>
                <th>Relationship with Family Members</th>
                <th>Parents</th>
                <th>Siblings</th>
                <th>Spouse</th>
                <th>Children</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>No Family</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Disowned by Family/Mutual Feelings</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Usually Friendly Minor Conflicts</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Mixed or indifferent feelings</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Supportive</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Not Applicable</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className="family_damage">
          <h2>21. Family Damage as Seen by the Counselors</h2>
          <div class="radio-group">
            <input type="radio" name="familyDamage" value="mild" /> Mild
            <input type="radio" name="familyDamage" value="moderate" /> Moderate
            <input type="radio" name="familyDamage" value="severe" /> Severe
          </div>
        </div>
      </div>
      <br />

      {/* Sexual history */}
      <div className="block-head">
        <p>V. Sexual history</p>
      </div>

      {/* Record Extra-Marital Experiences */}
      <div className="sexual_history">
        <h2>22. Record Extra-Marital Experiences</h2>
        <form id="extraMaritalForm">
          <label style={{ display: 'inline' }}>
            <input type="radio" name="extraMarital" value="present" onChange={() => handleRadioChange('present')}
            /> Present
          </label>
          <label style={{ display: 'inline', marginLeft: '10px' }}>
            <input type="radio" name="extraMarital" value="absent" onChange={() => handleRadioChange('absent')} /> Absent
          </label>
        </form>
        {detailsVisible && (
        <div id="detailBlock">
          <table>
            <tbody>
              <tr>
                <th>Description</th>
                <th>Details</th>
              </tr>
              <tr>
                <td>Age of Partner</td>
                <td><input type="text" id="ageOfPartner" /></td>
              </tr>
              <tr>
                <td>Is it a Sustained Relationship?</td>
                <td><input type="text" id="sustainedRelationship" /></td>
              </tr>
              <tr>
                <td>For How Many Years Have You Known Each Other?</td>
                <td><input type="text" id="yearsKnown" /></td>
              </tr>
              <tr>
                <td>What is the living arrangement?</td>
                <td><input type="text" id="livingArrangement" /></td>
              </tr>
              <tr>
                <td>Any children?</td>
                <td><input type="text" id="anyChildren" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      </div>

      {/* High Risk Sexual Activities */}
      <h2>23. Have you been involved in any high-risk sexual activities?</h2>
      <form id="highRiskActivityForm">
        <label style={{ display: 'inline' }}>
          <input
            type="radio"
            name="highRiskActivity"
            value="present"
            onChange={() => handleRadioChange1('present')}
          />
          Present
        </label>
        <label style={{ display: 'inline', marginLeft: '10px' }}>
          <input
            type="radio"
            name="highRiskActivity"
            value="absent"
            onChange={() => handleRadioChange1('absent')}
          />
          Absent
        </label>
      </form>

      {detailBlockVisible && (
        <div id="detailBlock2">
          <table>
            <tbody>
              <tr>
                <td>
                  Sex with commercial sex workers <br /> if yes, did you use condoms?
                </td>
                <td><input type="radio" name="commercial" />Always</td>
                <td><input type="radio" name="commercial" />Sometimes</td>
                <td><input type="radio" name="commercial" />Never</td>
              </tr>
              <tr>
                <td>
                  Sex with casual acquaintance <br /> if yes, did you use condoms?
                </td>
                <td><input type="radio" name="work" />Always</td>
                <td><input type="radio" name="work" />Sometimes</td>
                <td><input type="radio" name="work" />Never</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* HIV Test */}
      <h2>24. Have you been tested for HIV?</h2>
      <form id="highRiskActivityForm">
        <label style={{ display: 'inline' }}>
          <input
            type="radio"
            name="HIV"
            value="present"
            onChange={() => handleRadioChange2('present')}
          />
          Present
        </label>
        <label style={{ display: 'inline', marginLeft: '10px' }}>
          <input
            type="radio"
            name="HIV"
            value="absent"
            onChange={() => handleRadioChange2('absent')}
          />
          Absent
        </label>
      </form>

      {isDetailBlockVisible && (
        <div id="detailBlock3">
          <table>
            <tbody>
              <tr>
                <td><input type="radio" name="HIVStatus" />Positive</td>
                <td><input type="radio" name="HIVStatus" />Negative</td>
                <td><input type="radio" name="HIVStatus" />Not willing to reveal</td>
                <td><input type="radio" name="HIVStatus" />Not collected reports</td>
                <td><input type="radio" name="HIVStatus" />Not applicable</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Sexual Problems */}
      <h2>25. At present, do you have any sexual problems?</h2>
      <form id="sexualProblemForm">
        <label style={{ display: 'inline' }}>
          <input
            type="radio"
            name="sexual-problem"
            value="present"
            onChange={() => handleRadioChange4('present')}
          />
          Present
        </label>
        <label style={{ display: 'inline', marginLeft: '10px' }}>
          <input
            type="radio"
            name="sexual-problem"
            value="absent"
            onChange={() => handleRadioChange4('absent')}
          />
          Absent
        </label>
      </form>

      {showDetailBlock4 && (
        <div id="detailBlock4">
          <table>
            <tbody>
              <tr>
                <th>Problem</th>
                <th>Yes</th>
                <th>No</th>
              </tr>
              <tr>
                <td>Reduced libido</td>
                <td><input type="radio" name="sex-prob" /></td>
                <td><input type="radio" name="sex-prob" /></td>
              </tr>
              <tr>
                <td>Impotency</td>
                <td><input type="radio" name="sex-prob2" /></td>
                <td><input type="radio" name="sex-prob2" /></td>
              </tr>
              <tr>
                <td>Excessive sexual urge</td>
                <td><input type="radio" name="sex-prob3" /></td>
                <td><input type="radio" name="sex-prob3" /></td>
              </tr>
              <tr>
                <td>Complete abstinence</td>
                <td><input type="radio" name="sex-prob4" /></td>
                <td><input type="radio" name="sex-prob4" /></td>
              </tr>
              <tr>
                <td>Any other</td>
                <td><input type="radio" name="sex-prob5" /></td>
                <td><input type="radio" name="sex-prob5" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
       <div className="endbtn">
        <button className="prev-btn" onClick={goToPrevPage}>
        &laquo;  Prev 
        </button>
        <button className="submit-btn" onClick={onSubmit}>
            Submit
          </button>
      </div>
    </div>
    
  );
};

export default AdjustmentPatterns;
