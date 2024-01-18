import React, { useState } from "react";
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(
  //       "http://localhost:5000/past/api/submitFormData",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );

  //     console.log("Form data submitted:", response);

  //     setFormData({
  //       name: "",
  //       age: "",
  //       dateOfAdmission: "",
  //       historyOfAlcoholismOrSubstanceAbuse: "",
  //       physicalComplications: "",
  //       pastHistory: "",
  //       psychiatricProblems: "",
  //       withdrawalSymptoms: "",
  //       treatment: "",
  //     });
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleNext = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/past/page4");
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  /*const handleNext = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/past/form3", // Update the endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Form data submitted successfully");
        localStorage.setItem("formData", JSON.stringify(formData));
        navigate("/past/page4");
        window.scrollTo({ top: 0, behavior: "instant" });
      } else {
        console.error("Error submitting form:", response.statusText);
        // Handle error appropriately (e.g., show error message to the user)
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error appropriately (e.g., show error message to the user)
    }
  };*/
  const handlePrev = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/past/page2");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <form className="past3form">
      <div
        className="past3book"
        style={{
          margin: "80px 70px",
          border: "6px double black",
          padding: "10px",
          outline: "solid 2px black",
        }}
      >
        <div className="past3page">
          <h1 className="past3-head" align="center" margin-bottom="20px">
            PSYCHIATRIC HISTORY
          </h1>
          <label
            className="past3label"
            style={{ display: "inline-block", width: "45px" }}
          ></label>

          <label className="past3label" style={{ display: "inline-block" }}>
            {" "}
            Name :
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            style={{ marginRight: "100px" }}
            value={formData.name}
            onChange={handleInputChange}
          />

          <label className="past3label" style={{ display: "inline-block" }}>
            Age :
          </label>
          <input
            type="text"
            id="age"
            name="age"
            placeholder="Enter your age"
            style={{ marginRight: "100px" }}
            value={formData.age}
            onChange={handleInputChange}
          />

          <label className="past3label" style={{ display: "inline-block" }}>
            Date of Admission :
          </label>
          <input
            type="date"
            id="date"
            name="dateOfAdmission"
            style={{ marginRight: "100px" }}
            value={formData.dateOfAdmission}
            onChange={handleInputChange}
          />

          <ol className="past3-ol" start="1">
            <li
              className="past3-li"
              style={{ display: "inline-block", width: "520px" }}
            >
              History of Alcoholism/Substance Abuse:
            </li>
            <br />
            <input
              id="historyOfAlcoholismOrSubstanceAbuse"
              name="historyOfAlcoholismOrSubstanceAbuse"
              type="text"
              value={formData.historyOfAlcoholismOrSubstanceAbuse}
              onChange={handleInputChange}
            />
            <br />
            <br />
            <br />

            <li
              className="past3-li"
              style={{ display: "inline-block", width: "330px" }}
            >
              Physical complications:
            </li>
            <br />
            <input
              name="physicalComplications"
              type="text"
              value={formData.physicalComplications}
              onChange={handleInputChange}
            />
            <br />
            <br />
            <br />

            <li
              className="past3-li"
              style={{ display: "inline-block", width: "180px" }}
            >
              Past History:
            </li>
            <br />
            <input
              id="physicalComplications"
              name="pastHistory"
              type="text"
              value={formData.pastHistory}
              onChange={handleInputChange}
            />
            <br />
            <br />
            <br />
            <li
              className="past3-li"
              style={{ display: "inline-block", width: "300px" }}
            >
              Psychiatric problems:
            </li>
            <br />
            <input
              id="psychiatricProblems"
              name="psychiatricProblems"
              type="text"
              value={formData.psychiatricProblems}
              onChange={handleInputChange}
            />
            <br />
            <br />
            <br />
            <li
              className="past3-li"
              style={{ display: "inline-block", width: "320px" }}
            >
              Withdrawal symptoms:
            </li>
            <br />
            <input
              id="withdrawalSymptoms"
              type="text"
              name="withdrawalSymptoms"
              value={formData.withdrawalSymptoms}
              onChange={handleInputChange}
            />
            <br />
            <br />
            <br />
            <li
              className="past3-li"
              style={{ display: "inline-block", width: "150px" }}
            >
              Treatment:
            </li>
            <br />
            <input
              id="treatment"
              name="treatment"
              type="text"
              value={formData.treatment}
              onChange={handleInputChange}
            />
          </ol>
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
          ></div>
          <div className="ph_endbtn ph_display">
            <button
              className="past3button"
              type="button"
              onClick={handlePrev}
              style={past3buttonStyle}
            >
              &laquo; Prev
            </button>

            {/* <button style={past3buttonStyle} align="center">Page 3</button> */}

            {/* <div style={{ textAlign: "center" }}>
              <button className="past3button" type="submit" style={past3buttonStyle}>
                Submit
              </button>
            </div> */}
            <div class="page-number">17</div>
            <button
              className="past3button"
              type="button"
              onClick={handleNext}
              style={past3buttonStyle}
            >
              Next &raquo;
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const past3buttonStyle = {
  marginTop: "10px",
  padding: "10px",
};

export default Form3;
