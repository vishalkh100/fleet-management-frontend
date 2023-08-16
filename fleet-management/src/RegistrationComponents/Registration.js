import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';

import Dropdown from 'react-bootstrap/Dropdown';
import 'react-phone-number-input/style.css'



export function Registration() {

   const[error,setError]=useState("false");
  const [validated, setValidated] = useState(false);

  const[user,setUser]=useState('');


  const handleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setUser(values=>({...user,[name]:value}))

   

  
}


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    console.log(user);

   
    // if(user.password===user.confirmPassword)
    // setError("true");
    //  else
    //  alert(setError("false"));
 

    // setValidated(true);
  };



  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
  
      <Row className="mb-3" >
        <Form.Group as={Col} md="6" controlId="validationCustom01" >
        <Form.Label>First name</Form.Label>
          <Form.Control required type="text" placeholder="First name" /*defaultValue="Shruti"*/ name="firstName" onChange={handleChange}/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control required type="text" placeholder="Last name" name="lastName" onChange={handleChange} />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>   
      </Row>
     
      <Row className="mb-3" >
        <Form.Group as={Col} md="10" controlId="validationCustom01">
          <Form.Label>Address-1</Form.Label>
          <Form.Control required type="text" placeholder="Street no,Area" name="address1" onChange={handleChange} />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

    <Row className="mb-3" >
      <Form.Group as={Col} md="10" controlId="validationCustom01">
      <Form.Label>Address-2</Form.Label>
      <Form.Control required type="text"  placeholder="Identical mark" name="address2" onChange={handleChange}/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
  </Row>

  <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required name="city" onChange={handleChange}/>
          <Form.Control.Feedback type="invalid"> Please provide a valid city.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required name="state" onChange={handleChange} />
          <Form.Control.Feedback type="invalid">Please provide a valid state. </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required name="pin" onChange={handleChange}/>
          <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
        </Form.Group>
    </Row>

    <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Driving License</Form.Label>
          <Form.Control type="text" placeholder="Driving License" required name="drivingLicence" onChange={handleChange} />
          <Form.Control.Feedback type="invalid"> Please provide a valid Driving License.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Issued By</Form.Label>
          <Form.Control type="text" placeholder="Issued By" required name="dlIssuedBy" onChange={handleChange} />
          <Form.Control.Feedback type="invalid"> Please provide a valid Date.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Valid thru</Form.Label>
          <Form.Control type="text" placeholder="Valid thru" required  name="dlValidThrough" onChange={handleChange}/>
          <Form.Control.Feedback type="invalid">Please provide a valid Date.</Form.Control.Feedback>
        </Form.Group>
    </Row>

   <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Passport No</Form.Label>
          <Form.Control type="text" placeholder="Passport No" required name="passportNumber" onChange={handleChange}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Passport No.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Issued By</Form.Label>
          <Form.Control type="text" placeholder="Issued By" required name="passportIssuedBy" onChange={handleChange}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Date.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Valid thru</Form.Label>
          <Form.Control type="text" placeholder="Valid thru" required name="passportValidUpto" onChange={handleChange}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Date.
          </Form.Control.Feedback>
        </Form.Group>
    </Row>

     <Row>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
             <Form.Label>Select Date</Form.Label>
             <Form.Control type="date" placeholder="Date of Birth" required name="dob" onChange={handleChange} />
       </Form.Group>
      
      <Form.Group as={Col} md="4" controlId="validationCustom05">
             <Form.Label>Mobile number</Form.Label>
             <Form.Control type="tel" maxLength="10" placeholder="Mobile number" required name="phone" onChange={handleChange} />
       </Form.Group> 
    
       

    <Form.Group as={Col} md="4" controlId="validationCustom05">
    <Form.Label>Select Car Type</Form.Label>
    <Dropdown data-bs-theme="light">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary"> Select car Type</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Small Car</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Sedan</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Suzuki</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Form.Group>  
  </Row>

  <Row>
    <Form.Group as={Col} md="5" controlId="validationCustom05">
      <Form.Label>Enter password</Form.Label>
       <Form.Control type="password" name="password" aria-describedby="passwordHelpBlock" onChange={handleChange} />
         <Form.Text id="passwordHelpBlock" muted>
           Your password must be 8-20 characters long, contain letters and numbers,
            and must not contain spaces, special characters, or emoji.
      </Form.Text>
      </Form.Group>

      <Form.Group as={Col} md="5" controlId="validationCustom05">
               <Form.Label>Confirm password</Form.Label>
              <Form.Control type="password" name="confirmPassword" aria-describedby="passwordHelpBlock" onChange={handleChange}  />
      </Form.Group>
   
     <h3>{user.password},{user.confirmPassword}</h3>
     <h4>{error}</h4>
      
  </Row>

  <h3>{user.firstName},{user.lastName}</h3>
      <br></br>
      

      <input type="Submit" value="Submit"/>
      <input type="button" value="clear"/>

    
    </Form>
  );
}

