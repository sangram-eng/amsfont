import React from "react";

const Contact = ()=>
{
    return(
        <>
        <div className="my-5 background-Cont">
            <div className="container contact_div">
            <div className="row">
                <div className="col-mb-6 col-4 mx-right">
                 <form>
                 <div className="mb-3">
               <label for="exampleFormControlInput1" className="form-label">FullName</label>
               <input type="fullname" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
               </div>
               <div className="mb-3">
               <label for="exampleFormControlInput1" className="form-label">Phone No</label>
               <input type="phone" className="form-control" id="exampleFormControlInput1" placeholder="xxxxxxxxxx"/>
               </div>
               <div className="mb-3">
               <label for="exampleFormControlInput1" className="form-label">Email</label>
               <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
               </div>
               <div className="mb-3">
               <label for="exampleFormControlTextarea1" className="form-label">Message</label>
               <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
               </div>
               <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                    Submit form
                </button>
                <h1>{'\n'}</h1>
               </div>
                 </form>
                </div>
                <h7>After submitting your details, our team will </h7>
                <h7>contact you for further communication and</h7>
                <h7>assistance.</h7>
                <h7>Thank you for your cooperation.</h7>
            </div>
        </div>
     </div>
        </>
    );
}
export default Contact;