import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/basic/form1");
  };

  const handleNext1 = () => {
    navigate("/family/page1");
  };
  const handleNext2 = () => {
    navigate("/past/page1");
  };
  const logout=()=>{
    navigate('/');
  }

  return (
    //     <div className="info-container">
    //     <div className="heading" style={{ backgroundColor: 'rgb(68, 66, 66)', color: 'white',fontSize: 'bold', textAlign:'center',marginBottom:'80px',fontSize:'20px'}}>
    //     <h1>Integrated Rehabilitation Centre For Addicts (IRCA)</h1>
    //     </div>

    //     <div className="nav" style={{display:'flex'}}>
    //    <div className="info-box" onClick={handleNext}>
    //      <h3>Basic Information</h3>
    //    </div>
    //    <div className="info-box" onClick={handleNext1}>
    //      {/* <MedicalHistory /> */}
    //      <h3>Family History</h3>

    //    </div>
    //    <div className="info-box">
    //      {/* <FamilyHistory /> */}
    //      <h3>Medical History</h3>
    //    </div>
    //    <div className="info-box" onClick={handleNext2}>
    //      {/* <PastHistory /> */}
    //      <h3>Past History</h3>
    //    </div>
    //    </div>

    //  </div>
    <>
      <div className="heading m-3" style={{ backgroundColor: 'rgb(68, 66, 66)', color: 'white', fontSize: 'bold', textAlign: 'center', marginBottom: '10px', fontSize: '20px'}}>
        <h1>Integrated Rehabilitation Centre For Addicts (IRCA)</h1>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse  "  id="navbarNav">
            <ul className="navbar-nav ">
            <li className="nav-item" >
                <Link className="nav-link" to="/family/page1">
                  Family History
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/basic/form1">
                  Basic Information
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/medical/page1">
                  Medical History
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/past/page1">
                  Past History
                </Link>
              </li>
              <li className="nav-item ml-auto " style={{marginLeft:'1050px', marginTop:'5px'}}>
                <button className='bi_logout'  style={{padding:'4px 4px'}} onClick={logout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Home;
