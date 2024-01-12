import React, { useState,  useEffect } from "react";
import "./IntakeForm.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const IntakeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    maritalStatus: "",
    occupation: "",
    age: "",
    dob: "",
    dateOfIntake: "",
    dateOfAdmission: "",
    bpl: "",
    accompaniedBy: "",
    yearOfDrinkingAbuse: "",
    yearOfExcessiveAbuse: "",
    presentPatternAbuse: "",
    presenceOf: "",
    useOfOtherDrugs: "",
    psychiatricProblem: "",
    denial: "Mild",
    physicalProblems: "",
    priorTreatment: "",
    willingnessForTreatment: "Unwilling",
    motivatingFactor: "",
  });

  const validatePage = () => {
    return (
      formData.name &&
      formData.maritalStatus &&
      formData.occupation &&
      formData.age &&
      formData.dob &&
      formData.dateOfIntake &&
      formData.dateOfAdmission &&
      formData.bpl &&
      formData.accompaniedBy &&
      formData.yearOfDrinkingAbuse &&
      formData.yearOfExcessiveAbuse &&
      formData.presentPatternAbuse &&
      formData.presenceOf &&
      formData.physicalProblems &&
      formData.priorTreatment &&
      formData.motivatingFactor &&
      true
    );
  };



  const navigate = useNavigate();

  


  const handleNext = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/basic/form2');
    window.scrollTo({ top: 0, behavior: 'instant' });
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

 


const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};


