import React from "react";
import Common from "./Common";
import Unavbar from "./Unavbar";
import Newnav from "./Newnav";


const User = () =>
{
    return(
        <>
         <Newnav/>
         <div className="background-image">
         <Common name="Hi,"
         abt="Where"
         abt1="would"
         abt2="you like to go?"
         visit="/login"
         btname="Get started"
         wrt="Unlock Your Journey:"  
         wrt1="Soaring Towards Boundless Horizons!"   
       
        />
        </div>

        </>
    );
};
export default User;