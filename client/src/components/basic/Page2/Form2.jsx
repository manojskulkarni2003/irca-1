import React, { useEffect, useState } from "react";
import "./Form2.css";
import { useNavigate } from "react-router-dom";

const Form2 = () => {
  const [formData, setFormData] = useState({
    // Reset other fields as needed
    issue1: " ",
    issue2: " ",
    issue3: " ",
    issue4: " ",
    impression: " ",
    action: " Admitted",
    address: " ",
    mobno1: { number: " ", name: " ", relation: " " },
    mobno2: [{ number: " ", name: " ", relation: " " }],
    mobno3: [{ number: " ", name: " ", relation: " " }],
    landline: " ",
    remarks: " ",
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

  const loadSavedData = () => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  };

  useEffect(() => {
    loadSavedData();
  }, []);

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
  function page1() {
    navigate("/basic/form1");
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function page3() {
    navigate("/basic/form3");
    window.scrollTo({ top: 0, behavior: "instant" });
  }
  return (
    <form onSubmit={handleSubmit}>
      {formData && (
        <div className="bi_id1">
          <div className="bi_p1">
            <b>Any issue / concerned expressed by client / Family:</b>
            <br />
            <b>1</b>
            <textarea
              className="bi_textarea"
              name="issue1"
              value={formData.issue1}
              onChange={handleInputChange}
            />
            <br />
            <b>2</b>{" "}
            <textarea
              className="bi_textarea"
              name="issue2"
              value={formData.issue2}
              onChange={handleInputChange}
            />
            <br />
            <b>3</b>
            <textarea
              className="bi_textarea"
              name="issue3"
              value={formData.issue3}
              onChange={handleInputChange}
            />
            <br />
            <b>4</b>{" "}
            <textarea
              className="bi_textarea"
              name="issue4"
              value={formData.issue4}
              onChange={handleInputChange}
            />
            <br />
            <br />
            <b>Impression of Intake counsellor: </b>
            <textarea
              className="bi_textarea"
              name="impression"
              value={formData.impression}
              onChange={handleInputChange}
              style={{ border: "none", width: "60%" }}
            />
            <br />
            <br />
            <div className="bi_radio-group">
              <b>Action taken:</b>
              <input
                type="radio"
                id="actiontakenadmitted"
                name="actiontaken"
                value="admitted"
                checked={formData.actiontaken === "admitted"}
                onChange={handleInputChange}
              />
              <label htmlFor="actiontakenadmitted">Admitted</label>

              <input
                type="radio"
                id="actiontakengivenlaterdate"
                name="actiontaken"
                value="givenlaterdate"
                checked={formData.actiontaken === "givenlaterdate"}
                onChange={handleInputChange}
              />
              <label htmlFor="actiontakengivenlaterdate">
                Given Later Date
              </label>

              <input
                type="radio"
                id="actiontakenreferral"
                name="actiontaken"
                value="referral"
                checked={formData.actiontaken === "referral"}
                onChange={handleInputChange}
              />
              <label htmlFor="actiontakenreferral">Referral</label>

              <input
                type="radio"
                id="actiontakendenialadmission"
                name="actiontaken"
                value="denialadmission"
                checked={formData.actiontaken === "denialadmission"}
                onChange={handleInputChange}
              />
              <label htmlFor="actiontakendenialadmission">
                Denial Admission
              </label>
            </div>
          </div>

          <p style={{ position: "relative", left: "50%" }}>
            <b>Address: </b>
            <textarea
              className="bi_textarea"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              style={{ border: "none", width: "40%" }}
            />
          </p>

          <hr />

          <div id="p2">
            <table className="bi_table">
              <tr className="bi_tr">
                <td className="bi_td" colSpan="5" style={{ textAlign: "left" }}>
                  Contact Phone Numbers:{" "}
                  <input type="text" style={{ width: "50%" }} />
                </td>
              </tr>
              <tr className="bi_tr">
                <td className="bi_td"></td>
                <td className="bi_td">Number</td>
                <td className="bi_td">Name</td>
                <td className="bi_td">Relation</td>
              </tr>
              <tr className="bi_tr">
                <td className="bi_td">Mob No. 1</td>
                <td className="bi_td">
                  <input type="text" />
                </td>
                <td className="bi_td">
                  <input type="text" />
                </td>
                <td className="bi_td">
                  <input type="text" />
                </td>
              </tr>
              <tr className="bi_tr">
                <td className="bi_td">Mob No. 2</td>
                <td className="bi_td">
                  <input type="text" />
                </td>
                <td className="bi_td">
                  <input type="text" />
                </td>
                <td className="bi_td">
                  <input type="text" />
                </td>
              </tr>
              <tr className="bi_tr">
                <td className="bi_td">Mob No. 3</td>
                <td className="bi_td">
                  <input type="text" />
                </td>
                <td className="bi_td">
                  <input type="text" />
                </td>
                <td className="bi_td">
                  <input type="text" />
                </td>
              </tr>
              <tr className="bi_tr">
                <td className="bi_td">Landline No. 1</td>
                <td className="bi_td">
                  <input type="text" />
                </td>
                <td className="bi_td">
                  <input type="text" />
                </td>
                <td className="bi_td">
                  <input type="text" />
                </td>
              </tr>
            </table>
          </div>

          <p>
            <b>Remarks : </b>

            <textarea className="bi_textarea" placeholder="" />
          </p>

          <br />

          <p style={{ position: "relative", left: "70%" }}>
            <b>Signature of the Counsellor</b>
            <br />
            <br />

            <input
              type="file"
              id="photo-upload"
              name="photo"
              accept="image/*"
            />
          </p>

          <center>
            <div className="footer">
              <div className="bi_endbtn">
                <button onClick={page1}> &laquo; Prev </button>
                <button onClick={page3}>Next &raquo;</button>
              </div>
            </div>
          </center>
        </div>
      )}
    </form>
  );
};

export default Form2;