// /Submit the data Successfully
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4200/basic/api/submitFormData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Handle response if needed
      console.log("Form data submitted:", response);

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        occupation: "",
        age: "",
        dob: "",
        dateOfIntake: "",
        dateOfAdmission: "",
        bpl: "",
        accompaniedBy: "",
        yearOfDrinkingAbuse: "",
        yearOfExcessiveAbuse: "",
        presentPatternAbuse: "",
        presenceOf: "",
        useOfOtherDrugs: "",
        psychiatricProblem: "",
        denial: "Mild",
        physicalProblems: "",
        priorTreatment: "",
        willingnessForTreatment: "Unwilling",
        motivatingFactor: "",
        // Reset other fields as needed
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  const [fetchedData, setFetchedData] = useState(null);


  //data fetch
  // Function to handle fetching incomplete data
  const fetchIncompleteData = async () => {
    try {
      const response = await fetch(`http://localhost:4200/basic/api/getIncompleteData?name=${formData.name}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const incompleteData = await response.json();
      console.log('Incomplete Data:', incompleteData);
      setFetchedData(incompleteData); // Set fetched data to state
    } catch (error) {
      console.error('Error fetching incomplete data:', error);
      // Handle error state or feedback to the user
    }
  };
  
   // Populate form fields with fetched data
   const populateFormFields = () => {
    if (!fetchedData) {
      return null;
    }
  
    const updatedFormData = { ...formData };
    for (const key in fetchedData) {
      if (Object.prototype.hasOwnProperty.call(fetchedData, key)) {
        updatedFormData[key] = fetchedData[key];
      }
    }
    setFormData({
      ...formData,
      name: fetchedData.name || '',
      maritalStatus: fetchedData.maritalStatus || '',
      occupation: fetchedData.occupation || '',
      // Add other fields similarly
    });
  };
  

  return (
    <form onSubmit={handleSubmit}>

      <div className="intake-form">

        <div className="form-page ">

          <div className="top">
            <h2>INTAKE FORM</h2>
            <label htmlFor="photo">Select Photo:</label>
            <input type="file" id="photo" name="photo" accept="image/*" />
          </div>

          <br/>

          <div className="fix">

            <div className="left-section">

              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <br/>

              Marital Status:
              <input
                type="text"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleInputChange}
              />
               <br/>

              Occupation:
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
              />
               <br/>

            </div>

            <div className="right-section">

              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
              />
              <br/>

              Date of Birth:
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
              />
              <br/>

              Date of Intake:
              <input
                type="date"
                name="dateOfIntake"
                value={formData.dateOfIntake}
                onChange={handleInputChange}
              />
              <br/>

              <div className="radio-list1">

                BPL:

                <input
                  type="radio"
                  id="bplYes"
                  name="bpl"
                  value="Yes"
                  checked={formData.bpl === "Yes"}
                  onChange={handleInputChange}
                />
                Yes

                <input
                  type="radio"
                  id="bplNo"
                  name="bpl"
                  value="No"
                  checked={formData.bpl === "No"}
                  onChange={handleInputChange}
                />
                No

              </div>

          </div>

        </div>

        <br/>
          <div className="mid">
            <b>Accompanied by:</b>
            <input
              type="text"
              name="accompaniedBy"
              value={formData.accompaniedBy}
              onChange={handleInputChange}
            />
            <br/>
            <br/>

            Year of drinking / Drug Abuse:
            <input
              type="text"
              name="yearOfDrinkingAbuse"
              value={formData.yearOfDrinkingAbuse}
              onChange={handleInputChange}
            />
            <br/>

            Year of excessive drinking/ Drug Abuse:
            <input
              type="text"
              name="yearOfExcessiveAbuse"
              value={formData.yearOfExcessiveAbuse}
              onChange={handleInputChange}
            />
            <br/>

            Present Pattern of drinking/ Drug Abuse:
            <input
              type="text"
              name="presentPatternAbuse"
              value={formData.presentPatternAbuse}
              onChange={handleInputChange}
            />

            <br/>
            <br/>

            <b>Presence of:</b>
            <input
              type="text"
              name="presenceOf"
              value={formData.presenceOf}
              onChange={handleInputChange}
            />
          </div>
          <ul className="radio-list">
            <li>
              <label>Use of other Drugs:</label>
              <input
                type="radio"
                id="useOfOtherDrugsNil"
                name="useOfOtherDrugs"
                value="Nil"
                checked={formData.useOfOtherDrugs === "Nil"}
                onChange={handleInputChange}
              />
              Nil
              <input
                type="radio"
                id="useOfOtherDrugsPastuseonly"
                name="useOfOtherDrugs"
                value="Pastuseonly"
                checked={formData.useOfOtherDrugs === "Pastuseonly"}
                onChange={handleInputChange}
              />  
              Past use only
              <input
                type="radio"
                id="useOfOtherDrugspresentlyusing"
                name="useOfOtherDrugs"
                value="presentlyusing"
                checked={formData.useOfOtherDrugs === "presentlyusing"}
                onChange={handleInputChange}
              />
             
                Presently using
              
            </li>
          </ul>
          <br/>

          <ul className="radio-list">
            <li>
              <label>Psychiatric Problem:</label>
              <input
                type="radio"
                id="psychiatricProblemNil"
                name="psychiatricProblem"
                value="Nil"
                checked={formData.psychiatricProblem === "Nil"}
                onChange={handleInputChange}
              />
              Nil
              <input
                type="radio"
                id="psychiatricProblemMild"
                name="psychiatricProblem"
                value="Mild"
                checked={formData.psychiatricProblem === "Mild"}
                onChange={handleInputChange}
              />
              Mild
              <input
                type="radio"
                id="psychiatricProblemModerate"
                name="psychiatricProblem"
                value="presentlyusing"
                checked={formData.psychiatricProblem === "presentlyusing"}
                onChange={handleInputChange}
              />
              Moderate
            </li>
          </ul>
          <br/>
          <ul className="radio-list">
            <li>
              <label>Denial:</label>
              <input
                type="radio"
                id="denialMild"
                name="denial"
                value="Mild"
                checked={formData.denial === "Mild"}
                onChange={handleInputChange}
              />
              Mild
              <input
                type="radio"
                id="denialModerate"
                name="denial"
                value="Moderate"
                checked={formData.denial === "Moderate"}
                onChange={handleInputChange}
              />
              Moderate
              <input
                type="radio"
                id="denialSevere"
                name="denial"
                value="Severe"
                checked={formData.denial === "Severe"}
                onChange={handleInputChange}
              />
              Severe
            </li>
          </ul>

          <br/>
          <br/>
          
          <div className="mid1">
          <b>Physical Problems (Record Specifically):</b>
          <textarea
            name="physicalProblems"
            value={formData.physicalProblems}
            onChange={handleInputChange}
            style={{ border: 'none'}}
          />
          <br />

          <b>Prior Treatment for Addiction:</b>
          <textarea
            name="priorTreatment"
            value={formData.priorTreatment}
            onChange={handleInputChange}
            style={{ border: 'none'}}
          />
        </div>

            <div className="radio-list">

              <label><b>Willingness for Treatment: </b></label>
              <input
                type="radio"
                id="willingnessForTreatmentUnwilling"
                name="willingnessForTreatment"
                value="Unwilling"
                checked={formData.willingnessForTreatment === "Unwilling"}
                onChange={handleInputChange}
              />
              
                Unwilling
              
              <input
                type="radio"
                id="willingnessForTreatmentHalfhearted"
                name="willingnessForTreatment"
                value="Halfhearted"
                checked={formData.willingnessForTreatment === "Halfhearted"}
                onChange={handleInputChange}
              />
              
                Half-hearted
              
              <input
                type="radio"
                id="willingnessForTreatmentWilling"
                name="willingnessForTreatment"
                value="Willing"
                checked={formData.willingnessForTreatment === "Willing"}
                onChange={handleInputChange}
              />
              Willing

              </div>
            <br/>

            <div className="mid1">
             <b> Motivating factor for present treatment effort:</b>
              <textarea
                name="motivatingFactor"
                value={formData.motivatingFactor}
                onChange={handleInputChange}
                style={{ border: 'none'}}
              />
            </div>

          <center>
            {/* <button type="button" onClick={gotoform2}>
            Next
          </button>
           */}<button type="button" onClick={fetchIncompleteData}>Fetch Data</button>
                     <button>1</button>
            <button type="submit">Submit</button>
            <button onClick={handleNext}>next</button>
            <button onClick={populateFormFields}>Populate Form</button>
          </center>
        </div>
      </div>
    </form>
  );
};

export default IntakeForm;
