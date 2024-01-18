// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const FormDataDisplay = () => {
//   const [formData, setFormData] = useState({
//     basicFormData: null,
//     familyFormData: null,
//     medicalFormData: null
//   });
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/getAllFormData', {
//           params: { name: 'kshitij' } // Replace 'someName' with the actual name parameter
//         });
//         setFormData(response.data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h1>Form Data Display</h1>
//       {formData.basicFormData && (
//         <div>
//           <h2>Basic Form Data</h2>
//           {/* Display data from basicFormData */}
//         </div>
//       )}
//       {formData.familyFormData && (
//         <div>
//           <h2>Family Form Data</h2>
//           {/* Display data from familyFormData */}
//         </div>
//       )}
//       {formData.medicalFormData && (
//         <div>
//           <h2>Medical Form Data</h2>
//           {/* Display data from medicalFormData */}
//         </div>
//       )}
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import axios from 'axios';

// function Result() {
//     const [name, setName] = useState('');
//     const [data, setData] = useState(null);
//     const [error, setError] = useState('');

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.get('http://localhost:5000/baapi/getBasicFormData', { params: { name } });
//             setData(response.data);
//         } catch (error) {
//             setError('Error fetching data');
//             console.error(error);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
//                 <button type="submit">Submit</button>
//             </form>
//             {data && <div>{JSON.stringify(data._id)}</div>}
//             {error && <div>{error}</div>}
//         </div>
//     );
// }

// export default Result;


// import React, { useState } from 'react';
// import axios from 'axios';

// function Result() {
//     const [name, setName] = useState('');
//     const [data, setData] = useState(null);
//     const [error, setError] = useState('');

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.get('http://localhost:5000/basic/api/getBasicFormData', { params: { name } });
//             if (Array.isArray(response.data)) {
//                 setData(response.data);
//             } else {
//                 // Adjust this as needed based on your API response structure
//                 setData([response.data]);
//             }
//         } catch (error) {
//             setError('Error fetching data');
//             console.error(error);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
//                 <button type="submit">Submit</button>
//             </form>
//              {Array.isArray(data) && data.length > 0 ? (
//                 data.map((item, index) => (
//                     <div key={index}>
//                         <div>Name: {item.name}</div>
//                         <div>Marital Status: {item.maritalStatus}</div>
//                         <div>Occupation: {item.occupation}</div>
//                         {/* Add more fields as per your data structure */}
//                     </div>
//                 ))
//             ) : (
//                 <div>No data found</div>
//             )} 
//             {error && <div>{error}</div>}
//         </div>
//     );
// }

// export default Result;

import React, { useState } from 'react';
import axios from 'axios';

