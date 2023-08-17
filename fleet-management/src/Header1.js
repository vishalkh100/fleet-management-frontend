import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export function Header1() {
  return (
    <Navbar  expand="lg"  className="bg-body-tertiary">
      
      <Container >
      {/* <img src="Images/home.png" id="h1"  class="img-rounded" ></img> */}
      <Nav.Link href="/home" id="h2">Home</Nav.Link>
        <Nav.Link href="/Contact Us">   ModifyCancelBooking</Nav.Link>
        <Nav.Link href="/Address">MembershipRegistration</Nav.Link>
        <Nav.Link href="/Booking ">AboutIndiaDrive </Nav.Link>
        <Nav.Link href="/Booking ">CustomerCare </Nav.Link>

        <Nav.Link href="/About us">About us</Nav.Link>

        <Nav.Link href="/login">login</Nav.Link>
      </Container>
     {/* <div id="a1">
     <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/Contact Us">Contact Us</Nav.Link>
        <Nav.Link href="/Address">Address</Nav.Link>
        <Nav.Link href="/Booking ">Booking </Nav.Link>
        <Nav.Link href="/Booking ">CarType </Nav.Link>

        <Nav.Link href="/About us">About us</Nav.Link> */}
        
     {/* </div> */}
    
    </Navbar>
    
  );
}

