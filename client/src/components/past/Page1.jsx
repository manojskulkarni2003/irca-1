import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./wt1.css";

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
      const response = await fetch("http://localhost:5000/past/form1", {
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
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/past/page2");
    window.scrollTo({ top: 0, behavior: "instant" });
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
  // ---------------------------------------
  // const [formData, setFormData] = useState({
  //   t1: "",
  //   t2: "",
  //   t3: "",
  //   t4: "",
  //   c1: [],
  //   respiratory_system: "",
  //   cardiovascular_system: "",
  //   gastrointestinal_system: "",
  //   nervous_system: "",
  //   incident: "",
  //   incidentDescription: "",
  //   actionTaken: "",
  //   severity: "",
  //   investigation: "",
  //   certificateDetails: "",
  // });

  // const navigate = useNavigate();

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleNext = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:5000/past/form1", // Update the endpoint
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );

  //     if (response.ok) {
  //       console.log("Form data submitted successfully");
  //       // localStorage.setItem("formData", JSON.stringify(formData));
  //       navigate("/past/page2");
  //       window.scrollTo({ top: 0, behavior: "instant" });
  //     } else {
  //       console.error("Error submitting form:", response.statusText);
  //       // Handle error appropriately (e.g., show error message to the user)
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     // Handle error appropriately (e.g., show error message to the user)
  //   }
  // };
  // -----------------------------------
  // const loadSavedData = () => {
  //   const savedData = localStorage.getItem("formData");
  //   if (savedData) {
  //     setFormData(JSON.parse(savedData));
  //   }
  // };

  // useEffect(() => {
  //   loadSavedData();
  // }, []);
  // -----------------------------------------------------
  return (
    <form>
      <div
        id="past1page1"
        style={{
          margin: "80px 70px",
          border: "6px double black",
          padding: "10px",
          outline: "solid 2px black",
        }}
      >
        {/* <h1 align="center"><b>PHYSICAL EXAMINATION OF THE DAY OF ADMISSION</b></h1> */}
        <h2 style={{ fontWeight: "bold" }}>4. Past History</h2>
        <br />
        <div id="past1form">
          <form>
            <div style={{ display: "flex" }}>
              <label className="past1l1" style={{ display: "inline-block" }}>
                Pulse Rate:
              </label>
              <input
                type="text"
                id="t1"
                name="t1"
                style={{ marginRight: "102px" }}
                value={formData.t1}
                onChange={handleInputChange}
              />

              <label className="past1l1" style={{ display: "inline-block" }}>
                Blood Pressure:
              </label>
              <input
                type="text"
                id="t2"
                name="t2"
                style={{ marginRight: "102px" }}
                value={formData.t2}
                onChange={handleInputChange}
              />

              <label className="pastl1" style={{ display: "inline-block" }}>
                Temperature:
              </label>
              <input
                type="text"
                id="t3"
                name="t3"
                style={{ marginRight: "102px" }}
                value={formData.t3}
                onChange={handleInputChange}
              />

              <label className="past1l1" style={{ display: "inline-block" }}>
                Weight:
              </label>
              <input
                type="text"
                id="t4"
                name="t4"
                style={{ marginRight: "102px" }}
                value={formData.t4}
                onChange={handleInputChange}
              />
            </div>

            <br />
          </form>
        </div>
        <form>
          <label class="past1l1">
            <b>Which of the following symptoms are present during admission:</b>
          </label>
          <br />
          <div id="past1-div-body" align="left">
            <div class="past1div">
              <ul className="past1-ul">
                <li className="past1-li">
                  <label class="past1l1">• Anemia</label>{" "}
                  <input
                    type="checkbox"
                    name="c1"
                    id="c1"
                    value={formData.c1}
                    onChange={handleInputChange}
                  />
                </li>
                <li className="past1-li">
                  <label class="past1l1">• Lymph Nodes</label>{" "}
                  <input
                    type="checkbox"
                    name="c1"
                    id="c1"
                    value={formData.c1}
                    onChange={handleInputChange}
                  />
                </li>
                <li className="past1-li">
                  <label class="past1l1">• Glossitis</label>{" "}
                  <input
                    type="checkbox"
                    name="c1"
                    id="c1"
                    value={formData.c1}
                    onChange={handleInputChange}
                  />
                </li>
                <li className="past1-li">
                  <label class="past1l1">• Flushed Face</label>{" "}
                  <input
                    type="checkbox"
                    name="c1"
                    id="c1"
                    value={formData.c1}
                    onChange={handleInputChange}
                  />
                </li>
                <li className="past1-li">
                  <label class="past1l1">• Palmar Erythema</label>{" "}
                  <input
                    type="checkbox"
                    name="c1"
                    id="c1"
                    value={formData.c1}
                    onChange={handleInputChange}
                  />
                </li>
                <li className="past1-li">
                  <label class="past1l1">• Pedal Edema</label>{" "}
                  <input
                    type="checkbox"
                    name="c1"
                    id="c1"
                    value={formData.c1}
                    onChange={handleInputChange}
                  />
                </li>
                <li className="past1-li">
                  <label class="past1l1">• Tremors</label>{" "}
                  <input
                    type="checkbox"
                    name="c1"
                    id="c1"
                    value={formData.c1}
                    onChange={handleInputChange}
                  />
                </li>
              </ul>
            </div>

            <div class="past1div">
              <ul className="past1-ul">
                <li className="past1-li">
                  <label class="past1l1">• Jaundice</label>{" "}
                  <input
                    type="checkbox"
                    name="c1"
                    id="c1"
                    value={formData.c1}
                    onChange={handleInputChange}
                  />
                </li>
                <li className="past1-li">
                  <label class="past1l1">• Loss of Body hair</label>{" "}
                  <input
                    type="checkbox"
                    name="c1"
                    id="c1"
                    value={formData.c1}
                    onChange={handleInputChange}
                  />
                </li>
                <li className="past1-li">
                  <label class="past1l1">• Wasting of muscles</label>{" "}
                  <input
                    type="checkbox"
                    name="c1"
                    id="c1"
                    value={formData.c1}
                    onChange={handleInputChange}
                  />
                </li>
                <li className="past1-li">
                  <label class="past1l1">• Abscess</label>{" "}
                  <input
                    type="checkbox"
                    name="c1"
                    id="c1"
                    value={formData.c1}
                    onChange={handleInputChange}
                  />
                </li>
                <li className="past1-li">
                  <label class="past1l1">• Hallucination</label>{" "}
                  <input
                    type="checkbox"
                    name="c1"
                    id="c1"
                    value={formData.c1}
                    onChange={handleInputChange}
                  />
                </li>
              </ul>
            </div>

            <div class="past1div" id="past1divOther">
              <ul className="past1-ul">
                <li className="past1-li">
                  <label class="past1l1">• Malnutrition</label>{" "}
                  <input
                    type="checkbox"
                    name="c1"
                    id="c1"
                    value={formData.c1}
                    onChange={handleInputChange}
                  />
                </li>
                <li className="past1-li">
                  <label class="past1l1">• Clubbing of nails</label>{" "}
                  <input
                    type="checkbox"
                    name="c1"
                    id="c1"
                    value={formData.c1}
                    onChange={handleInputChange}
                  />
                </li>
                <li className="past1-li">
                  <label class="past1l1">• Spider Naevi</label>{" "}
                  <input
                    type="checkbox"
                    name="c1"
                    id="c1"
                    value={formData.c1}
                    onChange={handleInputChange}
                  />
                </li>
                <li className="past1-li">
                  <label class="past1l1">• Gynaecomastia</label>{" "}
                  <input
                    type="checkbox"
                    name="c1"
                    id="c1"
                    value={formData.c1}
                    onChange={handleInputChange}
                  />
                </li>
                <li className="past1-li">
                  <label class="past1l1">• Injection marks</label>{" "}
                  <input
                    type="checkbox"
                    name="c1"
                    id="c1"
                    value={formData.c1}
                    onChange={handleInputChange}
                  />
                </li>
              </ul>
            </div>
          </div>
          <p id="past1bold">
            Record abnormalities, if any, on examination of the following
          </p>
          <table className="past1table" style={{ width: "28%" }}>
            <thead>
              <tr>
                <th className="past1-th">System</th>
                <th className="past1-th">YES</th>
                <th className="past1-th">NO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="past1-td">Respiratory System</td>
                <td className="past1-td">
                  <input
                    type="radio"
                    name="respiratory_system"
                    value="Yes"
                    checked={formData.respiratory_system === "Yes"}
                    onChange={handleInputChange}
                  />
                </td>
                <td className="past1-td">
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
                <td className="past1-td">Cardiovascular System</td>
                <td className="past1-td">
                  <input
                    type="radio"
                    name="cardiovascular_system"
                    value="Yes"
                    checked={formData.cardiovascular_system === "Yes"}
                    onChange={handleInputChange}
                  />
                </td>
                <td className="past1-td">
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
                <td className="past1-td">Gastrointestinal System</td>
                <td className="past1-td">
                  <input
                    type="radio"
                    name="gastrointestinal_system"
                    value="Yes"
                    checked={formData.gastrointestinal_system === "Yes"}
                    onChange={handleInputChange}
                  />
                </td>
                <td className="past1-td">
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
                <td className="past1-td">Nervous System</td>
                <td className="past1-td">
                  <input
                    type="radio"
                    name="nervous_system"
                    value="Yes"
                    checked={formData.nervous_system === "Yes"}
                    onChange={handleInputChange}
                  />
                </td>
                <td className="past1-td">
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
        <br />
        <br />
        <form>
          <label className="past1l1">
            <b>Any untoward incident during treatment</b>
          </label>

          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              className="radio"
              type="radio"
              name="incident"
              value="Yes"
              checked={formData.incident === "Yes"}
              onChange={handleInputChange}
            />
            <label className="past1l1">
              <b>Yes</b>
            </label>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              className="radio"
              type="radio"
              name="incident"
              value="No"
              checked={formData.incident === "No"}
              onChange={handleInputChange}
            />
            <label className="past1l1">
              <b>No</b>
            </label>
          </div>
        </form>
        <br />
        <label class="past1l1">If yes, describe the incident: </label>
        <input
          placeholder="Enter description"
          class="past1text"
          type="text"
          name="incidentDescription"
          value={formData.incidentDescription}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <br />
        <label class="past1l1">Action taken: </label>
        <input
          placeholder="Enter action"
          class="past1text"
          type="text"
          name="actionTaken"
          value={formData.actionTaken}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <br />
        <label class="past1l1">Impression of counselor: </label>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label className="past1text1" style={{ marginLeft: "5px" }}>
              Denial
            </label>
            <input
              className="past1text1"
              name="severity"
              type="radio"
              value="Denial"
              checked={formData.severity === "Denial"}
              onChange={handleInputChange}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <label className="past1text1" style={{ marginLeft: "5px" }}>
              Mild
            </label>
            <input
              className="past1text1"
              name="severity"
              type="radio"
              value="Mild"
              checked={formData.severity === "Mild"}
              onChange={handleInputChange}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <label className="past1text1" style={{ marginLeft: "5px" }}>
              Moderate
            </label>
            <input
              className="past1text1"
              name="severity"
              type="radio"
              value="Moderate"
              checked={formData.severity === "Moderate"}
              onChange={handleInputChange}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <label className="past1text1" style={{ marginLeft: "5px" }}>
              Severe
            </label>
            <input
              className="past1text1"
              name="severity"
              type="radio"
              value="Severe"
              checked={formData.severity === "Severe"}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <br />
        <br />
        <br />

        <label class="past1l1">
          <b>Investigation: </b>
        </label>

        <input
          placeholder="Enter description"
          class="past1text"
          type="text"
          name="investigation"
          value={formData.investigation}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <br />

        <label class="past1l1">Certificate issued(details) :</label>
        <input
          placeholder="Enter description"
          class="past1text"
          type="text"
          name="certificateDetails"
          value={formData.certificateDetails}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <br />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* <div style={{ textAlign: "center" }}>
            <button type="submit" style={past1buttonStyle}>
              Submit
            </button>
          </div> */}
          {/* <button style={past1buttonStyle} align="center">Page 1</button> */}
        </div>
        <div className="ph_endbtn ph_display">
          <button style={past1buttonStyle} onClick={handleNext}>
            Next &raquo;
          </button>
        </div>
      </div>
    </form>
  );
};

const past1buttonStyle = {
  marginTop: "10px",
  padding: "10px",
};

export default IntakeForm;
