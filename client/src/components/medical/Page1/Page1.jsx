import React, { useState } from "react";
import "./Page1.css";
import { useNavigate } from "react-router-dom";

function Page1() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    regNo: "",
    name: "",
    age: "",
    dateOfRegistration: "",
    alcoholDrugAbused: {
      depressants: {
        ageOfFirstUse: "",
        yearsOfUse: "",
        yearsOfExcessiveUse: "",
        specificType: "",
        routeOfAdministration: "",
        frequencyLast30Days: "",
        quantityLast30Days: "",
        pastUse: "",
      },
      narcoticAnalgesic: {
        ageOfFirstUse: "",
        yearsOfUse: "",
        yearsOfExcessiveUse: "",
        specificType: "",
        routeOfAdministration: "",
        frequencyLast30Days: "",
        quantityLast30Days: "",
        pastUse: "",
      },
      cannabis: {
        ageOfFirstUse: "",
        yearsOfUse: "",
        yearsOfExcessiveUse: "",
        specificType: "",
        routeOfAdministration: "",
        frequencyLast30Days: "",
        quantityLast30Days: "",
        pastUse: "",
      },
      stimulants: {
        ageOfFirstUse: "",
        yearsOfUse: "",
        yearsOfExcessiveUse: "",
        specificType: "",
        routeOfAdministration: "",
        frequencyLast30Days: "",
        quantityLast30Days: "",
        pastUse: "",
      },
      hallucinogens: {
        ageOfFirstUse: "",
        yearsOfUse: "",
        yearsOfExcessiveUse: "",
        specificType: "",
        routeOfAdministration: "",
        frequencyLast30Days: "",
        quantityLast30Days: "",
        pastUse: "",
      },
      inhalants: {
        ageOfFirstUse: "",
        yearsOfUse: "",
        yearsOfExcessiveUse: "",
        specificType: "",
        routeOfAdministration: "",
        frequencyLast30Days: "",
        quantityLast30Days: "",
        pastUse: "",
      },
      substanceNotClassified: {
        ageOfFirstUse: "",
        yearsOfUse: "",
        yearsOfExcessiveUse: "",
        specificType: "",
        routeOfAdministration: "",
        frequencyLast30Days: "",
        quantityLast30Days: "",
        pastUse: "",
      },
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDrugDetailsInputChange = (drugCategory, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      alcoholDrugAbused: {
        ...prevData.alcoholDrugAbused,
        [drugCategory]: {
          ...prevData.alcoholDrugAbused[drugCategory],
          [field]: value,
        },
      },
    }));
  };
  const handleNext = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/medical/page2");
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/medical/api/submitFormData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Form data submitted:", response);

      setFormData({
        regNo: "",
        name: "",
        age: "",
        dateOfRegistration: "",
        alcoholDrugAbused: {
          depressants: {
            ageOfFirstUse: "",
            yearsOfUse: "",
            yearsOfExcessiveUse: "",
            specificType: "",
            routeOfAdministration: "",
            frequencyLast30Days: "",
            quantityLast30Days: "",
            pastUse: "",
          },
          narcoticAnalgesic: {
            ageOfFirstUse: "",
            yearsOfUse: "",
            yearsOfExcessiveUse: "",
            specificType: "",
            routeOfAdministration: "",
            frequencyLast30Days: "",
            quantityLast30Days: "",
            pastUse: "",
          },
          cannabis: {
            ageOfFirstUse: "",
            yearsOfUse: "",
            yearsOfExcessiveUse: "",
            specificType: "",
            routeOfAdministration: "",
            frequencyLast30Days: "",
            quantityLast30Days: "",
            pastUse: "",
          },
          stimulants: {
            ageOfFirstUse: "",
            yearsOfUse: "",
            yearsOfExcessiveUse: "",
            specificType: "",
            routeOfAdministration: "",
            frequencyLast30Days: "",
            quantityLast30Days: "",
            pastUse: "",
          },
          hallucinogens: {
            ageOfFirstUse: "",
            yearsOfUse: "",
            yearsOfExcessiveUse: "",
            specificType: "",
            routeOfAdministration: "",
            frequencyLast30Days: "",
            quantityLast30Days: "",
            pastUse: "",
          },
          inhalants: {
            ageOfFirstUse: "",
            yearsOfUse: "",
            yearsOfExcessiveUse: "",
            specificType: "",
            routeOfAdministration: "",
            frequencyLast30Days: "",
            quantityLast30Days: "",
            pastUse: "",
          },
          substanceNotClassified: {
            ageOfFirstUse: "",
            yearsOfUse: "",
            yearsOfExcessiveUse: "",
            specificType: "",
            routeOfAdministration: "",
            frequencyLast30Days: "",
            quantityLast30Days: "",
            pastUse: "",
          },
        },
      });

      navigate("/PatientInformation");
      window.scrollTo({ top: 0, behavior: 'instant' });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div id="divv2">
      <form id="ff1" onSubmit={handleSubmit}>
        <h2 style={{fontWeight:'bold'}}>3.Medical Form</h2>
        <div id="divv1">
          <label>Reg. No. : </label>
          <input
            type="number"
            name="regNo"
            value={formData.regNo}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <br />

        <label>Name : </label>
        <input
          type="text"
          className="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label>Age : </label>
        <input
          type="number"
          className="age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
        <label>Date Of Registration : </label>
        <input
          type="date"
          name="dateOfRegistration"
          value={formData.dateOfRegistration}
          onChange={handleInputChange}
        />
        <br />
        <br />

        <h3>Drinking/Drug history</h3>
        <p>Details of Alcohol/Drug abused</p>
        <br />
        <table id="tt" className="borde">
          <thead id="thead">
            <tr>
              <th id="th1">Drug</th>
              <th id="th1">Age of first use</th>
              <th id="th1">Years of use</th>
              <th id="th1">Years of excessive use</th>
              <th id="th1">Specific type of drugs</th>
              <th id="th1">Route of administration</th>
              <th id="th1">Frequency of use in last 30 days</th>
              <th id="th1">Quantity used in last 30 Days</th>
              <th id="th1">Past use if any</th>
            </tr>
          </thead>
          <tbody id="tbody">
            <tr>
              <th id="th1">
                Depressants, Alcohol, Tranquilizers, Sedatives, Hypnotics,
                Tobacco, Panmasala
              </th>
              <td id="td1">
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.depressants.ageOfFirstUse}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "depressants",
                      "ageOfFirstUse",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.depressants.yearsOfUse}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "depressants",
                      "yearsOfUse",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.depressants.yearsOfExcessiveUse
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "depressants",
                      "yearsOfExcessiveUse",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.depressants.specificType}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "depressants",
                      "specificType",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.depressants.routeOfAdministration
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "depressants",
                      "routeOfAdministration",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.depressants.frequencyLast30Days
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "depressants",
                      "frequencyLast30Days",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.depressants.quantityLast30Days
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "depressants",
                      "quantityLast30Days",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.depressants.pastUse}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "depressants",
                      "pastUse",
                      e.target.value
                    )
                  }
                />
              </td>
            </tr>

            <tr>
              <th id="th1">
                Narcotic Analgesic, Opium, Heroin/Brown Sugar, Morphine,
                Codeine, Pentazocine, Buprenorphine
              </th>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.narcoticAnalgesic.ageOfFirstUse
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "narcoticAnalgesic",
                      "ageOfFirstUse",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.narcoticAnalgesic.yearsOfUse
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "narcoticAnalgesic",
                      "yearsOfUse",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.narcoticAnalgesic
                      .yearsOfExcessiveUse
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "narcoticAnalgesic",
                      "yearsOfExcessiveUse",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.narcoticAnalgesic.specificType
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "narcoticAnalgesic",
                      "specificType",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.narcoticAnalgesic
                      .routeOfAdministration
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "narcoticAnalgesic",
                      "routeOfAdministration",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.narcoticAnalgesic
                      .frequencyLast30Days
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "narcoticAnalgesic",
                      "frequencyLast30Days",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.narcoticAnalgesic
                      .quantityLast30Days
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "narcoticAnalgesic",
                      "quantityLast30Days",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.narcoticAnalgesic.pastUse}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "narcoticAnalgesic",
                      "pastUse",
                      e.target.value
                    )
                  }
                />
              </td>
            </tr>

            <tr>
              <th id="th1">Cannabis, Ganja/Charas, Hashish, Bhang</th>
              <td id="td1">
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.cannabis.ageOfFirstUse}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "cannabis",
                      "ageOfFirstUse",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.cannabis.yearsOfUse}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "cannabis",
                      "yearsOfUse",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.cannabis.yearsOfExcessiveUse
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "cannabis",
                      "yearsOfExcessiveUse",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.cannabis.specificType}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "cannabis",
                      "specificType",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.cannabis.routeOfAdministration
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "cannabis",
                      "routeOfAdministration",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.cannabis.frequencyLast30Days
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "cannabis",
                      "frequencyLast30Days",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.cannabis.quantityLast30Days}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "cannabis",
                      "quantityLast30Days",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.cannabis.pastUse}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "cannabis",
                      "pastUse",
                      e.target.value
                    )
                  }
                />
              </td>
            </tr>
            <tr>
              <th id="th1">Stimulants, Amphetamine, Cocaine, Ecstasy</th>
              <td id="td1">
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.stimulants.ageOfFirstUse}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "stimulants",
                      "ageOfFirstUse",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.stimulants.yearsOfUse}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "stimulants",
                      "yearsOfUse",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.stimulants.yearsOfExcessiveUse
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "stimulants",
                      "yearsOfExcessiveUse",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.stimulants.specificType}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "stimulants",
                      "specificType",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.stimulants.routeOfAdministration
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "stimulants",
                      "routeOfAdministration",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.stimulants.frequencyLast30Days
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "stimulants",
                      "frequencyLast30Days",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.stimulants.quantityLast30Days
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "stimulants",
                      "quantityLast30Days",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.stimulants.pastUse}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "stimulants",
                      "pastUse",
                      e.target.value
                    )
                  }
                />
              </td>
            </tr>

            <tr>
              <th id="th1">
                Hallucinogens, LSD, Psilocybin (Magic Mushroom), PCP, Ketamine
              </th>
              <td id="td1">
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.hallucinogens.ageOfFirstUse}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "hallucinogens",
                      "ageOfFirstUse",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.hallucinogens.yearsOfUse}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "hallucinogens",
                      "yearsOfUse",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.hallucinogens.yearsOfExcessiveUse
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "hallucinogens",
                      "yearsOfExcessiveUse",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.hallucinogens.specificType}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "hallucinogens",
                      "specificType",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.hallucinogens
                      .routeOfAdministration
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "hallucinogens",
                      "routeOfAdministration",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.hallucinogens.frequencyLast30Days
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "hallucinogens",
                      "frequencyLast30Days",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.hallucinogens.quantityLast30Days
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "hallucinogens",
                      "quantityLast30Days",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                {" "}
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.hallucinogens.pastUse}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "hallucinogens",
                      "pastUse",
                      e.target.value
                    )
                  }
                />
              </td>
            </tr>

            <tr>
              <th id="th1">
                Inhalants, Glue, Paint Thinners, Nitrous Oxide, Ether
              </th>
              <td id="td1">
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.inhalants.ageOfFirstUse}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "inhalants",
                      "ageOfFirstUse",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.inhalants.yearsOfUse}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "inhalants",
                      "yearsOfUse",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.inhalants.yearsOfExcessiveUse
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "inhalants",
                      "yearsOfExcessiveUse",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.inhalants.specificType}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "inhalants",
                      "specificType",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.inhalants.routeOfAdministration
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "inhalants",
                      "routeOfAdministration",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                {" "}
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.inhalants.frequencyLast30Days
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "inhalants",
                      "frequencyLast30Days",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.inhalants.quantityLast30Days
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "inhalants",
                      "quantityLast30Days",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={formData.alcoholDrugAbused.inhalants.pastUse}
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "inhalants",
                      "pastUse",
                      e.target.value
                    )
                  }
                />
              </td>
            </tr>

            <tr>
              <th id="th1">Substance Not Classified</th>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.substanceNotClassified
                      .ageOfFirstUse
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "substanceNotClassified",
                      "ageOfFirstUse",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.substanceNotClassified.yearsOfUse
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "substanceNotClassified",
                      "yearsOfUse",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.substanceNotClassified
                      .yearsOfExcessiveUse
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "substanceNotClassified",
                      "yearsOfExcessiveUse",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.substanceNotClassified
                      .specificType
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "substanceNotClassified",
                      "specificType",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.substanceNotClassified
                      .routeOfAdministration
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "substanceNotClassified",
                      "routeOfAdministration",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.substanceNotClassified
                      .frequencyLast30Days
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "substanceNotClassified",
                      "frequencyLast30Days",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.substanceNotClassified
                      .quantityLast30Days
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "substanceNotClassified",
                      "quantityLast30Days",
                      e.target.value
                    )
                  }
                />
              </td>
              <td id="td1">
                <input
                  type="text"
                  value={
                    formData.alcoholDrugAbused.substanceNotClassified.pastUse
                  }
                  onChange={(e) =>
                    handleDrugDetailsInputChange(
                      "substanceNotClassified",
                      "pastUse",
                      e.target.value
                    )
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mh_endbtn" style={{display:'flex',justifyContent:'center',margin : '10px 0px'}}>
          <button onClick={handleNext}>Next &raquo;</button>
        </div>
      </form>
    </div>
  );
}

export default Page1;
