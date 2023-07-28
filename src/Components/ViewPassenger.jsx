import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const ViewPassenger = ()=>

{

  const [passenger, setPassenger]=useState([])

       useEffect(()=>{
       loadPassenger();
       },[]);

       const loadPassenger=async()=>{
        const result=await axios.get("http://localhost:9090/ams/passenger/getAll");
        setPassenger(result.data);
       }

    return(
       <>
       <div className="container">
       <div className="py-5">
       <NavLink to="/Passenger" className="btn btn-primary button-reg">Registration Here</NavLink>
       <table className="table border shadow">
  <thead>
    <tr>
      
      <th scope="col">S</th>
      <th scope="col">Passenger Name</th>
      <th scope="col">Age</th>
      <th scope="col">DOB</th>
      <th scope="col">Phone No</th>
      <th scope="col">Nationality</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
      <th scope="col">PassportNo</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
    {
      passenger.map((passenger,index)=>(
        <tr>
        <th scope="row" key={index}>{index+1}</th>
        <td>{passenger.userName}</td>
        <td>{passenger.age}</td>
        <td>{passenger.dob}</td>
        <td>{passenger.phoneNo}</td>
        <td>{passenger.nationality}</td>
        <td>{passenger.emailId}</td>
        <td>{passenger.gender}</td>
        <td>{passenger.passportNo}</td>
        <td>{passenger.address}</td>
        <td>
          <button className="btn btn-outline-primary mx-2">Edit</button>
        </td>
      </tr>
      ))
    }
  </tbody>
 </table>
       </div>
       </div>
       </>
    );

}
export default ViewPassenger;