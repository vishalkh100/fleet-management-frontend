import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function CompanyInfo() {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={6}>
          <Card border="BLACK" id="cardtext" style={{ width: '100%' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>COMPANY INFORMATION</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                A car is a means of transport used for traveling from one place to another. This is a four-wheeler
                used by individuals or family members. We all use cars in our daily lives to go from one place to
                another for work. A car is a beautiful vehicle that has comfortable seats, AC, and windows. It is
                basically used to reduce travel distance and time. Due to increased automobile industries, we see
                different types of cars ranging from simple to the most luxurious ones. Every individual wishes to
                buy or purchase a car which makes their journey a comfortable and enjoyable experience.
                <h1> </h1>
                The RTO Database at Cars24 brings you all the necessary registration details of any vehicle in India. You just need to enter the vehicle registration number in the search box to know details like Vehicle Registration State, the City and the Regional Transport Office (RTO) Address, Phone Number & Email.

                Get the instant details of any vehicle regsistered in India. The RTO database at Cars24 includes the details of each and every Regional Transport Office spread across the 29 states and 7 union territories in India.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={6}>
          <img className="d-block w-100" src="/Images/homeimg2.jpg" alt="Second slide" />
        </Col>
      </Row>
      <img className="d-block w-100" src="/Images/route.png" alt="Second slide" />

    </Container>

  );
}