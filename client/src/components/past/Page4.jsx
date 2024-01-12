import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./wt2,4 (1).css";

const Form4 = () => {
  const [formData, setFormData] = useState({
    date2: "",
    complaints2: "",
    medication2: "",
    signature2: "",
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
        date2: "",
        complaints2: "",
        medication2: "",
        signature2: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const navigate = useNavigate();

  const handlePrev = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/past/page3");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{border: '6px double black', padding: '10px', outline:'solid 2px black'}}> 
        <table id="medicalTable" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th colSpan="4" style={{ textAlign: "center", padding: "8px", backgroundColor: "#f2f2f2" }}>
                Medication Provided during treatment: Psychiatric
              </th>
            </tr>
            <tr>
              <th style={{ padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2" }}>Date</th>
              <th style={{ padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2" }}>Complaints</th>
              <th style={{ padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2" }}>
                Medication/Reason for Containing/Change of Medication
              </th>
              <th style={{ padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2" }}>Signature</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="date"
                  className="text1"
                  name="date2"
                  value={formData.date2}
                  onChange={handleInputChange}
                  style={{ width: "100%", boxSizing: "border-box", padding: "8px", margin: "4px 0" }}
                />
              </td>
              <td>
                <textarea
                  className="text1"
                  rows="30"
                  cols="30"
                  name="complaints2"
                  value={formData.complaints2}
                  onChange={handleInputChange}
                  style={{ width: "100%", boxSizing: "border-box", padding: "8px", margin: "4px 0" }}
                  
                ></textarea>
              </td>
              <td>
                <textarea
                  className="text1"
                  rows="30"
                  cols="30"
                  name="medication2"
                  value={formData.medication2}
                  onChange={handleInputChange}
                  style={{ width: "100%", boxSizing: "border-box", padding: "8px", margin: "4px 0" }}
                ></textarea>
              </td>
              <td>
                <input
                  type="file"
                  id="signature2"
                  accept=".jpg, .jpeg, .png, .pdf"
                  style={{ width: "100%", boxSizing: "border-box", padding: "8px", margin: "4px 0" }}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={handlePrev} style={{ marginTop: "10px", padding: "10px" }}>
            Previous
          </button>
          <button align="center">Page 4</button>
          <button type="submit" style={{ marginTop: "10px", padding: "10px" }}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form4;
