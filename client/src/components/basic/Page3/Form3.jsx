import React, { useEffect, useState } from "react";
import "./Form3.css";
import { useNavigate } from "react-router-dom";

const Form3 = () => {
  const [formData, setFormData] = useState({
    // Reset other fields as needed
    data1: " ",
    date: " ",
    name1: " ",
    name2: " ",
    mobno: " ",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
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
      const response = await fetch(
        "http://localhost:5000/basic/api/submitFormData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

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
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/basic/form4");
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const handlePrev = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/basic/form2");
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const loadSavedData = () => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bi_form">
        <h1>
          <div id="bi_heading">ಸಮ್ಮತಿ ಪತ್ರ</div>
        </h1>

        <div id="bi_content">
          <br />
          <p>
            <i>
              ನಾನು ಶ್ರೀ <input type="text" /> 'ಹೋಪ್' ಅಮಲು ಚಿಕಿತ್ಸಾ ಹಾಗೂ
              ಪುನರ್ವಸತಿ ಕೇಂದ್ರ, ಬೆಳಗಾವಿ, ಇದರ ಮದ್ಯ ವರ್ಜನಾ ಚಿಕಿತ್ಸಾ ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ
              ಪಾಲ್ಗೊಳ್ಳಲು ದಿನಾಂಕ <input type="text" /> ರಂದು ಸ್ವ ಇಚ್ಛೆಯಿಂದ
              ಬಂದಿರುತ್ತೇನೆ. ಈ ಬಗ್ಗೆ ನನ್ನ ಹಾಗೂ ಕುಟುಂಬಸ್ಥರ ಯಾವುದೇ ಆಕ್ಷೇಪ
              ಇರುವುದಿಲ್ಲ.
            </i>
          </p>
          <br />
          <p>
            <i>
              ಚಿಕಿತ್ಸಾ ಅವಧಿಯಲ್ಲಿ ಸಂಘಟಕರು ಕೈಗೊಂಡ ಪ್ರತಿಯೊಂದು ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ
              ಸಕ್ರೀಯವಾಗಿ ಭಾಗವಹಿಸುತ್ತೇನೆ. ಸಂಸ್ಥೆಯ ಎಲ್ಲಾ ನಿಯಮಗಳನ್ನು ನಿಷ್ಠೆಯಿಂದ
              ಪಾಲಿಸುತ್ತೇನೆ ಹಾಗೂ ವೈದ್ಯರು ನಿಗದಿಪಡಿಸಿದ ದಿನಾಂಕದವರೆಗೆ ಚಿಕಿತ್ಸೆಯಲ್ಲಿ
              ಪಾಲ್ಗೊಳ್ಳುತ್ತೇನೆ.
            </i>
          </p>
          <br />
        </div>

        <p id="bi_signtxt">ಚಿಕಿತ್ಸಾರ್ಥಿಯ</p>
        <br />

        <div id="bi_signtxt1">
          <div id="bi_name1">
            <b>ಹೆಸರು</b>
            <input type="text" />
          </div>

          <div id="bi_sign1">
            <b>ಸಹಿ</b>
            <input
              type="file"
              id="bi_photo-upload"
              name="photo"
              accept="image/*"
            />
          </div>
        </div>
        <br />
        <br />

        <p>
          <i>
            ಸಂಘಟಕರ ಗಮನಕ್ಕೆ ಬಾರದೇ, ತಿಳಿಸದೇ, ಸಂಸ್ಥೆಯಿಂದ ಹೊರಗೆ ಹೋಗಿ ಯಾವುದೇ ಅನಾಹುತ
            ಸಂಭವಿಸಿ ಸಮಸ್ಯೆಯಾದಲ್ಲಿ ದಾಖಲು ಪಡಿಸಿದ ನಾವೇ ಜವಾಬ್ದಾರರು.
          </i>
        </p>
        <br />

        <p id="bi_signtxt">ದಾಖಲುಪಡಿಸಿದವರ</p>
        <br />

        <div id="bi_signtxt2">
          <div id="bi_name2">
            <b>ಹೆಸರು</b> <input type="text" />
          </div>

          <div id="bi_sign2">
            <b>ಸಹಿ</b>{" "}
            <input
              type="file"
              id="bi_photo-upload"
              name="photo"
              accept="image/*"
            />
          </div>
        </div>
        <br />

        <p id="bi_mobileNo">
          ಮೊಬೈಲ್ ನಂ. <input type="text" name="moNo" />
        </p>

        <center>
          <div className="bi_footer">
            <div className="bi_endbtn">
              <button onClick={handlePrev}> &laquo; Prev </button>
              <div class="page-number">3</div>
              <button onClick={handleNext}>Next &raquo;</button>
            </div>
          </div>
        </center>
      </div>
    </form>
  );
};

export default Form3;
