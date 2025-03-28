import React from "react";
import { NavLink } from "react-router-dom";
import img1 from '../images/worldd.png';

const Newnav =() =>{

  return(
    <>
    <div className="header-img">
      <div className='row'>
       <div className="col-12 mx-auto">
    <nav className="navbar navbar-expand-lg bg-white text-dark">
    <div className="col-8 container-fluid">
    <NavLink className="navbar-brand" to="/"><img src={img1} className="logo" alt="home img"></img></NavLink>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="col-11 container-fluid">
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

       <li className="nav-item">
         <NavLink activeClassName='menu_active' exact className="nav-link active" aria-current="page"to="/">Home</NavLink>
       </li>
       <li className="nav-item">
         <NavLink  activeClassName='menu_active'className="nav-link"to="/about">About</NavLink>
       </li>
       <li className="nav-item">
         <NavLink className="nav-link"to="/contact">Contact</NavLink>
       </li>
       
       <li className="nav-item">
         <NavLink className="nav-link"to="/service">Service</NavLink>
       </li>
      
     </ul>
    
   </div>
   </div>
 </div>
 <div className="col-3 container-fluid">
 <form className="d-flex">
       <input className="form-control ms-2" type="search" placeholder="Search" aria-label="Search"/>
       <button className="btn btn-outline-success" type="submit"> Search</button>
     </form>
 </div>
</nav>
</div>
</div>     
</div>
   </>
   );
};
export default Newnav;