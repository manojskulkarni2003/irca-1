import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./wt2,4 (1).css";

const Form2 = () => {
  const [formData, setFormData] = useState({
    date: "",
    complaints: "",
    medication: "",
    signature: "",
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
        date: "",
        complaints: "",
        medication: "",
        signature: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const navigate = useNavigate();

  const handleNext = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/past/page3");
  };
  
  const handlePrev = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/past/page1");
  };

  const loadSavedData = () => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ border: '6px double black', padding: '10px', outline:'solid 2px black' }}> 
        <table
          style={{ width: "100%", borderCollapse: "collapse" }}
          id="medicalTable"
        >
          <thead>
            <tr>
            <th colSpan="4" style={{ textAlign: "center" }}>Medication Provided during treatment: Physical</th>

            </tr>
            <tr>
              <th style={tableCellStyle}>Date</th>
              <th style={tableCellStyle}>Complaints</th>
              <th style={tableCellStyle}>
                Medication/Reason for Containing/Change of Medication
              </th>
              <th style={tableCellStyle}>Signature</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="date"
                  className="text1"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
              </td>
              <td>
                <textarea
                  className="text1"
                  rows="30"
                  cols="30"
                  name="complaints"
                  value={formData.complaints}
                  onChange={handleInputChange}
                  style={textareaStyle}
                  margin-inline-start="auto"
                ></textarea>
              </td>
              <td>
                <textarea
                  className="text1"
                  rows="30"
                  cols="30"
                  name="medication"
                  value={formData.medication}
                  onChange={handleInputChange}
                  style={textareaStyle}
                ></textarea>
              </td>
              <td>
                <input
                  type="file"
                  id="signature"
                  accept=".jpg, .jpeg, .png, .pdf"
                  style={inputStyle}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={handlePrev} style={buttonStyle}>
            Previous
          </button>

          <button align="center">Page 2</button>

          <div style={{ textAlign: "center" }}>
            <button type="submit" style={buttonStyle}>
              Submit
            </button>
          </div>

          

          <button type="button" onClick={handleNext} style={buttonStyle}>
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

const tableCellStyle = {
  
  padding: "8px",
  textAlign: "left",
  backgroundColor: "#f2f2f2",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "8px",
  margin: "4px 0",
};

const textareaStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "8px",
  margin: "4px 0",
};

const buttonStyle = {
  marginTop: "10px",
  padding: "10px",
};

export default Form2;
