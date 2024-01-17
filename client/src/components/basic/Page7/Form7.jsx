import React, { useState, useEffect } from "react";
import "./Form7.css"; // Import your component-specific CSS
import { useNavigate } from "react-router-dom";

const PhysicalLetter = () => {
  const [formData, setFormData] = useState({
    // Reset other fields as needed

    input28: " ",
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
    alert("Form submitted successfully");
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

      //   // Handle response if needed
      alert("Form submitted successfully!");
      console.log("Form data submitted:", response);

      //   Reset form after submission
      setFormData({
        input28: " ",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const navigate = useNavigate();

  const handleNext = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/basic/form7");
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const handlePrev = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/basic/form5");
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
      <div className="bi_page">
        <div>
          <div className="bi_headline">
            <b>
              <u>Physical complication at the time of Admission</u>
            </b>
          </div>

          <textarea
            name="input28"
            rows="30"
            cols="30"
            value={formData.input28}
            onChange={handleInputChange}
          />
          <br />
          <br />
          <br />
          <br />

          <div
            className="bi_file-input-container"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ float: "left", width: "50%" }}>
              <label>
                <b>
                  <u>Examined By:</u>
                </b>
              </label>
              <input
                type="file"
                id="bi_examinedBy"
                name="examinedBy"
                accept=".pdf, .doc, .docx"
              />
            </div>

            <div style={{ float: "right" }}>
              <label>
                <b>
                  <u>Signature of Family:</u>
                </b>
              </label>
              <input
                type="file"
                id="bi_signatureCounsellor"
                name="signatureCounsellor"
                accept=".pdf, .doc, .docx,.jpeg"
              />
            </div>
          </div>
        </div>
        <center>
          <div className="bi_footer">
            <div className="bi_endbtn">
              <button onClick={handlePrev}> &laquo; Prev </button>
              <button type="submit">Submit</button>
            </div>
          </div>
        </center>
      </div>
    </form>
  );
};

export default PhysicalLetter;
