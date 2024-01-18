import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "./Login.css";
function App() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Handle login error
        console.error("Login failed:", response.statusText);
        return;
      }

      // Handle successful login (you may want to store the token in a secure way)
      const data = await response.json();
      console.log("Login successful. Token:", data.token);
      navigate("/basic/form1");

      // Redirect to the dashboard or perform other actions as needed
    } catch (error) {
      // Handle network or unexpected error
      console.error("Login failed:", error.message);
    }
  };
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <h1
        style={{
          display: "inline block",
          marginBottom: "90px",
          textAlign: "center",
          backgroundColor: "rgb(232, 240, 254)",
        }}
      >
        Welcome to Rehabilitation Center for Drug Addicts
      </h1>
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          {/* <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            <MDBBtn floating size="md" tag="a" className="me-2">
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn floating size="md" tag="a" className="me-2">
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn floating size="md" tag="a" className="me-2">
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
          </div> */}

          {/* <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div> */}

          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="email"
            type="email"
            size="lg"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="password"
            type="password"
            size="lg"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <div className="text-center text-md-start mt-4 pt-2">
            {/* <MDBBtn onClick={handleLogin} className="mb-0 px-5">
              Login
            </MDBBtn> */}
            <button onClick={handleLogin} className="mb-0 px-5 fh_logbtn">
              Login
            </button>
            <p className="small fw-bold mt-2 pt-1 mb-2">
              Don't have an account?{" "}
              <Link to="/signup" className="link-danger">
                Register
              </Link>
            </p>
          </div>
        </MDBCol>
      </MDBRow>

      {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
         <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div> 

        <div>
          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="facebook-f" size="md" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="twitter" size="md" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="google" size="md" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="linkedin-in" size="md" />
          </MDBBtn>
        </div>
      </div> */}
    </MDBContainer>
  );
}

export default App;
