import React from 'react';
import { useNavigate } from 'react-router-dom';


const Page4 = () => {
    const navigate = useNavigate();
    const goToNextPage = async () => {
      try {
        // Gather the data from the form or state
        const dataToSend = {
          yearsOfMarriedLife: document.getElementById('yearsOfMarriedLife').value,
          arrangedMarriage: (document.querySelector('input[name="arranged"]:checked')?.value) || '',
          acceptedByFamily: (document.querySelector('input[name="acceptedByFamily"]:checked')?.value) || '',
          previousMarriages: (document.querySelector('input[name="previousMarriages"]:checked')?.value) || '',
          separatedDueToAddiction: (document.querySelector('input[name="separatedDueToAddiction"]:checked')?.value) || '',
          suspiciousOfWife: (document.querySelector('input[name="suspiciousOfWife"]:checked')?.value) || '',
          familyViolence: (document.querySelector('input[name="familyViolence"]:checked')?.value) || '',
          violentIncident: (document.querySelector('input[name="violentIncident"]:checked')?.value) || '',
          breakingArticles: (document.querySelector('input[name="breakingArticles"]:checked')?.value) || '',
          // Add more fields as needed
          // Include other fields from your form
        };
        
  
        // Make a POST request to the server
        const response = await fetch('http://localhost:4200/family/page4', {
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
        navigate('/family/page5');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };
      const goToPrevPage = () => {
        // Perform any necessary validation or data processing before navigating
        navigate('/family/page3');
        window.scrollTo({ top: 0, behavior: 'instant' });
      };
  return (
    <div className="page page4">
      <strong>
        Other details about spouse (history of addiction in her family, her
        addiction history if any, any other significant event in her life, and
        attitude towards addiction)
      </strong>
      <table className="family">
        <tbody>
          <tr>
            <td className="lessWidth">12. Years of married life</td>
            <td>
            <input type="text" id="yearsOfMarriedLife" placeholder="Enter years" />
            </td>
          </tr>
          <tr>
            <td className="lessWidth">
              13. Is this marriage arranged or by choice?
            </td>
            <td className="flex">
              <label>
                <input type="radio" name="arranged" value="yes" /> Yes
              </label>
              <label>
                <input type="radio" name="arranged" value="no" /> No
              </label>
            </td>
          </tr>
          <tr>
            <td className="lessWidth">
              If by choice, accepted by family (present status)
            </td>
            <td className="flex">
              <label>
                <input type="radio" name="acceptedByFamily" value="yes" /> Yes
              </label>
              <label>
                <input type="radio" name="acceptedByFamily" value="no" /> No
              </label>
            </td>
          </tr>
          <tr>
            <td className="lessWidth">
              14. Details regarding previous subsequent marriages. If any
            </td>
            <td className="flex">
              <label>
                <input type="radio" name="previousMarriages" value="yes" /> Yes
              </label>
              <label>
                <input type="radio" name="previousMarriages" value="no" /> No
              </label>
            </td>
          </tr>
          <tr>
            <td className="lessWidth">
              15. Have you been separated from your spouse due to your addiction?
            </td>
            <td className="flex">
              <label>
                <input
                  type="radio"
                  name="separatedDueToAddiction"
                  value="yes"
                />{' '}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="separatedDueToAddiction"
                  value="no"
                />{' '}
                No
              </label>
            </td>
          </tr>
          <tr>
            <td className="lessWidth">16. Is patient suspicious of wife?</td>
            <td className="flex">
              <label>
                <input
                  type="radio"
                  name="suspiciousOfWife"
                  value="whileInfluenceOfAlcoholDrugs"
                />
                Under the influence of alcohol/drugs
              </label>
              <label>
                <input
                  type="radio"
                  name="suspiciousOfWife"
                  value="abstinence"
                />While Abstinence
              </label>
            </td>
          </tr>
          <tr>
            <td className="lessWidth">17. Any instance of family violence</td>
            <td className="flex">
              <label>
                <input type="radio" name="familyViolence" value="yes" /> Yes
              </label>
              <label>
                <input type="radio" name="familyViolence" value="no" /> No
              </label>
            </td>
          </tr>
          <tr>
            <td className="lessWidth">
              Physical violence directed towards family members
            </td>
            <td className="flex">
              <label>
                <input type="radio" name="physicalViolence" value="yes" />
                Yes
              </label>
              <label>
                <input type="radio" name="physicalViolence" value="no" /> No
              </label>
            </td>
          </tr>
          <tr>
            <td className="lessWidth">Verbally abusive</td>
            <td className="flex">
              <label>
                <input type="radio" name="verballyAbusive" value="yes" />
                Yes
              </label>
              <label>
                <input type="radio" name="verballyAbusive" value="no" /> No
              </label>
            </td>
          </tr>
          <tr>
            <td className="lessWidth">
              Violent incident with neighbors and outsiders
            </td>
            <td className="flex">
              <label>
                <input type="radio" name="violentIncident" value="yes" />
                Yes
              </label>
              <label>
                <input type="radio" name="violentIncident" value="no" /> No
              </label>
            </td>
          </tr>
          <tr>
            <td className="lessWidth">Breaking articles at home</td>
            <td className="flex">
              <label>
                <input type="radio" name="breakingArticles" value="yes" />
                Yes
              </label>
              <label>
                <input type="radio" name="breakingArticles" value="no" /> No
              </label>
            </td>
          </tr>
          <tr>
            <td className="lessWidth">18. Details regarding children</td>
            <td className="flex">
              <label>
                Male <input type="text" placeholder="Enter number" />
              </label>
              <label>
                Female <input type="text" placeholder="Enter number" />
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h2>
        19.Health status of family
        <br />
        Has there been anyone in your family who has suffered from any of these
        problems?
      </h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th colspan="3">Parents & Siblings</th>
            <th colspan="3">Wife/Children</th>
          </tr>
          <tr>
            <th>Problems</th>
            <th>Yes</th>
            <th>No</th>
            <th>Don't Know</th>
            <th>Yes</th>
            <th>No</th>
            <th>Don't Know</th>
          </tr>
          <tr>
            <td>Major depression</td>
            <td>
              <input type="radio" name="majorDepressionParents" value="yes" />
            </td>
            <td>
              <input type="radio" name="majorDepressionParents" value="no" />
            </td>
            <td>
              <input type="radio" name="majorDepressionParents" value="dontKnow" />
            </td>
            <td>
              <input type="radio" name="majorDepressionWife" value="yes" />
            </td>
            <td>
              <input type="radio" name="majorDepressionWife" value="no" />
            </td>
            <td>
              <input type="radio" name="majorDepressionWife" value="dontKnow" />
            </td>
          </tr>
          <tr>
            <td>Suicide/attempted</td>
            <td>
              <input type="radio" name="suicideParents" value="yes" />
            </td>
            <td>
              <input type="radio" name="suicideParents" value="no" />
            </td>
            <td>
              <input type="radio" name="suicideParents" value="dontKnow" />
            </td>
            <td>
              <input type="radio" name="suicideWife" value="yes" />
            </td>
            <td>
              <input type="radio" name="suicideWife" value="no" />
            </td>
            <td>
              <input type="radio" name="suicideWife" value="dontKnow" />
            </td>
          </tr>
          <tr>
            <td>Psychiatric illnesses</td>
            <td>
              <input type="radio" name="psychiatricIllnessesParents" value="yes" />
            </td>
            <td>
              <input type="radio" name="psychiatricIllnessesParents" value="no" />
            </td>
            <td>
              <input
                type="radio"
                name="psychiatricIllnessesParents"
                value="dontKnow"
              />
            </td>
            <td>
              <input type="radio" name="psychiatricIllnessesWife" value="yes" />
            </td>
            <td>
              <input type="radio" name="psychiatricIllnessesWife" value="no" />
            </td>
            <td>
              <input
                type="radio"
                name="psychiatricIllnessesWife"
                value="dontKnow"
              />
            </td>
          </tr>
          <tr>
            <td>Alcohol dependence</td>
            <td>
              <input type="radio" name="alcoholDependenceParents" value="yes" />
            </td>
            <td>
              <input type="radio" name="alcoholDependenceParents" value="no" />
            </td>
            <td>
              <input
                type="radio"
                name="alcoholDependenceParents"
                value="dontKnow"
              />
            </td>
            <td>
              <input type="radio" name="alcoholDependenceWife" value="yes" />
            </td>
            <td>
              <input type="radio" name="alcoholDependenceWife" value="no" />
            </td>
            <td>
              <input
                type="radio"
                name="alcoholDependenceWife"
                value="dontKnow"
              />
            </td>
          </tr>
          <tr>
            <td>Drug dependence</td>
            <td>
              <input type="radio" name="drugDependenceParents" value="yes" />
            </td>
            <td>
              <input type="radio" name="drugDependenceParents" value="no" />
            </td>
            <td>
              <input
                type="radio"
                name="drugDependenceParents"
                value="dontKnow"
              />
            </td>
            <td>
              <input type="radio" name="drugDependenceWife" value="yes" />
            </td>
            <td>
              <input type="radio" name="drugDependenceWife" value="no" />
            </td>
            <td>
              <input
                type="radio"
                name="drugDependenceWife"
                value="dontKnow"
              />
            </td>
          </tr>
          <tr>
            <td>Any other</td>
            <td>
              <input type="radio" name="anyOtherParents" value="yes" />
            </td>
            <td>
              <input type="radio" name="anyOtherParents" value="no" />
            </td>
            <td>
              <input type="radio" name="anyOtherParents" value="dontKnow" />
            </td>
            <td>
              <input type="radio" name="anyOtherWife" value="yes" />
            </td>
            <td>
              <input type="radio" name="anyOtherWife" value="no" />
            </td>
            <td>
              <input type="radio" name="anyOtherWife" value="dontKnow" />
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

export default Page4;
