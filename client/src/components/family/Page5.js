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
      // const response = await fetch('http://localhost:4200/family/page5', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (!response.ok) {
      //   throw new Error(`HTTP error! Status: ${response.status}`);
      // }

      // If needed, handle the response from the server

      // You can perform additional actions after the form submission if necessary

      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      // Handle errors as needed
    }
  };

  return (
    <div className="fh_page fh_page5">
      {/* Adjustment Patterns */}
      <div >
        <div className="adj_patterns">
          <h2 className='fh_h2'>20. Adjustment patterns</h2>
          <table className='fh_table'>
            <thead>
              <tr>
                <th className='fh_th'>Relationship with Family Members</th>
                <th className='fh_th'>Parents</th>
                <th className='fh_th'>Siblings</th>
                <th className='fh_th'>Spouse</th>
                <th className='fh_th'>Children</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='fh_td'>No Family</td>
                <td className='fh_td'><input  className='fh_input' type="text" /></td>
                <td className='fh_td'><input  className='fh_input' type="text" /></td>
                <td className='fh_td'><input  className='fh_input' type="text" /></td>
                <td className='fh_td'><input  className='fh_input' type="text" /></td>
              </tr>
              <tr>
                <td className='fh_td' >Disowned by Family/Mutual Feelings</td>
                <td className='fh_td' ><input  className='fh_input' type="text" /></td>
                <td className='fh_td' ><input  className='fh_input' type="text" /></td>
                <td className='fh_td' ><input  className='fh_input' type="text" /></td>
                <td className='fh_td' ><input  className='fh_input' type="text" /></td>
              </tr>
              <tr>
                <td className='fh_td' >Usually Friendly Minor Conflicts</td>
                <td className='fh_td' ><input  className='fh_input' type="text" /></td>
                <td className='fh_td' ><input  className='fh_input' type="text" /></td>
                <td className='fh_td' ><input  className='fh_input' type="text" /></td>
                <td className='fh_td' ><input  className='fh_input' type="text" /></td>
              </tr>
              <tr>
                <td className='fh_td' >Mixed or indifferent feelings</td>
                <td className='fh_td' ><input  className='fh_input' type="text" /></td>
                <td className='fh_td' ><input  className='fh_input' type="text" /></td>
                <td className='fh_td' ><input  className='fh_input' type="text" /></td>
                <td className='fh_td' ><input  className='fh_input' type="text" /></td>
              </tr>
              <tr>
                <td className='fh_td' >Supportive</td>
                <td className='fh_td' ><input  className='fh_input' type="text" /></td>
                <td className='fh_td' ><input  className='fh_input' type="text" /></td>
                <td className='fh_td' ><input  className='fh_input' type="text" /></td>
                <td className='fh_td' ><input  className='fh_input' type="text" /></td>
              </tr>
              <tr  >
                <td className='fh_td' >Not Applicable</td>
                <td className='fh_td' ><input  className='fh_input' type="text" /></td>
                <td className='fh_td' ><input  className='fh_input' type="text" /></td>
                <td className='fh_td' ><input  className='fh_input' type="text" /></td>
                <td className='fh_td' ><input  className='fh_input' type="text" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className="fh_family_damage">
          <h2 className='fh_h2'>21. Family Damage as Seen by the Counselors</h2>
          <div class="fh_radio-group"> 
            <input  className='fh_input' type="radio" name="familyDamage" value="mild" />     Mild 
            <input  className='fh_input' type="radio" name="familyDamage" value="moderate" />  Moderate
            <input  className='fh_input' type="radio" name="familyDamage" value="severe" />  Severe
          </div>
        </div>
      </div>
      <br />

      {/* Sexual history */} 
      <div className="fh_block-head">
        <p>V. Sexual history</p>
      </div>

      {/* Record Extra-Marital Experiences */}
      <div className="fh_sexual_history">
        <h2 className='fh_h2'> 22. Record Extra-Marital Experiences</h2>
        <form id="extraMaritalForm">
          <label style={{ display: 'inline' }}>
            <input  className='fh_input' type="radio" name="extraMarital" value="present" onChange={() => handleRadioChange('present')}
            /> Present
          </label>
          <label style={{ display: 'inline', marginLeft: '10px' }}>
            <input  className='fh_input' type="radio" name="extraMarital" value="absent" onChange={() => handleRadioChange('absent')} /> Absent
          </label>  
        </form>
        {detailsVisible && (
        <div id="detailBlock">
          <table className='fh_table'>
            <tbody>
              <tr>
                <th className='fh_th'>Description</th>
                <th className='fh_th'>Details</th>
              </tr>
              <tr>
                <td className='fh_td' >Age of Partner</td>
                <td className='fh_td' ><input type="text" id="ageOfPartner" /></td>
              </tr>
              <tr>
                <td className='fh_td' >Is it a Sustained Relationship?</td>
                <td className='fh_td' ><input type="text" id="sustainedRelationship" /></td>
              </tr>
              <tr>
                <td className='fh_td' >For How Many Years Have You Known Each Other?</td>
                <td className='fh_td' ><input type="text" id="yearsKnown" /></td>
              </tr>
              <tr>
                <td className='fh_td' >What is the living arrangement?</td>
                <td className='fh_td' ><input type="text" id="livingArrangement" /></td>
              </tr>
              <tr>
                <td className='fh_td'>Any children?</td>
                <td className='fh_td'><input type="text" id="anyChildren" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      </div>

      {/* High Risk Sexual Activities */}
      <h2 className='fh_h2'>23. Have you been involved in any high-risk sexual activities?</h2>
      <form id="highRiskActivityForm">
        <label style={{ display: 'inline' }}>
          <input
            className='fh_input'
            type="radio"
            name="highRiskActivity"
            value="present"
            onChange={() => handleRadioChange1('present')}
          />
          Present
        </label>
        <label style={{ display: 'inline', marginLeft: '10px' }}>
          <input
          className='fh_input'
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
          <table className='fh_table'>
            <tbody>
              <tr>
                <td className='fh_td'>
                  Sex with commercial sex workers <br /> if yes, did you use condoms?
                </td>
                <td className='fh_td' ><input className='fh_input'  type="radio" name="commercial" />Always</td>
                <td className='fh_td' ><input className='fh_input'  type="radio" name="commercial" />Sometimes</td>
                <td className='fh_td' ><input className='fh_input'  type="radio" name="commercial" />Never</td>
              </tr>
              <tr>
                <td className='fh_td'>
                  Sex with casual acquaintance <br /> if yes, did you use condoms?
                </td>
                <td className='fh_td'><input className='fh_input' type="radio" name="work" />Always</td>
                <td className='fh_td'><input className='fh_input' type="radio" name="work" />Sometimes</td>
                <td className='fh_td'><input className='fh_input' type="radio" name="work" />Never</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* HIV Test */}
      <h2 className='fh_h2'>24. Have you been tested for HIV?</h2>
      <form id="highRiskActivityForm">
        <label style={{ display: 'inline' }}>
          <input
            className='fh_input'
            type="radio"
            name="HIV"
            value="present"
            onChange={() => handleRadioChange2('present')}
          />
          Present
        </label>
        <label style={{ display: 'inline', marginLeft: '10px' }}>
          <input
            className='fh_input'
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
          <table className='fh_table'>
            <tbody>
              <tr>
                <td className='fh_td'><input  className='fh_input' type="radio" name="HIVStatus" />Positive</td>
                <td className='fh_td'><input  className='fh_input' type="radio" name="HIVStatus" />Negative</td>
                <td className='fh_td'><input  className='fh_input' type="radio" name="HIVStatus" />Not willing to reveal</td>
                <td className='fh_td'><input  className='fh_input' type="radio" name="HIVStatus" />Not collected reports</td>
                <td className='fh_td'><input  className='fh_input' type="radio" name="HIVStatus" />Not applicable</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Sexual Problems */}
      <h2 className='fh_h2'>25. At present, do you have any sexual problems?</h2>
      <form id="sexualProblemForm">
        <label style={{ display: 'inline' }}>
          <input
           className='fh_input'
            type="radio"
            name="sexual-problem"
            value="present"
            onChange={() => handleRadioChange4('present')}
          />
          Present
        </label>
        <label style={{ display: 'inline', marginLeft: '10px' }}>
          <input
           className='fh_input'
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
          <table className='fh_table'>
            <tbody>
              <tr>
                <th className='fh_th' >Problem</th>
                <th className='fh_th' >Yes</th>
                <th className='fh_th' >No</th>
              </tr>
              <tr>
                <td className='fh_td'>Reduced libido</td>
                <td className='fh_td' ><input   className='fh_input' type="radio" name="sex-prob" /></td>
                <td className='fh_td' ><input   className='fh_input' type="radio" name="sex-prob" /></td>
              </tr>
              <tr>
                <td  className='fh_td' >Impotency</td>
                <td  className='fh_td'><input  className='fh_input' type="radio" name="sex-prob2" /></td>
                <td  className='fh_td'><input  className='fh_input' type="radio" name="sex-prob2" /></td>
              </tr>
              <tr>
                <td className='fh_td'>Excessive sexual urge</td>
                <td className='fh_td' ><input  className='fh_input' type="radio" name="sex-prob3" /></td>
                <td className='fh_td' ><input  className='fh_input' type="radio" name="sex-prob3" /></td>
              </tr>
              <tr>
                <td className='fh_td' >Complete abstinence</td>
                <td className='fh_td' ><input  className='fh_input' type="radio" name="sex-prob4" /></td>
                <td className='fh_td' ><input  className='fh_input' type="radio" name="sex-prob4" /></td>
              </tr>
              <tr>
                <td  className='fh_td'>Any other</td>
                <td  className='fh_td'><input  className='fh_input' type="radio" name="sex-prob5" /></td>
                <td  className='fh_td'><input  className='fh_input' type="radio" name="sex-prob5" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
       <div className="fh_endbtn">
        <button className="fh_prev-btn" onClick={goToPrevPage}>
        &laquo;  Prev 
        </button>
        <button className="fh_submit-btn" onClick={onSubmit}>
            Submit
          </button>
      </div>
    </div>
    
  );
};

export default AdjustmentPatterns;
