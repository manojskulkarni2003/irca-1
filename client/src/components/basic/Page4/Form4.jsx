import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation
import "./Form4.css"

const DeclarationForm = () => {
  const [formData, setFormData] = useState({

    // Reset other fields as needed
    input1:" ",
    input2:" ",
    input3:" ",
    input4:" ",

    input5:" ",
    input6:" ",
    input7:" ",

    input8:" ",
    input9:" ",
    input10:" ",
    input11:" ",
    input12:" ",
    input13:" ",
    input14:" ",
    input15:" ",


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
    navigate('/basic/form5');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  const handlePrev = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/basic/form3');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  const loadSavedData = () => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  };

  // function page3() {
  //   navigate('/form3');
  // }

  // function page5() {
  //   navigate('/form5');
  // }

  return (
    <form onSubmit={handleSubmit}>
    <div className="id5">
    ಇವರಿಗೆ,
    <br />
    ನಿರ್ದೇಶಕರು
    <br />
    'ಹೊಪ್' ಅಮಲು ಚಿಕಿತ್ಸಾ ಮತ್ತು ಪುನರ್ವಸತಿ ಕೇಂದ್ರ, ಬೆಳಗಾವಿ.
    {/* Center aligned */}
    <h3 style={{ textAlign: 'center' }}>ಘೋಷಣೆ ಮತ್ತು ನಷ್ಟ ಪರಿಹಾರ Declaration - Cum - Idemnity</h3>

    ನಾನು{' '}
    <input
      type="text"
      placeholder=""
     name="input1"
     value={formData.input1}
      onChange={handleInputChange}
    />{' '}
    ವಯಸ್ಸಿನ ಭಾರತೀಯ ನಿವಾಸಿಯಾದ, ಸದ್ಯ{' '}
    <input
      type="text"
      placeholder=" "
      name="input2"
      value={formData.input2}
       onChange={handleInputChange}
    />{' '}
    ಎಂಬಲ್ಲಿ ವಾಸಿಸುತ್ತಿದ್ದು ಈ ಮೂಲಕ ಘೋಷಣೆಗಳನ್ನು ವಿಧಿಬದ್ಧವಾಗಿ ಘೋಷಿಸುತ್ತಿದ್ದೇನೆ.
    <br />
    <p>
      <span className="highlight">
        I{' '}
        <input
          type="text"
          placeholder=" "
          name="input3"
     value={formData.input3}
      onChange={handleInputChange}
        />{' '}
        aged{' '}
        <input
          type="number"
          placeholder=" "
          name="input4"
          value={formData.input4}
           onChange={handleInputChange}
          style={{ width: '70px' }}
        />{' '}
        years of Indian inhabitant presently residing at{' '}
        <input
          type="text"
          placeholder=" "
          name="input5"
     value={formData.input5}
      onChange={handleInputChange}
        />{' '}
        do hereby solemnly declare and state as under:
      </span>{' '}
    </p>

    {/* Center aligned and underlined */}
    <br />
    <h4 style={{ textAlign: 'center', textDecoration: 'underline' }}>ಸಾಕ್ಷಿದಾರರು : </h4>
    <br />
    ನಾವು(1){' '}
    <input
      type="text"
      placeholder=" "
      name="input6"
     value={formData.input6}
      onChange={handleInputChange}
    />{' '}
    ವಯಸ್ಸು{' '}
    <input
      type="number"
      placeholder=" "
      name="input7"
     value={formData.input7}
      onChange={handleInputChange}
      style={{ width: '70px' }}
    />{' '}
    ಎಂಬಲ್ಲಿ ವಾಸವಾಗಿದ್ದು
    <br />
    (2){' '}
    <input
      type="text"
      placeholder=" "
      name="input8"
     value={formData.input8}
      onChange={handleInputChange}
    />{' '}
    ವಯಸ್ಸು{' '}
    <input
      type="number"
      placeholder=" "
      name="input9"
     value={formData.input9}
      onChange={handleInputChange}
      style={{ width: '70px' }}
    />{' '}
    ಎಂಬಲ್ಲಿ ವಾಸವಾಗಿದ್ದು ಈ ಕೆಳಗಿನ ಘೋಷಣೆಗಳನ್ನು ವಿಧಿಬದ್ಧವಾಗಿ ಘೋಷಿಸುತ್ತಿದ್ದೇವೆ.
    <br />
    <p>
      <span className="highlight">
        We (1){' '}
        <input
          type="text"
          placeholder=" "
          name="input10"
     value={formData.input10}
      onChange={handleInputChange}
        />{' '}
        aged{' '}
        <input
          type="number"
          placeholder=" "
          name="input11"
     value={formData.input11}
      onChange={handleInputChange}
          style={{ width: '70px' }}
          />{' '}
        years, residing at{' '}
        <input
          type="text"
          placeholder=" "
          name="input12"
     value={formData.input12}
      onChange={handleInputChange}
        />
        <br />
        (2){' '}
        <input
          type="text"
          placeholder=" "
          name="input13"
     value={formData.input13}
      onChange={handleInputChange}
        />{' '}
        aged{' '}
        <input
          type="number"
          placeholder=" "
          name="input14"
     value={formData.input14}
      onChange={handleInputChange}
          style={{ width: '70px' }}
        />{' '}
        years, residing at{' '}
        <input
          type="text"
          placeholder=" "
          name="input15"
          value={formData.input15 }
           onChange={handleInputChange}
        />{' '}
        do hereby solemnly declare and state under:
      </span>{' '}
    </p>


      <ol>
    <li>
        <p>'ಹೋಪ್' ಅಮಲು ಚಿಕಿತ್ಸಾ ಹಾಗೂ ಪುನರ್ವಸತಿ ಕೇಂದ್ರ, ಬೆಳಗಾವಿ ಇವರು ನಡೆಸುತ್ತಿರುವ ಅಮಲು/ಪುನರ್ವಸತಿ ಚಿಕಿತ್ಸಾ ಕೇಂದ್ರಕ್ಕೆ ಸ್ವಯಂಪ್ರೇರಿತವಾಗಿ ಮತ್ತು ನನ್ನ ಸ್ವ ಇಚ್ಛೆಯ
            ಮೇರೆಗೆ ದಾಖಲಿಸಿಗೊಳ್ಳುತ್ತಿದ್ದೇನೆ.<span class="highlight">        
            <br/>I have voluntarily and of my own accord admitted myself to the De-addiction/Rehabilitation centre run 
            by Hope Recovery Centre, Belagavi.</span> </p> 

    </li>

    <li>
        <p> ಸದರಿ ಸಮಗ್ರ ಚಿಕಿತ್ಸಾ ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ಔಷದೋಪಚಾರಗಳ ಬಗ್ಗೆ ವಿವರವಾಗಿ ನನಗೆ /ನಮಗೆ ಮಾಹಿತಿ ನೀಡಿರುತ್ತಾರೆ ಹಾಗೂ ಅವುಗಳಿಂದಾಗುವ ಪರಿಣಾಮಗಳ ಬಗ್ಗೆ ನಾನು 
        ಸಂಪೂರ್ಣವಾಗಿ ಅರಿತುಕೊಂಡಿರುತ್ತೇನೆ/ವೆ.<span class="highlight">        
        <br/>I/We State that, I/We have been informed about the entire treatment and medication in detail and we 
        also fully understand and am/are aware of the implications and consequences thereof.</span> </p> 
    </li>

    <li>
        <p> ಸದರಿ ಚಿಕಿತ್ಸಾ ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ಔಷದೋಪಚಾರದ ಅವಧಿಯಲ್ಲಿ ಅಥವಾ ತದನಂತರ ಉದ್ಭವಿಸಬಹುದಾದ ಸಂಪೂರ್ಣ ಜವಾಬ್ದಾರಿ, ಹರ, ಅಪಾಯ ಮತ್ತು 
            ಪರಿಣಾಮಗಳ ಹೊಣೆಯನ್ನು ನಾನೇ / ನಾವು ಹೊತ್ತುಕೊಂಡಿರುತ್ತೇವೆ ಮತ್ತು ಯಾವುದೇ ರೀತಿಯಲ್ಲಿ ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ಇನ್ನು ಮುಂದಕ್ಕೆ ಸದರಿ ಚಿಕಿತ್ಸಾ ಕೇಂದ್ರದ ಸಿಬ್ಬಂದಿ 
            ಮತ್ತು ಪ್ರತಿನಿಧಿಗಳನ್ನು ಯಾವುದೇ ರೀತಿಯಲ್ಲಿಯೂ ಬಾಧ್ಯರನ್ನಾಗಲಿ ಮಾಡುವುದಿಲ್ಲ ಎಂದು ಘೋಷಿಸುತ್ತಾ ದೃಢೀಕರಿಸುತ್ತಿದ್ದೇನೆ.<span class="highlight">        
            <br/>I/We declare and confirm that I/We have taken upon myself/ ourselves the entire responsibility,
            liability, risk and consequences as may arise during or after the said treatment and medication and 
            that I/We shall not in any manner and at any time hereafter hold the said treatment centre, staff and 
            representatives liable and or responsible in any manner.</span> </p> 
    </li>

    <li>
        ನಾನು/ನಾವು ಚಿಕಿತ್ಸಾ ಅವಧಿಯಲ್ಲಿ ಈ ಕೆಳಗೆ ಕೊಟ್ಟಿರುವ ವಿಷಯಗಳನ್ನು ಪಾಲಿಸುತ್ತೇನೆ, ತಿಳಿದಿರುತ್ತೇನೆ ಮತ್ತು ಒಪ್ಪಿಕೊಳ್ಳುತ್ತೇನೆ.
        
        <ol>
            <li>ಪೆಟ್ಟಾದಾಗ ( ಗಾಯವಾದಾಗ) ಮಾರಕ ಅಥವಾ ಸಂಸ್ಥೆಯಿಂದ ತಪ್ಪಿಸಿಕೊಳ್ಳಲು ಪ್ರಯತ್ನಿಸುವಾಗ</li>
            <li>ಆತ್ಮ ಹತ್ಯೆಗೆ ಪ್ರಯತ್ನಿಸುವಾಗ</li>
            <li>ಚಿಕಿತ್ಸಾ ಸಮಯದಲ್ಲಿ ಕಂಡುಬರುವ ಹಿಂತೆಗೆತದ ಚಿಹ್ನೆಗಳು ಹಾಗೂ ಇತರ ಮಾನಸಿಕ ಸಮಸ್ಯೆಗಳ ಬಗ್ಗೆ (ಹಿಂಸಾತ್ಮಕ ವರ್ತನೆ, ಆತ್ಮಹತ್ಯೆ ಇತ್ಯಾದಿ)</li>
            <li>ಡೈಸರಮ್ ಮಾತ್ರೆ ಸೇವಿಸುವ ಸಂದರ್ಭದಲ್ಲಿ ಅಮಲು ಸೇವಿಸಿದಾಗ ಉಂಟಾಗುವ ಗಂಭೀರ ಸಮಸ್ಯೆಗಳ ಬಗ್ಗೆ</li>
            <li>ಚಿಕಿತ್ಸೆ ಪಡೆದ ನಂತರ ಔಷಧಿ ತೆಗೆದುಕೊಳ್ಳುವಾಗ ಉಂಟಾಗುವ ಅನಿರೀಕ್ಷಿತ ಅಡ್ಡ ಪರಿಣಾಮಗಳು, ಇನ್ನಿತರ ಸಮಸ್ಯೆಗಳಾದ ಖಿನ್ನತೆ, ಮಾನಸಿಕ ತೊಂದರೆ ಮತ್ತು 
                ಎಚ್.ಐ.ವಿ ಯಿಂದಾಗಿ ಅವಕಾಶವಾದಿ ಸೋ೦ಕುಗಳ ಬಗ್ಗೆ</li>
        </ol>
    </li>
</ol>
      {/* Rest of your HTML content */}

      <center>
        <div className="footer">
          <button onClick={handlePrev}>prev</button>
          <button>4</button>
          <button type="submit">Submit</button>
          <button onClick={handleNext}>next</button>
        </div>
      </center>
    </div>
    </form>
  );
};

export default DeclarationForm;
