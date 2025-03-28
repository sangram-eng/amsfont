import React from "react";
import Common from "./Common";
import Navbar from "./Navbar";


const Home = () =>
{
    return(
        <>
         <Navbar/>
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
export default Home;