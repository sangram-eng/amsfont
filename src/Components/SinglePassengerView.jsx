import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link,useHistory, useParams } from "react-router-dom";

const SinglePassengerView = ()=> {
  const history = useHistory();
  const [user, setUser] = useState({
    id:"",
    userName:"",
    age:"",
    dob:"",
    phoneNo:"",
    nationality:"",
    emailId:"",
    gender:"",
    passportNo:"",
    address:""
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9090/ams/api/v1/passenger/getAll/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Passenger Details</h2>

          <div className="card">
            <div className="card-header">
             Passenger id :     {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:     </b>
                  {user.userName}
                </li>
                <li className="list-group-item">
                  <b>Age:     </b>
                  {user.age}
                </li>
                <li className="list-group-item">
                  <b>DOB:     </b>
                  {user.dob}
                </li>
                <li className="list-group-item">
                  <b>Phone No:     </b>
                  {user.phoneNo}
                </li>
                <li className="list-group-item">
                  <b>Nationality:     </b>
                  {user.nationality}
                </li>
                <li className="list-group-item">
                  <b>E-mail: </b>
                  {user.emailId}
                </li>
                <li className="list-group-item">
                  <b>Gender:     </b>
                  {user.gender}
                </li>
                <li className="list-group-item">
                  <b>Passport No:     </b>
                  {user.passportNo}
                </li>
                <li className="list-group-item">
                  <b>Address:     </b>
                  {user.address}
                </li>
              </ul>
            </div>
          </div>
          <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SinglePassengerView;