import React, { useState,useEffect } from 'react';
import './Form6.css'; // Import your component-specific CSS
import { useNavigate } from 'react-router-dom';

const DisulfiramLetter = () => {
  const [formData, setFormData] = useState({

    // Reset other fields as needed



  });


  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
 };


   //Submit the data Successfully
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
      // setFormData({
      //   name: "",
      //   email: "",
      //   occupation: "",
      //   age: "",
      //   dob: "",
      //   dateOfIntake: "",
      //   dateOfAdmission: "",
      //   bpl: "",
      //   accompaniedBy: "",
      //   yearOfDrinkingAbuse: "",
      //   yearOfExcessiveAbuse: "",
      //   presentPatternAbuse: "",
      //   presenceOf: "",
      //   useOfOtherDrugs: "",
      //   psychiatricProblem: "",
      //   denial: "Mild",
      //   physicalProblems: "",
      //   priorTreatment: "",
      //   willingnessForTreatment: "Unwilling",
      //   motivatingFactor: "",
        // Reset other fields as needed
      // });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const navigate = useNavigate();

  const handleNext = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/basic/form7');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  const handlePrev = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/basic/form5');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  const loadSavedData = () => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  };


  return (
    <div className="id6">
      <div style={{ fontStyle: 'oblique', fontWeight: 'bold' }}>
        <h2>
          <u>ಡೈಸಲ್ಟಿರಮ್ ಮಾತ್ರೆ ತೆಗೆದುಕೊಳ್ಳುವ ಬಗ್ಗೆ ಪತ್ರ</u>
        </h2>
        <p>
          ನನ್ನ ಮದ್ಯಪಾನ ರೋಗದ ಚಿಕಿತ್ಸೆಯ ಭಾಗವಾಗಿ ವೈದ್ಯರು ನಿರ್ದೇಶಿಸಿದ ಡೈಸಲಿರಮ್ ಎಂಬ ಮಾತ್ರೆಯನ್ನು ತೆಗೆದುಕೊಳ್ಳುತ್ತೇನೆ.
          ಈ ಮಾತ್ರೆ ತೆಗೆದುಕೊಳ್ಳುವಾಗ ಮದ್ಯಪಾನ ತೆಗೆದುಕೊಂಡರೆ ಶಾರೀರಿಕವಾಗಿ ಹಾಗೂ ಮಾನಸಿಕವಾಗಿ ಉಂಟಾಗುವ ತೊಂದರೆಗಳ ಬಗ್ಗೆ ನನಗೆ ಅರಿವಿದೆ.
        </p>
        <br />
        <br />
        <br />
        <br />
        <p className="k">
          ಇದರಿಂದ ಉಂಟಾಗುವ ಪರಿಣಾಮಗಳಿಗೆ ನಾನೇ ಜವಾಬ್ದಾರನಾಗಿರುತ್ತೇನೆ.
        </p>
        <u>
          <input type="file" id="photo-upload" name="photo" accept="image/*" className="norm" />
        </u>
        <div className="sign">
          ಚಿಕಿತ್ಸಾರ್ಥಿಯ ಸಹಿ
        </div>
      </div>
  
    
<hr style={{ border: 'none', borderBottom: '5px solid black', margin: '0' }} />


      <h2>
        
        <u>Letter for taking Disulfiram Tablets</u>
      </h2>
     
        <p>
          As a part of De-Addiction treatment Doctor has advised me to take Disulfiram tablets
        </p>
        <p>
          During Disulfiram course if I consume Alcohol it may result in Medical or Psychological risk & consequences.
        </p>
      
      
        <p>
          I am aware of it and I will take entire responsibility by myself.
        </p>
      
      <u>
        <input type="file" id="photo-upload" name="photo" accept="image/*" className="norm" />
      </u>
      <div className="sign1">
        Signature of the Patient
      </div>
      <center>
        <div className="footer">
        <button onClick={handlePrev}>prev</button>
          <button>6</button>
          <button type="submit">Submit</button>
          <button onClick={handleNext}>next</button>
        </div>
      </center>
    </div>
  );
};

export default DisulfiramLetter;
