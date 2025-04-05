import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const ViewPassenger = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    loadUsers();
    // eslint-disable-next-line
  }, []);

  const loadUsers = async () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || !role) {
      Swal.fire({
        icon: "error",
        title: "Unauthorized",
        text: "Missing authentication or role. Please log in.",
      });
      history.push("/login");
      return;
    }

    const apiUrl =
      role === "ADMIN"
        ? "http://localhost:9090/ams/api/v1/passenger/admin/all"
        : "http://localhost:9090/ams/api/v1/passenger/user/me";

    try {
      const result = await axios.get(apiUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // For USER role, wrap the object in an array for table compatibility
      setUsers(Array.isArray(result.data) ? result.data : [result.data]);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error Fetching Data",
        text: error?.response?.data?.message || "Failed to fetch passenger details.",
      });
    }
  };

  const deleteUser = async (id) => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (role !== "ADMIN") {
      Swal.fire({
        icon: "error",
        title: "Access Denied",
        text: "Only admins can delete passengers.",
      });
      return;
    }

    try {
      await axios.delete(`http://localhost:9090/ams/api/v1/passenger/admin/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      Swal.fire({
        position: "top",
        icon: "success",
        title: "Deleted Successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      loadUsers(); // refresh data
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Delete Failed",
        text: error?.response?.data?.message || "Could not delete passenger.",
      });
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Passenger Details</h1>

      <NavLink to="/passenger" className="btn btn-success mb-3">
        + Register New Passenger
      </NavLink>

      <div className="table-responsive">
        <table className="table table-bordered table-striped shadow">
          <thead className="thead-dark">
            <tr>
              <th>SN</th>
              <th>Name</th>
              <th>ID</th>
              <th>Age</th>
              <th>DOB</th>
              <th>Phone No</th>
              <th>Nationality</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Passport No</th>
              <th>Vaccine ID</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.passengerName}</td>
                  <td>{user.id}</td>
                  <td>{user.age}</td>
                  <td>{user.dob}</td>
                  <td>{user.phoneNo}</td>
                  <td>{user.nationality}</td>
                  <td>{user.emailId}</td>
                  <td>{user.gender}</td>
                  <td>{user.passportNo}</td>
                  <td>{user.vaccineId}</td>
                  <td>{user.address}</td>
                  <td>
                    <Link className="btn btn-primary btn-sm mx-1" to={`/view`}>
                      View
                    </Link>
                    {localStorage.getItem("role") === "ADMIN" && (
                      <button
                        className="btn btn-danger btn-sm mx-1"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="13" className="text-center text-muted">
                  No passengers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewPassenger;
