import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";

const Passenger = () => {
  const history = useHistory();

  const [inputData, setInputData] = useState({
    passengerName: "",
    age: "",
    dob: "",
    phoneNo: "",
    nationality: "",
    emailId: "",
    gender: "",
    passportNo: "",
    vaccineId: "",
    address: "",
  });

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role"); // Get role from localStorage

    if (!token || !role) {
      Swal.fire({
        icon: "error",
        title: "Unauthorized",
        text: "Missing authentication or role. Please log in.",
      });
      history.push("/login");
      return;
    }

    // Determine API URL based on role
    let apiUrl = "";
    if (role === "USER") {
      apiUrl = "http://localhost:9090/ams/api/v1/passenger/user/register";
    } else if (role === "ADMIN") {
      apiUrl = "http://localhost:9090/ams/api/v1/passenger/admin/register";
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Role",
        text: "You do not have permission to perform this action.",
      });
      return;
    }

    try {
      const response = await axios.post(
        apiUrl,
        JSON.stringify(inputData),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Swal.fire({
        position: "top",
        icon: "success",
        title: "Passenger Registered Successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      history.push("/service");
    } catch (error) {
      console.error("Error Details:", error);

      if (error.response) {
        const { status, data } = error.response;

        if (status === 403) {
          Swal.fire({
            icon: "error",
            title: "Forbidden (403)",
            text: "Session expired or unauthorized. Please log in again.",
          });
          history.push("/login");
        } else {
          Swal.fire({
            icon: "error",
            title: "Registration Failed",
            text: data.message || "Something went wrong!",
          });
        }
      } else if (error.request) {
        Swal.fire({
          icon: "error",
          title: "Network Error",
          text: "Failed to connect to the server.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Unexpected Error",
          text: "An error occurred. Please try again later.",
        });
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="background-pass">
        <div className="container mt-5 pt-5">
          <h1 className="text-center">Passenger Registration</h1>
          <div className="container contact_div text-left">
            <div className="row">
              <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="userName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" value={inputData.passengerName} onChange={handleData} placeholder="Enter your name" name="passengerName" required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="number" className="form-control" value={inputData.age} onChange={handleData} placeholder="Your age" name="age" required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="dob" className="form-label">DOB</label>
                    <input type="date" className="form-control" value={inputData.dob} onChange={handleData} name="dob" required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phoneNo" className="form-label">Phone No</label>
                    <input type="tel" className="form-control" value={inputData.phoneNo} onChange={handleData} placeholder="Mobile number" name="phoneNo" required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="nationality" className="form-label">Nationality</label>
                    <input type="text" className="form-control" value={inputData.nationality} onChange={handleData} placeholder="Your nationality" name="nationality" required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="emailId" className="form-label">Email</label>
                    <input type="email" className="form-control" value={inputData.emailId} onChange={handleData} placeholder="name@example.com" name="emailId" required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <select className="form-control" value={inputData.gender} onChange={handleData} name="gender" required>
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="passportNo" className="form-label">Passport No</label>
                    <input type="text" className="form-control" value={inputData.passportNo} onChange={handleData} placeholder="Your passport number" name="passportNo" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="vaccineId" className="form-label">Vaccine ID</label>
                    <input type="text" className="form-control" value={inputData.vaccineId} onChange={handleData} placeholder="Your vaccine ID" name="vaccineId" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea className="form-control" value={inputData.address} onChange={handleData} rows="3" name="address"></textarea>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-outline-primary" type="submit">Submit</button>
                    <button className="btn btn-outline-danger mx-2" type="reset">Cancel</button>
                  </div>
                </form>
              </div>
              <h6>After submitting your details, our team will contact you for further communication and assistance.</h6>
              <h6>Thank you for your cooperation.</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Passenger;
