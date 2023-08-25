import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function BlankCustomerInfo() {
    const [formData, setFormData] = useState({
        address1: '',
        address2: '',
        city: '',
        credit_card_type: '',
        dl_issued_by: '',
        dl_valid_through: '',
        dob: '',
        driving_licence: '',
        email: '',
        first_name: '',
        last_name: '',
        passport_issued_by: '',
        passport_number: '',
        passport_valid_upto: '',
        phone: '',
        pin: '',
        state: '',
        city_id: '',
        state_id: ''
    });

    useEffect(() => {
        // Fetch user data based on the logged-in user or customer ID
        // Example API call:
        // fetch(`api/userData/${loggedInUser}`)
        //   .then((response) => response.json())
        //   .then((data) => setFormData(data));

        // For demonstration purposes, let's assume the fetched data:
        const fetchedData = {
            //   address1: '123 Main Street',
            //   address2: 'Apt 456',
            //   city: 'Example City',
            //   credit_card_type: 'Visa',
            //   dl_issued_by: 'DMV',
            //   dl_valid_through: '2023-08-24T00:00:00',
            //   dob: '1990-01-15T00:00:00',
            //   driving_licence: 'DL123456',
            //   email: 'example@email.com',
            //   first_name: 'John',
            //   last_name: 'Doe',
            //   passport_issued_by: 'Passport Office',
            //   passport_number: 'P123456',
            //   passport_valid_upto: '2025-08-24T00:00:00',
            //   phone: '555-123-4567',
            //   pin: '12345',
            //   state: 'Example State',
            //   city_id: '1',
            //   state_id: '1'
        };

        setFormData(fetchedData);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit form data (including login and password) to your server
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    return (
        <Container>
            <h2>Customer Profile Form</h2>
            <Form onSubmit={handleSubmit}>

                <Row>
                    <Col>
                        <Form.Group controlId="username">
                            <Form.Label>Membership No:</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}

                            />

                            <Button variant="dark" type="submit">
                                <Link to="/CustomerInformation">Go</Link>
                            </Button>

                        </Form.Group>

                    </Col>
                    <Col>
                        <Form.Group controlId="password">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="address1">
                            <Form.Label>Address 1:</Form.Label>
                            <Form.Control
                                type="text"
                                name="address1"
                                value={formData.address1}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="address2">
                            <Form.Label>Address 2:</Form.Label>
                            <Form.Control
                                type="text"
                                name="address2"
                                value={formData.address2}

                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="city">
                            <Form.Label>City:</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                value={formData.city}

                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="creditCardType">
                            <Form.Label>Credit Card Type:</Form.Label>
                            <Form.Control
                                type="text"
                                name="credit_card_type"
                                value={formData.credit_card_type}

                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="dlIssuedBy">
                            <Form.Label>DL Issued By:</Form.Label>
                            <Form.Control
                                type="text"
                                name="dl_issued_by"
                                value={formData.dl_issued_by}

                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="dlValidThrough">
                            <Form.Label>DL Valid Through:</Form.Label>
                            <Form.Control
                                type="datetime-local"
                                name="dl_valid_through"
                                value={formData.dl_valid_through}

                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="dob">
                            <Form.Label>Date of Birth:</Form.Label>
                            <Form.Control
                                type="datetime-local"
                                name="dob"
                                value={formData.dob}

                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="drivingLicence">
                            <Form.Label>Driving Licence:</Form.Label>
                            <Form.Control
                                type="text"
                                name="driving_licence"
                                value={formData.driving_licence}

                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}

                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="firstName">
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="first_name"
                                value={formData.first_name}

                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="last_name"
                                value={formData.last_name}

                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="passportIssuedBy">
                            <Form.Label>Passport Issued By:</Form.Label>
                            <Form.Control
                                type="text"
                                name="passport_issued_by"
                                value={formData.passport_issued_by}

                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="passportNumber">
                            <Form.Label>Passport Number:</Form.Label>
                            <Form.Control
                                type="text"
                                name="passport_number"
                                value={formData.passport_number}

                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="passportValidUpto">
                            <Form.Label>Passport Valid Upto:</Form.Label>
                            <Form.Control
                                type="datetime-local"
                                name="passport_valid_upto"
                                value={formData.passport_valid_upto}
                                readOnl
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="phone">
                            <Form.Label>Phone:</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                value={formData.phone}

                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="pin">
                            <Form.Label>PIN:</Form.Label>
                            <Form.Control
                                type="text"
                                name="pin"
                                value={formData.pin}

                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="state">
                            <Form.Label>State:</Form.Label>
                            <Form.Control
                                type="text"
                                name="state"
                                value={formData.state}

                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="cityId">
                            <Form.Label>City ID:</Form.Label>
                            <Form.Control
                                type="text"
                                name="city_id"
                                value={formData.city_id}

                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="stateId">
                            <Form.Label>State ID:</Form.Label>
                            <Form.Control
                                type="text"
                                name="state_id"
                                value={formData.state_id}

                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="dark" type="submit">
                    <Link to="/ConfirmBooking">Confirm Booking</Link>
                </Button>
            </Form>
        </Container>
    );
}