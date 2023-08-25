import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Components/Home';
import FlightDetails from './Components/FlightDetails';
import Bill from './Components/Bill';
import Cancellation from './Components/Cancellation';
import BookTicket from './Components/BookTicket';
import Refund from './Components/Refund';
import {Switch, Route, Redirect } from "react-router-dom";
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Service from './Components/Service';
import About from './Components/About';
import ViewPassenger from './Components/ViewPassenger';
import Passenger from './Components/Passenger';
import SinglePassengerView from './Components/SinglePassengerView';
import PassengerEdit from './Components/PassengerEdit';
import Login from './Components/Login';
import Hom from './Components/Hom';
import userEvent from '@testing-library/user-event';
import User from './Components/User';
import Admin from './Components/Admin';
import Abau from './Components/Abau';

const App = () => {
  return (
  <>
    
     <Switch>
     <Route exact path="/" component={Hom}/>
     <Route exact path="/home" component={Home}/>
     <Route exact path="/abou" component={Abau}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/service" component={Service}/>
     <Route exact path="/contact" component={Contact}/>
     <Route exact path="/passenger" component={Passenger}/>
     <Route exact path="/flightdetails" component={FlightDetails}/>
     <Route exact path="/bill" component={Bill}/>
     <Route exact path="/refund" component={Refund}/>
     <Route exact path="/bookticket" component={BookTicket}/>
     <Route exact path="/cancellation" component={Cancellation}/>
     <Route exact path="/viewpassenger" component={ViewPassenger}/>
     <Route exact path="/view/:id" component={SinglePassengerView}/>
     <Route exact path="/edit/:id" component={PassengerEdit}/>
     <Route exact path="/login" component={Login}/>
     <Route exact path="/user" component={User}/>
     <Route exact path="/admin" component={Admin}/>
     <Redirect to="/" />
     </Switch>
  
  </>
  );
};

export default App;
