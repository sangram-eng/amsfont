import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) =>
{
    return(
        <>
          <section id="header" className="">
            <div className="container-fluid nav_bg">
              <div className="row">
                <div className="col-10 mx-auto">
                 <div className="col-mb-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>  </h1>

                 <h1>
                  {props.name}
                  <strong className="brand-name">{props.abt}</strong>  {props.abt1}
                 <h1>{props.abt2}  </h1>
                 <h1>{props.abt3}</h1> 
                 <h1>{props.abt4}</h1>
                  </h1>
                 <h2 className="my-3">
                  {props.wrt}
                 <h3>{props.wrt1}</h3> 
                 <h3>{props.wrt2}</h3>
                 <h3>{props.wrt3}</h3>  
                 <h3>{props.wrt4}</h3>
                 <h3>{props.wrt5}</h3>
                 <h3>{props.wrt6}</h3>
                 <h3>{props.wrt7}</h3>
                 </h2>
                 <div className="mt-3">
                  <NavLink to={props.visit} className="btn btn-outline-primary">
                    {props.btname}
                  </NavLink>
                 </div>
                </div>
                </div>
                </div>
              </div>
          </section>

        </>
    );
};
export default Common;