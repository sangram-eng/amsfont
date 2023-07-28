import web from '../images/pass.avif'
import web1 from '../images/flightD.png'
import web2 from '../images/Ticket.png'
import web3 from '../images/cancell.webp'
import web4 from '../images/pss.png'
import web5 from '../images/Refund.png'
const Sdata =[
    {
        imgsrc: web,
        title: "Passenger Registration",
        about:"Passenger registration first then you will go to booking.",
        bt:"Registration",
        url:"/passenger",
    },
    {
        imgsrc: web1,
        title: "Flight Details",
        about:"Hii, Passenger You will check all flight details.",
        bt:"Details",
        url:"/flightdetails",
    },
    {
        imgsrc: web2,
        title: "Book Ticket",
        about:"You have alredy registred passenger so you will book your ticket.",
        bt:"Book Now",
        url:"/bookticket",
    },
    {
        imgsrc: web3,
        title: "Cancellation",
        about:"You want to cancel your flight with in 10 days of your booking.",
        bt:"Click Here",
        url:"/cancellation",
    },
    {
        imgsrc: web4,
        title: "Passenger See Your Details",
        about:"Which one alredy registred, This one visit here.",
        bt:"See Profile",
        url:"/viewpassenger",
    },
    {
        imgsrc: web5,
        title: "Refund Your Money",
        about:"Which passenger haven't get his money after cancellation. This one only apply it.",
        bt:"Refund",
        url:"/refund",
    },

];
export default Sdata;