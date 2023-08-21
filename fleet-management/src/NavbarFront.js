
import './App.css';
import {Header} from './Header'
import {Footer} from './Footer'
import { Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function NavbarFront() {
  return (
    <div className="App">

    <Header/>
    
    <Navbar  expand="lg"  className="bg-body-tertiary">
      <Container >
       <img src="/Images/home.png" id="h1"  class="img-rounded" ></img> 
      <Link to="./CompanyInfo">Home</Link> 
      <Link to="./Cancel">ModifyCancelBooking</Link> 
        <Link to="./RegistrationComponents/Registration">Membership Registration</Link> 
        <Link to="./AboutIndia">AboutIndiaDrive</Link> 
        <Link to="/CustomerCare">Customer Care</Link> 
        <Link to="/AboutUs">About Us</Link> 
        <Link to="./LoginComponent/Login">Login</Link> 
      </Container>
    </Navbar>
       <Outlet/>

     <Footer/>
    </div>
  );
}


