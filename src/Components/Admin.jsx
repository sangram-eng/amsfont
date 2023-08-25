import React from "react";
import Common from "./Common";

import Newnav from "./Newnav";


const Admin = () =>
{
    return(
        <>
         <Newnav/>
         <div className="background-image">
         <Common name="Hi,"
         abt="Admin"
         abt1="Great"
         abt2="Welcome To AMS"
         visit="/login"
         btname="Get started"
         wrt="Unlock Your Journey:"  
         wrt1="Soaring Towards Boundless Horizons!"   
       
        />
        </div>

        </>
    );
};
export default Admin;