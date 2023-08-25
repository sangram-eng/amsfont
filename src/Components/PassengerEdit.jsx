import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory,useParams } from "react-router-dom";
import Swal from "sweetalert2";

const PassengerEdit = ()=> {
  
  const history = useHistory();
  const { id } = useParams();

  const [user, setUser] = useState({
    userName:"",
    age:"",
    dob:"",
    phoneNo:"",
    nationality:"",
    emailId:"",
    gender:"",
    passportNo:"",
    vaccineId:"",
    address:""
  });

  const { userName,age,dob,phoneNo,nationality, emailId, gender,passportNo,vaccineId,address} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:9090/ams/api/v1/passenger/edit/${id}`, user);
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Update Successfully',
      showConfirmButton: false,
      timer: 1500
    })
    loadUser();
    history.push("/service");
  };
  

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9090/ams/api/v1/passenger/getAll/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Passenger</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="userName"
                value={userName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phNo" className="form-label">
              Age
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Age"
                name="age"
                value={age}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="teacherId" className="form-label">
              DOB
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Dob"
                name="teacherId"
                value={dob}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
              Phone No
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="**********"
                name="phoneNo"
                value={phoneNo}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
              Nationality
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Nationality"
                name="nationality"
                value={nationality}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
              E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your E-mail Id"
                name="emailId"
                value={emailId}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
              Gender
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your  Gender"
                name="gender"
                value={gender}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
              Passport No
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your  Passport-No"
                name="passportNo"
                value={passportNo}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
              Vaccine Id
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your  Passport-No"
                name="vaccineId"
                value={vaccineId}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
              Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your  address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary" onClick={onSubmit}>
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
export default PassengerEdit;