
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./wt1.css"

const IntakeForm = () => {
  const [formData, setFormData] = useState({
    t1: "",
    t2: "",
    t3: "",
    t4: "",
    c1: [],
    respiratory_system: "",
    cardiovascular_system: "",
    gastrointestinal_system: "",
    nervous_system: "",
    incident: "",
    incidentDescription: "",
    actionTaken: "",
    severity: "",
    investigation: "",
    certificateDetails: "",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    try {
      const response = await fetch("http://localhost:5000/api/submitFormData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });


      console.log("Form data submitted:", response);


      setFormData({
        t1: "",
        t2: "",
        t3: "",
        t4: "",
        c1: [],
        respiratory_system: "",
        cardiovascular_system: "",
        gastrointestinal_system: "",
        nervous_system: "",
        incident: "",
        incidentDescription: "",
        actionTaken: "",
        severity: "",
        investigation: "",
        certificateDetails: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleNext = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/past/page2');
  };

  const loadSavedData = () => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  };

  useEffect(() => {
    loadSavedData();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div id="page1" style={{ border: '6px double black', padding: '10px', outline: 'solid 2px black' }}>
        <h2 align="center"><b>PHYSICAL EXAMINATION OF THE DAY OF ADMISSION</b></h2>
        <br />
        <div id="form">
          <form>
            <label className="l1" style={{ display: 'inline-block'}}>Pulse Rate:</label>
            <input type="text" id="t1" name="t1" style={{ marginRight: '100px' }} value={formData.t1} onChange={handleInputChange} />


            <label className="l1" style={{ display: 'inline-block' }}>Blood Pressure:</label>
            <input type="text" id="t2" name="t2" style={{ marginRight: '100px' }} value={formData.t2} onChange={handleInputChange} />


            <label className="l1" style={{ display: 'inline-block' }}>Temperature:</label>
            <input type="text" id="t3" name="t3" style={{ marginRight: '100px' }} value={formData.t3} onChange={handleInputChange} />


            <label className="l1" style={{ display: 'inline-block' }}>Weight:</label>
            <input type="text" id="t4" name="t4" style={{ marginRight: '100px' }} value={formData.t4} onChange={handleInputChange} />


            <br />

          </form>
        </div>
        <form>
          <label class="l1"><b>Which of the following symptoms are present during admission </b></label><br />
          <div id="div-body">
            <div class="div">
              <ul>
                <li><label class="l1">• Anemia</label> <input type="checkbox" name="c1" id="c1" value={formData.c1} onChange={handleInputChange} /></li>
                <li><label class="l1">• Lymph Nodes</label> <input type="checkbox" name="c1" id="c1" value={formData.c1} onChange={handleInputChange} /></li>
                <li><label class="l1">• Glossitis</label> <input type="checkbox" name="c1" id="c1" value={formData.c1} onChange={handleInputChange} /></li>
                <li><label class="l1">• Flushed Face</label> <input type="checkbox" name="c1" id="c1" value={formData.c1} onChange={handleInputChange} /></li>
                <li><label class="l1">• Palmar Erythema</label> <input type="checkbox" name="c1" id="c1" value={formData.c1} onChange={handleInputChange} /></li>
                <li><label class="l1">• Pedal Edema</label> <input type="checkbox" name="c1" id="c1" value={formData.c1} onChange={handleInputChange} /></li>
                <li><label class="l1">• Tremors</label> <input type="checkbox" name="c1" id="c1" value={formData.c1} onChange={handleInputChange} /></li>
              </ul>
            </div>

            <div class="div">
              <ul>
                <li><label class="l1">• Jaundice</label> <input type="checkbox" name="c1" id="c1" value={formData.c1} onChange={handleInputChange} /></li>
                <li><label class="l1">• Loss of Body hair</label> <input type="checkbox" name="c1" id="c1" value={formData.c1} onChange={handleInputChange} /></li>
                <li><label class="l1">• Wasting of muscles</label> <input type="checkbox" name="c1" id="c1" value={formData.c1} onChange={handleInputChange} /></li>
                <li><label class="l1">• Abscess</label> <input type="checkbox" name="c1" id="c1" value={formData.c1} onChange={handleInputChange} /></li>
                <li><label class="l1">• Hallucination</label> <input type="checkbox" name="c1" id="c1" value={formData.c1} onChange={handleInputChange} /></li>
              </ul>
            </div>

            <div class="div" id="divOther">
              <ul>
                <li><label class="l1">• Malnutrition</label> <input type="checkbox" name="c1" id="c1" value={formData.c1} onChange={handleInputChange} /></li>
                <li><label class="l1">• Clubbing of nails</label> <input type="checkbox" name="c1" id="c1" value={formData.c1} onChange={handleInputChange} /></li>
                <li><label class="l1">• Spider Naevi</label> <input type="checkbox" name="c1" id="c1" value={formData.c1} onChange={handleInputChange} /></li>
                <li><label class="l1">• Gynaecomastia</label> <input type="checkbox" name="c1" id="c1" value={formData.c1} onChange={handleInputChange} /></li>
                <li><label class="l1">• Injection marks</label> <input type="checkbox" name="c1" id="c1" value={formData.c1} onChange={handleInputChange} /></li>
              </ul>
            </div>
          </div>
          <p id="bold">Record abnormalities, if any, on examination of the following</p>
          <table style={{ width: "60%" }}>
            <thead>
              <tr>
                <th>System</th>
                <th>YES</th>
                <th>NO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Respiratory System</td>
                <td>
                  <input
                    type="radio"
                    name="respiratory_system"
                    value="Yes"
                    checked={formData.respiratory_system === "Yes"}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="respiratory_system"
                    value="No"
                    checked={formData.respiratory_system === "No"}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Cardiovascular System</td>
                <td>
                  <input
                    type="radio"
                    name="cardiovascular_system"
                    value="Yes"
                    checked={formData.cardiovascular_system === "Yes"}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="cardiovascular_system"
                    value="No"
                    checked={formData.cardiovascular_system === "No"}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Gastrointestinal System</td>
                <td>
                  <input
                    type="radio"
                    name="gastrointestinal_system"
                    value="Yes"
                    checked={formData.gastrointestinal_system === "Yes"}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="gastrointestinal_system"
                    value="No"
                    checked={formData.gastrointestinal_system === "No"}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Nervous System</td>
                <td>
                  <input
                    type="radio"
                    name="nervous_system"
                    value="Yes"
                    checked={formData.nervous_system === "Yes"}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="nervous_system"
                    value="No"
                    checked={formData.nervous_system === "No"}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <br /><br />
        <form>
          <label className="l1"><b>Any untoward incident during treatment</b></label>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input className="radio" type="radio" name="incident" value="Yes" checked={formData.incident === "Yes"} onChange={handleInputChange} />
            <label className="l1"><b>Yes</b></label>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input className="radio" type="radio" name="incident" value="No" checked={formData.incident === "No"} onChange={handleInputChange} />
            <label className="l1"><b>No</b></label>
          </div>

        </form>
        <br />
        <label class="l1">If yes, describe the incident: </label>
        <input placeholder="Enter description" class="text" type="text" name="incidentDescription" value={formData.incidentDescription} onChange={handleInputChange} />
        <br /><br /><br />
        <label class="l1">Action taken:  </label>
        <input placeholder="Enter action" class="text" type="text" name="actionTaken" value={formData.actionTaken} onChange={handleInputChange} />
        <br /><br /><br />
        <label class="l1">Impression of counselor: </label>
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <label className="text1" style={{ marginLeft: '5px' }}>Denial</label>
            <input className="text1" name="severity" type="radio" value="Denial" checked={formData.severity === "Denial"} onChange={handleInputChange} />
            
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
          <label className="text1" style={{ marginLeft: '5px' }}>Mild</label>
            <input className="text1" name="severity" type="radio" value="Mild" checked={formData.severity === "Mild"} onChange={handleInputChange} />
            
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
          <label className="text1" style={{ marginLeft: '5px' }}>Moderate</label>
            <input className="text1" name="severity" type="radio" value="Moderate" checked={formData.severity === "Moderate"} onChange={handleInputChange} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
          <label className="text1" style={{ marginLeft: '5px' }}>Severe</label>
            <input className="text1" name="severity" type="radio" value="Severe" checked={formData.severity === "Severe"} onChange={handleInputChange} />
          </div>
        </div>


        <br /><br /><br />

        <label class="l1"><b>Investigation: </b></label>

        <input placeholder="Enter description" class="text" type="text" name="investigation" value={formData.investigation} onChange={handleInputChange} />
        <br /><br /><br />

        <label class="l1">Certificate issued(details) :</label>
        <input placeholder="Enter description" class="text" type="text" name="certificateDetails" value={formData.certificateDetails} onChange={handleInputChange} />
        <br /><br /><br />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ textAlign: "center" }}>
            <button type="submit" style={buttonStyle}>
              Submit
            </button>
          </div>
          <button align="center">Page 1</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </form>
  );
};

const buttonStyle = {
  marginTop: "10px",
  padding: "10px",
};

export default IntakeForm;