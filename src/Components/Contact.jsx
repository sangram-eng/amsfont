import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="my-5 background-Cont d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-start"> {/* Left align content */}
            <div className="col-md-6"> {/* Form column */}
              <form>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="fullName" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone No</label>
                  <input type="tel" className="form-control" id="phone" placeholder="xxxxxxxxxx" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="3"></textarea>
                </div>
                <button className="btn btn-outline-primary" type="submit">Submit</button>
              </form>
            </div>
          </div>

          {/* Footer Message */}
          <div className="mt-4">
            <p>After submitting your details, our team will contact you for further communication and assistance.</p>
            <p>Thank you for your cooperation.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
