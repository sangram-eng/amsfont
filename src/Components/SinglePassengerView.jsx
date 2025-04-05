import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const SinglePassengerView = () => {
  const history = useHistory();

  const [passenger, setPassenger] = useState({
    id: "",
    passengerName: "",
    age: "",
    dob: "",
    phoneNo: "",
    nationality: "",
    emailId: "",
    gender: "",
    passportNo: "",
    vaccineId: "",
    address: ""
  });

  useEffect(() => {
    fetchPassengerDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPassengerDetails = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Unauthorized",
        text: "Please login to continue.",
      });
      return history.push("/login");
    }

    try {
      const response = await axios.get("http://localhost:9090/ams/api/v1/passenger/user/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = response.data;

      if (Array.isArray(data) && data.length > 0) {
        setPassenger(data[0]);
      } else {
        Swal.fire({
          icon: "info",
          title: "No Data Found",
          text: "No passenger information available for this user.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error Fetching Data",
        text: error?.response?.data?.message || "Could not retrieve passenger data.",
      });
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 border rounded p-4 shadow-sm bg-light">
          <h2 className="text-center mb-4 text-primary">Passenger Details</h2>

          <div className="card">
            <div className="card-body">
              <DetailRow label="Passenger ID" value={passenger.id} />
              <DetailRow label="Name" value={passenger.passengerName} />
              <DetailRow label="Age" value={passenger.age} />
              <DetailRow label="Date of Birth" value={passenger.dob} />
              <DetailRow label="Phone Number" value={passenger.phoneNo} />
              <DetailRow label="Nationality" value={passenger.nationality} />
              <DetailRow label="Email" value={passenger.emailId} />
              <DetailRow label="Gender" value={passenger.gender} />
              <DetailRow label="Passport Number" value={passenger.passportNo} />
              <DetailRow label="Vaccine ID" value={passenger.vaccineId} />
              <DetailRow label="Address" value={passenger.address} />
            </div>
          </div>

          <div className="d-flex justify-content-between mt-4">
            <Link to={`/edit/${passenger.id}`} className="btn btn-outline-primary">
              Edit
            </Link>
            <Link to="/viewpassenger" className="btn btn-primary">
              Go to Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable component for a clean row
const DetailRow = ({ label, value }) => (
  <div className="d-flex justify-content-between py-2 border-bottom">
    <div className="text-secondary fw-bold">{label}</div>
    <div className="text-primary ms-3">{value}</div>
  </div>
);

export default SinglePassengerView;
