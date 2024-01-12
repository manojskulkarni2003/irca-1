import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./wt3.css";


const Form3 = () => {
  const [formData, setFormData] = useState({

    name: "",
    age: "",
    dateOfAdmission: "",
    historyOfAlcoholismOrSubstanceAbuse: "",
    physicalComplications: "",
    pastHistory: "",
    psychiatricProblems: "",
    withdrawalSymptoms: "",
    treatment: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        name: "",
        age: "",
        dateOfAdmission: "",
        historyOfAlcoholismOrSubstanceAbuse: "",
        physicalComplications: "",
        pastHistory: "",
        psychiatricProblems: "",
        withdrawalSymptoms: "",
        treatment: "",
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
    navigate('/past/page4');
  };
  const handlePrev = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/past/page2');
  };
  const loadSavedData = () => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  };
  const handleNextAndSubmit = (e) => {
    e.preventDefault();
    handleNext();
    handleSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="book" style={{ border: '6px double black', padding: '10px', outline: 'solid 2px black' }}>
        <div className="page">
          <h1>PSYCHIATRIC HISTORY</h1>
          <label style={{ display: 'inline-block', width: '45px' }}></label>

          <label style={{ display: 'inline-block' }}>     Name :</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" style={{ marginRight: '100px' }} value={formData.name} onChange={handleInputChange} />

          <label style={{ display: 'inline-block' }}>Age :</label>
          <input type="text" id="age" name="age" placeholder="Enter your age" style={{ marginRight: '100px' }} value={formData.age} onChange={handleInputChange} />

          <label style={{ display: 'inline-block' }}>Date of Admission :</label>
          <input type="date" className="text1" id="date" name="dateOfAdmission" style={{ marginRight: '100px' }} value={formData.dateOfAdmission} onChange={handleInputChange} />

          <ol start="1">
            <li style={{ display: 'inline-block', width: '520px' }}>History of Alcoholism/Substance Abuse:</li>
            <br />
            <input id="historyOfAlcoholismOrSubstanceAbuse" name="historyOfAlcoholismOrSubstanceAbuse" type="text" value={formData.historyOfAlcoholismOrSubstanceAbuse} onChange={handleInputChange} />
            <br />
            <br />
            <br />


            <li style={{ display: 'inline-block', width: '330px' }}>Physical complications:</li>
            <br />
            <input name="physicalComplications" type="text" value={formData.physicalComplications} onChange={handleInputChange} />
            <br />
            <br />
            <br />

            <li style={{ display: 'inline-block', width: '180px' }}>Past History:</li>
            <br />
            <input id="physicalComplications" name="pastHistory" type="text" value={formData.pastHistory} onChange={handleInputChange} />
            <br />
            <br />
            <br />
            <li style={{ display: 'inline-block', width: '300px' }}>Psychiatric problems:</li>
            <br />
            <input id="psychiatricProblems" name="psychiatricProblems" type="text" value={formData.psychiatricProblems} onChange={handleInputChange} />
            <br />
            <br />
            <br />
            <li style={{ display: 'inline-block', width: '320px' }}>Withdrawal symptoms:</li>
            <br />
            <input id="withdrawalSymptoms" type="text" name="withdrawalSymptoms" value={formData.withdrawalSymptoms} onChange={handleInputChange} />
            <br />
            <br />
            <br />
            <li style={{ display: 'inline-block', width: '150px' }}>Treatment:</li>
            <br />
            <input id="treatment" name="treatment" type="text" value={formData.treatment} onChange={handleInputChange} />
          </ol>
          <div className="navigation">
            <button type="button" onClick={handlePrev} >
              Previous
            </button>
            <button align="center">Page 3</button>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form3;

