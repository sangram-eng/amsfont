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
import Contact from './Components/Contact';
import Service from './Components/Service';
import About from './Components/About';
import ViewPassenger from './Components/ViewPassenger';
import Passenger from './Components/passenger';
import SinglePassengerView from './Components/SinglePassengerView';
import PassengerEdit from './Components/PassengerEdit';
import Login from './Components/Login';
import Abau from './Components/Abau';
import Register from './Components/Register';

const App = () => {
  return (
  <>
    
     <Switch>
     <Route exact path="/" component={Home}/>
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
     <Route exact path="/view" component={SinglePassengerView}/>
     <Route exact path="/edit/:id" component={PassengerEdit}/>
     <Route exact path="/login" component={Login}/>
     <Route exact path="/register" component={Register}/>
     <Redirect to="/" />
     </Switch>
  
  </>
  );
};

export default App;
