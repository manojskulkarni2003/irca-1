import React, { useState, useEffect } from "react";
import "./Form5.css"; // Import your component-specific CSS
import { useNavigate } from "react-router-dom";

const YourComponent = () => {
  const [formData, setFormData] = useState({
    // Reset other fields as needed
    input16: " ",
    input17: " ",
    input18: " ",
    input19: " ",

    input20: " ",
    input21: " ",
    input22: " ",

    input23: " ",
    input24: " ",
    input25: " ",
    input26: " ",
    input27: " ",
    // input28:" ",
    // input29:" ",
    // input30:" ",
    // input31:" ",
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
    navigate("/basic/form6");
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const handlePrev = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/basic/form4");
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const loadSavedData = () => {
    const savedData = localStorage.getItem("formData");
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
      <div className="bi_id5">
        <p className="bi_highlight">
          I agree to identify and absolve the treatment centre for the following
          situations
          <br />
          a. Sustaining injury/fatal or otherwise while trying to escape from
          the centre/trying to procure Drugs
          <br />
          b. Attempting to commit suicide
          <br />
          c. During withdrawal, leading to DT and becoming violent or suicidal
          <br />
          d. Consuming Alcohol with Disulfiram and developing fatal reactions
          <br />
          e. Developing unexpected side effects or rare complications while
          taking medicines for withdrawal / depression/psychiatric
          problems/opportunistic infections due to HIV.
        </p>
        Specially Note:
        <br />
        ವಿಶೇಷ ಸೂಚನೆ:
        <br />
        <br />
        <br />
        <br />
        Name
        <input
          type="text"
          placeholder=" "
          name="input16"
          value={formData.input16}
          onChange={handleInputChange}
        />
        Sign
        <input type="file" />
        Mobile No.:
        <input
          type="number"
          placeholder=" "
          name="input17"
          value={formData.input17}
          onChange={handleInputChange}
          style={{ width: "150px" }}
        />
        <br />
        7.{" "}
        <input
          type="number"
          placeholder=" "
          name="input18"
          value={formData.input18}
          onChange={handleInputChange}
          style={{ width: "70px" }}
        />
        ದಿನ
        <input
          type="number"
          placeholder=" "
          name="input19"
          value={formData.input19}
          onChange={handleInputChange}
          style={{ width: "70px" }}
        />
        ತಿಂಗಳ, 20
        <input
          type="number"
          placeholder=" "
          name="input20"
          value={formData.input20}
          onChange={handleInputChange}
          style={{ width: "70px" }}
        />
        ರಂದು ನೆರವೇರಿಸಿದ ಘೋಷಣೆ ಮತ್ತು ನಷ್ಟಪರಿಹಾರ' ದಲ್ಲಿ ನಾವು ಮಾಡಿದ ಎಲ್ಲ ಹೇಳಿಕೆಗಳು
        ಮತ್ತು ಘೋಷಣೆಗಳ ಬಗ್ಗೆ ನನಗೆ/ ನಮಗೆ ಅರಿವು ಇರುತ್ತದೆ. ಈ ಮೂಲಕ ನಾನು / ನಾವು ಅದನ್ನು
        ದೃಢೀಕರಿಸುತ್ತಿದ್ದೇನೆ/ವೆ. ಮತ್ತು ಸ್ವೀಕರಿಸುತ್ತಿದ್ದೇನೆ/ವೆ. ಅಲ್ಲದೆ ನಾನು / ನಾವು
        ನೆರವೇರಿಸಿದ / ಭರ್ತಿ ಮಾಡಿದ ಎಲ್ಲಾ ಹೇಳಿಕೆಗಳ ಮತ್ತು ಘೋಷನೆಗಳ ಬಗ್ಗೆ ನನಗೆ / ನಮಗೆ
        ಅರಿವು ಇರುತ್ತದೆ. ನಾನು/ನಾವು ಈ ಮೂಲಕ ಆದನ್ನು ದೃಢೀಕರಿಸುತ್ತಿದ್ದೇನೆ/ವೆ ಮತ್ತು
        ಸ್ವೀಕರಿಸುತ್ತಿದ್ದೇನೆ/ವೆ.
        <br />
        <p className="bi_highlight">
          I/We state that am/are aware of all the statements and declarations
          made by me/us in the Declaration- Cum- indemnity executed by me/us on
          <input
            type="number"
            placeholder=" "
            name="input21"
            value={formData.input21}
            onChange={handleInputChange}
            style={{ width: "70px" }}
          />
          day of
          <input
            type="number"
            placeholder=" "
            name="input22"
            value={formData.input22}
            onChange={handleInputChange}
            style={{ width: "70px" }}
          />
          20
          <input
            type="number"
            placeholder=" "
            name="input23"
            value={formData.input23}
            onChange={handleInputChange}
            style={{ width: "70px" }}
          />{" "}
          and I/We hereby confirm and rectify the same. I/We further state that
          I am/are aware of all the statements, declarations and forms and I/We
          hereby confirm and executed/filled in by me and I/We hereby confirm
          and rectify the same.
        </p>
        <br />
        <br />
        8. ನಾನು / ನಾವು ಈ ಘೋಷಣೆಯನ್ನು ಯಾವುದೇ ಬಲವಂತ, ಒತ್ತಾಯ ಅಥವಾ ಅನಗತ್ಯ ಪ್ರಭಾವಕ್ಕೆ
        ಒಳಗಾಗದೆ, ವಿಧಿಬದ್ಧವಾಗಿ ಮತ್ತು ವಿಶ್ವಾಸಪೂರ್ವಕವಾಗಿ ಮಾಡುತ್ತಿದ್ದೇನೆ/ವೆ ಮತ್ತು
        ಮೇಲೆ ನಾನು / ನಾವು ಮಾಡಿದ ಹೇಳಿಕೆಗಳು ಹಾಗೂ ಘೋಷಣೆಗಳಿಗೆ ಪೂರ್ಣ ಜಾರಿ ಮತ್ತು
        ಪರಿಣಾಮಗಳನ್ನು ಕೊಡತಕ್ಕದ್ದು.
        <br />
        <p className="bi_highlight">
          I/We make this declaration solemnly and sincerely without any force,
          coercion or undue influence and the full force and effect should be
          given to all the statements and declarations made by me as herein
          above.
        </p>
        <br />
        <br />
        <h3 style={{ fontStyle: "normal" }}>
          Solemnly declared at Hope Recovery Centre, Belagavi.
        </h3>
        <br />
        <h3 style={{ fontStyle: "normal" }}>
          This{" "}
          <input
            type="text"
            name="input24"
            value={formData.input24}
            onChange={handleInputChange}
          />{" "}
          day of{" "}
          <input
            type="text"
            name="input25"
            value={formData.input25}
            onChange={handleInputChange}
          />
          <span style={{ float: "right" }}>
            Signature
            <input
              type="file"
              id="bi_photo-upload"
              name="photo"
              accept="image/*"
              className="bi_norm"
            />
          </span>
        </h3>
        <h3 style={{ fontStyle: "normal" }}>Names :</h3>
        <br />
        <br />
        <h3 style={{ fontStyle: "normal" }}>
          1){" "}
          <input
            type="text"
            name="input26"
            value={formData.input26}
            onChange={handleInputChange}
          />
          <span style={{ float: "right" }}>
            Signature
            <input
              type="file"
              id="bi_photo-upload"
              name="photo"
              accept="image/*"
              className="bi_norm"
            />
          </span>
        </h3>
        <br />
        <h3 style={{ fontStyle: "normal" }}>
          2){" "}
          <input
            type="text"
            name="input27"
            value={formData.input27}
            onChange={handleInputChange}
          />
          <span style={{ float: "right" }}>
            Signature
            <input
              type="file"
              id="bi_photo-upload"
              name="photo"
              accept="image/*"
              className="bi_norm"
            />
          </span>
        </h3>
        <br />
        <h3 style={{ fontStyle: "normal", fontSize: "normal" }}>
          <span style={{ float: "right" }}>
            Signature of Staff
            <input
              type="file"
              id="bi_photo-upload"
              name="photo"
              accept="image/*"
              className="bi_norm"
            />
          </span>
        </h3>
        <br />
        <br />
        <div style={{ borderTop: "4px solid #000", margin: "10px 0" }}></div>
        <br />
        ಸ್ವೀಕೃತಿ :
        <br />
        "ಘೋಷಣೆ ಮತ್ತು ನಷ್ಟ ಪರಿಹಾರ" ಬಾಂಡವನ್ನು 'ಹೋಪ್' - ಅಮಲು ಚಿಕಿತ್ಸಾ ಹಾಗೂ
        ಪುನರ್ವಸತಿ ಕೇಂದ್ರ, ಬೆಳಗಾವಿ ಒದಗಿಸಿರುತ್ತದೆ.
        <br />
        <h3 style={{ fontStyle: "normal" }}>Acknowledgment</h3>
        <h3 style={{ fontStyle: "normal" }}>
          *The Declaration - cum - indemnity Bond has been provided by: Hope
          Recovery Centre.
        </h3>
        <center>
          <div className="bi_footer">
            <div className="bi_endbtn">
              <button onClick={handlePrev}> &laquo; Prev </button>
              <button onClick={handleNext}>Next &raquo;</button>
            </div>
          </div>
        </center>
      </div>
    </form>
  );
};

export default YourComponent;
