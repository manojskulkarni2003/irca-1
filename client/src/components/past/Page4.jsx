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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted successfully");
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // alert("Form Submitted Successfully")

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
  //       date2: "",
  //       complaints2: "",
  //       medication2: "",
  //       signature2: "",
  //     });
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };

  /*const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/past/form4", // Update the endpoint
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
        // Show alert after successful submission
        alert("Form data submitted successfully!");

        // Add code to save data to MongoDB here (e.g., using another fetch call)

        // Clear the form data
        setFormData({
          date2: "",
          complaints2: "",
          medication2: "",
          signature2: "",
        });

        // Navigate to the next page or perform other actions as needed
        navigate("/past/page5");
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

  const navigate = useNavigate();

  const handlePrev = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/past/page3");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          margin: "80px 70px",
          border: "6px double black",
          padding: "10px",
          outline: "solid 2px black",
        }}
      >
        <table
          className="past4table"
          style={{ width: "100%", borderCollapse: "collapse" }}
          id="medicalTable"
        >
          <thead>
            <tr>
              <th
                colSpan="4"
                className="past4-th"
                style={{ textAlign: "center" }}
              >
                <h1>Medication Provided during treatment: Psychiatric</h1>
              </th>
            </tr>
            <tr>
              <th className="past4-th" style={past4tableCellStyle}>
                Date
              </th>
              <th className="past4-th" style={past4tableCellStyle}>
                Complaints
              </th>
              <th className="past4-th" style={past4tableCellStyle}>
                Medication/Reason for Containing/Change of Medication
              </th>
              <th className="past4-th" style={past4tableCellStyle}>
                Signature
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="past4-td">
                <input
                  type="date"
                  className="past4text1"
                  name="date2"
                  value={formData.date2}
                  onChange={handleInputChange}
                  style={past4inputStyle}
                />
              </td>
              <td className="past4-td">
                <textarea
                  className="past4text1"
                  rows="35"
                  cols="35"
                  name="complaints2"
                  value={formData.complaints2}
                  onChange={handleInputChange}
                  style={past4textareaStyle}
                ></textarea>
              </td>
              <td className="past4-td">
                <textarea
                  className="past4text1"
                  rows="35"
                  cols="35"
                  name="medication2"
                  value={formData.medication2}
                  onChange={handleInputChange}
                  style={past4textareaStyle}
                ></textarea>
              </td>
              <td className="past4-td">
                <input
                  type="file"
                  id="signature2"
                  accept=".jpg, .jpeg, .png, .pdf"
                  style={past4inputStyle}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div style={{ display: "flex", justifyContent: "space-between" }}></div>

        <div className="ph_endbtn ph_display">
          <button
            className="past4button"
            type="button"
            onClick={handlePrev}
            style={past4buttonStyle}
          >
            &laquo; Prev
          </button>
          {/* <button style={past4buttonStyle} align="center">Page 2</button> */}
          <div style={{ textAlign: "center" }}>
            <button
              className="past4button"
              type="submit"
              style={past4buttonStyle}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const past4inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "8px",
  margin: "4px 0",
};

const past4textareaStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "8px",
  margin: "4px 0",
};

const past4tableCellStyle = {
  padding: "8px",
  textAlign: "left",
  backgroundColor: "#f2f2f2",
};

const past4buttonStyle = {
  marginTop: "10px",
  padding: "10px",
};

export default Form4;
