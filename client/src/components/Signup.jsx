import { React, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send registration data to the server using fetch
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Handle registration error (display an error message or redirect to an error page)
        const errorData = await response.json();
        console.error("Registration failed:", errorData);
        return;
      }

      // Handle successful registration (you may want to redirect the user or show a success message)
      const responseData = await response.json();
      console.log("Registration successful:", responseData);
      alert("Registered successfully");
      navigate("/");
    } catch (error) {
      // Handle network or unexpected error
      console.error("Registration failed:", error.message);
    }
  };
  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              {/* <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"> */}
              <h2>Sign up</h2>
              {/* </p> */}

              {/* <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label="Your Name"
                  id="form1"
                  type="text"
                  name="name" // Add name attribute
                  value={formData.name}
                  onChange={handleChange}
                  className="w-100"
                />
              </div> */}

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Your Name"
                  id="form2"
                  type="name"
                  name="name" // Add name attribute
                  className="w-100"
                  value={formData.name} // Set value from state
                  onChange={handleChange}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Your Email"
                  id="form2"
                  type="email"
                  name="email" // Add name attribute
                  value={formData.email} // Set value from state
                  onChange={handleChange}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput
                  label="Password"
                  id="form3"
                  type="password"
                  name="password" // Add name attribute
                  value={formData.password} // Set value from state
                  onChange={handleChange}
                />
              </div>

              {/* <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput
                  label="Repeat your password"
                  id="form4"
                  type="password"
                />
              </div> */}

              <div className="mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>

              {/* <MDBBtn onClick={handleSubmit} className="mb-4" size="lg">
                Register
              </MDBBtn> */}
              <button onClick={handleSubmit} className="mb-0 px-5 fh_logbtn">
                Register
              </button>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default App;