function Result() {
    const [name, setName] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get('http://localhost:5000/basic/api/getBasicFormData', { params: { name } });
            console.log("response",response.data);
            if (Array.isArray(response.data)) {
                setData(response.data);
            } else {
                // Adjust this as needed based on your API response structure
                setData([response.data]);
            }
        } catch (error) {
            setError('Error fetching data');
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                <button type="submit">Submit</button>
            </form>
            {Array.isArray(data) && data.length > 0 ? (
                // console.log(JSON.stringify(data))
                data.map((item, index) => (
                    <div key={index}>
                        <div>Name: {name || 'Not available'}</div>
                        <div>Marital Status: </div>
                        <div>Occupation: Software Engineer</div>
<div>Age: 28</div>
<div>Date of Birth: 1994-03-15</div>
<div>Date of Intake: 2024-01-10</div>
<div>Date of Admission: 2024-01-12</div>
<div>BPL: No</div>
<div>Accompanied By: Family</div>
<div>Year of Drinking Abuse: 5</div>
<div>Year of Excessive Abuse: 2</div>
<div>Present Pattern Abuse: Moderate</div>
<div>Presence Of: Anxiety</div>
<div>Use of Other Drugs: No</div>
<div>Psychiatric Problem: No</div>
<div>Denial: Mild</div>
<div>Physical Problems: None</div>
<div>Prior Treatment: No</div>
<div>Willingness for Treatment: Unwilling</div>
<div>Motivating Factor: Family Intervention</div>
<div>Issue 1: Relationship Problems</div>
<div>Issue 2: Job Stress</div>
<div>Issue 3: Financial Troubles</div>
<div>Issue 4: Legal Complications</div>
<div>Impression: Requires Close Monitoring</div>
<div>Action: Admitted</div>
<div>Address: 123 Main Street, Cityville</div>
<div>Mobile Number 1: 9876543210</div>
<div>Mobile Number 2: 8765432109</div>
<div>Mobile Number 3: 7654321098</div>
<div>Landline: 0123456789</div>
<div>Remarks: None</div>
<div>Data 1: ABC123</div>
<div>Date: 2024-01-12</div>
<div>Name 1: Arjun Sharma</div>
<div>Name 2: Priya Sharma</div>
<div>Mobile Number: 9876543210</div>
<div>Input 1: Positive</div>
<div>Input 2: Yes</div>
<div>Input 3: High</div>
<div>Input 4: No</div>
<div>Input 5: Low</div>
<div>Input 6: Moderate</div>
<div>Input 7: Severe</div>
<div>Input 8: 25</div>
<div>Input 9: English</div>
<div>Input 10: Yes</div>
<div>Input 11: Yes</div>
<div>Input 12: No</div>
<div>Input 13: No</div>
<div>Input 14: Family History Value</div>
<div>Input 15: Heart Attack</div>
<div>Input 16: Cancer</div>
<div>Input 17: 60</div>
<div>Input 18: 55</div>
<div>Input 19: Hindi</div>
<div>Input 20: English, Hindi</div>
<div>Input 21: Mild</div>
<div>Input 22: Stress, Genetic Factors</div>
<div>Input 23: Yes</div>
<div>Input 24: Positive</div>
<div>Input 25: Yes</div>
<div>Input 26: 10</div>
<div>Input 27: Achievements in Past Value</div>
<div>Family History Rows: 3</div>
<div>Father Death Reason: Natural Causes</div>
<div>Mother Death Reason: Accidental</div>
<div>Father Death Age: 70</div>
<div>Mother Death Age: 65</div>
<div>Mother Tongue: Hindi</div>
<div>Languages Known: English, Hindi, Bengali</div>
<div>Denial Status: Moderate</div>
<div>Causative Factors: Work Stress</div>
<div>Experience of Tolerance: Yes</div>
<div>Behavioral Changes: Yes</div>
<div>Childhood History: Traumatic</div>
<div>Situations Before 15: Yes</div>
<div>Childhood Problems: Bullying</div>
<div>Education Years: 16</div>
<div>Achievements in Past: Award for Excellence</div>
<div>Educational Activities: Debating Club</div>
<div>Spouse Details: Married</div>
<div>Extra Marital: No</div>
<div>High Risk Activity: No</div>
<div>HIV: Negative</div>
<div>Sexual Problem: No</div>
<div>T1: 120/80</div>
<div>T2: 72</div>
<div>T3: 98.6</div>
<div>T4: 16</div>
<div>C1: Normal</div>
<div>Respiratory System: Normal</div>
<div>Cardiovascular System: Normal</div>
<div>Gastrointestinal System: Normal</div>
<div>Nervous System: Normal</div>
<div>Incident: Fall</div>
<div>Incident Description: Slipped on wet floor</div>
<div>Action Taken: First Aid</div>
<div>Severity: Minor</div>
<div>Investigation: X-ray</div>
<div>Certificate Details: NA</div>
<div>Date: 2024-01-15</div>
<div>Complaints: Headache</div>
<div>Medication: Paracetamol</div>
<div>Signature: Dr. Smith</div>
<div>Name: Arjun Sharma</div>
<div>Age: 28</div>
<div>Date of Admission: 2024-01-12</div>
<div>History of Alcoholism or Substance Abuse: Yes</div>
<div>Physical Complications: None</div>
<div>Past History: Allergic to Penicillin</div>
<div>Psychiatric Problems: Anxiety Disorder</div>
<div>Withdrawal Symptoms: None</div>
<div>Treatment: Counseling</div>
<div>Date 2: 2024-01-20</div>
<div>Complaints 2: Improved Sleep</div>
<div>Medication 2: None</div>
<div>Signature 2: Dr. Smith</div>

                        {/* Add more fields as per your data structure */}
                    </div>
                ))
            ) : (
                <div>No data found</div>
            )}
        </div>
    );
}

export default Result;

