import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams,NavLink } from "react-router-dom";
import Swal from "sweetalert2";
const ViewPassenger = ()=> {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:9090/ams/api/v1/passenger/getAll");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:9090/ams/api/v1/passenger/delete/${id}`);
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Delete Successfully',
      showConfirmButton: false,
      timer: 1500
    })
    loadUsers();
  };

  return (
    <div className="container">
     <h1 className="text-center">Passenger Details View</h1>
      <div className="py-4">
      <NavLink to="/student" className="btn btn-primary button-reg">Registration Here</NavLink>
        <table className="table border shadow">
          <thead>
            <tr>
            <th scope="col">SN</th>
      <th scope="col"> Name</th>
      <th scope="col"> Id</th>
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
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.userName}</td>
                <td>{user.id}</td>
               <td>{user.age}</td>
               <td>{user.dob}</td>
               <td>{user.phoneNo}</td>
              <td>{user.nationality}</td>
              <td>{user.emailId}</td>
              <td>{user.gender}</td>
             <td>{user.passportNo}</td>
            <td>{user.address}</td>
                <td>
                <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/view/${user.id}`}
                  >
                   View
                  </Link>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ViewPassenger;