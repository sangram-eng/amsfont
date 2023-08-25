import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import {useHistory } from "react-router-dom";
const Passenger = ()=>
{
  const history = useHistory();
  const data={userName:"",age:"",dob:"",phoneNo:"",nationality:"",emailId:"",gender:"",passportNo:"",vaccineId:"",address:""};
  const [inputData,setinputData]=useState(data);
  
const handleData=(e)=>{
  setinputData({...inputData,[e.target.name]:e.target.value})
}

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Credentials':true
  }
};
const handleSubmit=(e)=>{
  e.preventDefault();
  axios.post("http://localhost:9090/ams/api/v1/passenger/register",inputData,axiosConfig)
  .then((response)=>{
    //console.log(response)
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Passenger Registration Successfully',
      showConfirmButton: false,
      timer: 1500
    })
    history.push("/service");
  })
}

  return(
      <>
      <div className="my-5 background-pass">
      <h1 className="text-center">Passenger Registration</h1>
          <div className="container contact_div">
          <div className="row">
              <div className="col-mb-6 col-5 mx-right">
               <form>
               <div className="mb-3">
             <label htmlFor="userNamee" className="form-label">FullName</label>
             <input type="text" className="form-control" value={inputData.userName}onChange={handleData} placeholder="Enter your name"name="userName"
            
             />
             </div>
             <div className="mb-3">
             <label htmlFor="age" className="form-label">Age</label>
             <input type="text" className="form-control" value={inputData.age}onChange={handleData} placeholder="your age"name="age"
             
             />
             </div>
             <div className="mb-3">
             <label htmlFor="dob" className="form-label">DOB</label>
             <input type="text" className="form-control" value={inputData.dob}onChange={handleData}  placeholder="dd-mm-yyyy"name="dob"
            
             />
             </div>
             <div className="mb-3">
             <label htmlFor="phoneNo" className="form-label">Phone No</label>
             <input type="text" className="form-control" value={inputData.phoneNo}onChange={handleData} placeholder="mobile number" name="phoneNo"
             
             />
             </div>
             <div className="mb-3">
             <label htmlFor="nationality" className="form-label">Nationality</label>
             <input type="text" className="form-control" value={inputData.nationality}onChange={handleData} placeholder="your nationality" name="nationality"
             
             />
             </div>
             <div className="mb-3">
             <label htmlFor="emailId" className="form-label">Email</label>
             <input type="text" className="form-control" vvalue={inputData.emailId}onChange={handleData} placeholder="name@example.com"name="emailId"
             
             />
             </div>
             <div className="mb-3">
             <label htmlFor="gender" className="form-label">Gender</label>
             <input type="text" className="form-control" value={inputData.gender}onChange={handleData} placeholder="your gender"name="gender"
            
             />
             </div>
             <div className="mb-3">
             <label htmlFor="passportNo" className="form-label">Passport No</label>
             <input type="text" className="form-control" value={inputData.passportNo}onChange={handleData} placeholder="your passport number"name="passportNo"
             
             />
             </div> <div className="mb-3">
             <label htmlFor="vaccineId" className="form-label">VaccineId</label>
             <input type="text" className="form-control" value={inputData.vaccineId}onChange={handleData} placeholder="your vaccineId "name="vaccineId"
             
             />
             </div>
             <div className="mb-3">
               <label htmlFor="address" className="form-label">Address</label>
               <textarea type="text"className="form-control"value={inputData.address}onChange={handleData}  rows="3"name="address"></textarea>
               </div>
             <div className="col-12">
              <button className="btn btn-outline-primary"onClick={handleSubmit} type="submit">
                  Submit
              </button>
              <button className="btn btn-outline-danger mx-2" type="cancel">
                 Cancel
              </button>
              <h1>{'\n'}</h1>
             </div>
               </form>
              </div>
              <h6>After submitting your details, our team will </h6>
              <h6>contact you For further communication and</h6>
              <h6>assistance.</h6>
              <h6>Thank you For your cooperation.</h6>
          </div>
      </div>
   </div>
      </>
    );
}
export default Passenger;