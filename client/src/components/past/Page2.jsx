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
  //       date: "",
  //       complaints: "",
  //       medication: "",
  //       signature: "",
  //     });
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };

  const navigate = useNavigate();

  const handleNext = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/past/page3");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  /*const handleNext = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/past/form2", // Update the endpoint
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
        navigate("/past/page3");
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
    navigate("/past/page1");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <form>
      <div
        style={{
          margin: "80px 70px",
          border: "6px double black",
          padding: "10px",
          outline: "solid 2px black",
        }}
      >
        <table
          className="past2table"
          style={{ width: "100%", borderCollapse: "collapse" }}
          id="medicalTable"
        >
          <thead>
            <tr>
              <th colSpan="4" style={{ textAlign: "center" }}>
                <h1>Medication Provided during treatment: Physical</h1>
              </th>
            </tr>
            <tr>
              <th className="past2-th" style={past2tableCellStyle}>
                Date
              </th>
              <th className="past2-th" style={past2tableCellStyle}>
                Complaints
              </th>
              <th className="past2-th" style={past2tableCellStyle}>
                Medication/Reason for Containing/Change of Medication
              </th>
              <th className="past2-th" style={past2tableCellStyle}>
                Signature
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="past2-td">
                <input
                  type="date"
                  className="past2text1"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  style={past2inputStyle}
                />
              </td>
              <td className="past2-td">
                <textarea
                  className="past2text1"
                  rows="35"
                  cols="35"
                  name="complaints"
                  value={formData.complaints}
                  onChange={handleInputChange}
                  style={past2textareaStyle}
                  margin-inline-start="auto"
                ></textarea>
              </td>
              <td className="past2-td">
                <textarea
                  className="past2text1"
                  rows="35"
                  cols="35"
                  name="medication"
                  value={formData.medication}
                  onChange={handleInputChange}
                  style={past2textareaStyle}
                ></textarea>
              </td>
              <td className="past2-td">
                <input
                  type="file"
                  id="signature"
                  accept=".jpg, .jpeg, .png, .pdf"
                  style={past2inputStyle}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div style={{ display: "flex", justifyContent: "space-between" }}></div>
        <div className="ph_endbtn ph_display">
          <button
            className="past2button"
            type="button"
            onClick={handlePrev}
            style={past2buttonStyle}
          >
            &laquo; Prev
          </button>

          {/* <button style={past2buttonStyle} align="center">Page 2</button> */}

          {/* <div style={{ textAlign: "center" }}>
            <button className="past2button" type="submit" style={past2buttonStyle}>
              Submit
            </button>
          </div> */}
          <div class="page-number">16</div>
          <button
            className="past2button"
            type="button"
            onClick={handleNext}
            style={past2buttonStyle}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    </form>
  );
};

const past2tableCellStyle = {
  padding: "8px",
  textAlign: "left",
  backgroundColor: "#f2f2f2",
};

const past2inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "8px",
  margin: "4px 0",
};

const past2textareaStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "8px",
  margin: "4px 0",
};

const past2buttonStyle = {
  marginTop: "10px",
  padding: "10px",
};

export default Form2;
