import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function MakeReservation() {
    const containerStyle = {
        textAlign: 'center',
        border: '1px solid #000',
        padding: '10px',
        height: '800px',
        width: '1500px',
        marginLeft: '50px',
        marginTop: '50px'
    };

    const rowStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const columnStyle = {
        margin: '10px',
    };

    const [rentalDate, setRentalDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
    const [rentalTime, setRentalTime] = useState('');
    const [returnTime, setReturnTime] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [returnToDifferentLocation, setReturnToDifferentLocation] = useState(false);

    const handleSearch = () => {
        // Implement your search logic here
        // You can use the 'city' and 'state' values to perform a search
        // and 'returnToDifferentLocation' to check if the checkbox is selected
        console.log(`Searching for City: ${city}, State: ${state}`);
        console.log(`Return to Different Location: ${returnToDifferentLocation}`);
    };

    const handleCheckboxChange = () => {
        setReturnToDifferentLocation(!returnToDifferentLocation);
    };

    //For Redirect to new page by clicking continue Booking
    const handleClick = () => {

    };
    // const [selectedText, setSelectedText] = useState('');

    // const handleClick = () => {
    //   setSelectedText('Continue Booking clicked!');
    //   props.onItemClick(selectedText); // Send data to the second component
    // };


    return (
        <div style={containerStyle}>
            <h3 style={{ textAlign: 'left', paddingLeft: '50px' }}>
                <u>Make Reservation</u>
            </h3>
            <h5 style={{ textAlign: 'left', paddingLeft: '50px' }}>
                <u>Rental Date And Time</u>
                <span style={{ marginRight: '100px' }}></span>
                <u>Return Date And Time</u>
            </h5>
            <div style={rowStyle}>
                <div style={columnStyle}>
                    <p>Rental Date</p>
                    <DatePicker
                        selected={rentalDate}
                        onChange={(date) => setRentalDate(date)}
                        dateFormat="MM/dd/yyyy"
                    />
                </div>
                <div style={columnStyle}>
                    <p>Return Date</p>
                    <DatePicker
                        selected={returnDate}
                        onChange={(date) => setReturnDate(date)}
                        dateFormat="MM/dd/yyyy"
                    />
                </div>
            </div>
            <div style={rowStyle}>
                <div style={columnStyle}>
                    <p>Rental Time</p>
                    <input
                        type="time"
                        value={rentalTime}
                        onChange={(e) => setRentalTime(e.target.value)}
                    />
                </div>
                <div style={columnStyle}>
                    <p>Return Time</p>
                    <input
                        type="time"
                        value={returnTime}
                        onChange={(e) => setReturnTime(e.target.value)}
                    />
                </div>
            </div>
            <div>
                <h6 style={{ textAlign: 'left', paddingLeft: '50px' }}>
                    <em>Pick-up Location</em>
                </h6>
                <h4 style={{ textAlign: 'left', paddingLeft: '50px' }}>
                    Enter Airport Code
                    <span style={{ marginLeft: '20px' }}>
                        <input type="text" name="Find Airport" style={{ width: '100px' }} />
                        <h6>
                            <u>Find Airport</u>
                        </h6>
                    </span>
                </h4>
                <h3 style={{ textAlign: 'left', paddingLeft: '50px' }}>OR</h3>
                <h4 style={{ textAlign: 'left', paddingLeft: '50px' }}>
                    Enter City
                    <input
                        type="text"
                        name="City"
                        value={city}
                        style={{ width: '100px', marginLeft: '20px' }}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <span style={{ marginLeft: '10px' }}>State</span>
                    <input
                        type="text"
                        name="State"
                        value={state}
                        style={{ width: '100px', marginLeft: '20px' }}
                        onChange={(e) => setState(e.target.value)}
                    />
                </h4>
            </div>
            <div style={{ textAlign: 'left', paddingLeft: '50px' }}>
                <input
                    type="checkbox"
                    id="returnToDifferentLocation"
                    checked={returnToDifferentLocation}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="returnToDifferentLocation">
                    <b>I may return the car to a different location</b>
                </label>
                <h4> <button onClick={handleSearch} style={{ marginLeft: '20px' }}>Search</button></h4>
            </div>

            <div>
                <h6 style={{ textAlign: 'left', paddingLeft: '50px', paddingTop: '50px' }}>
                    <em>Return Location</em>
                </h6>
                <h4 style={{ textAlign: 'left', paddingLeft: '50px' }}>
                    Enter Airport Code
                    <span style={{ marginLeft: '20px' }}>
                        <input type="text" name="Find Airport" style={{ width: '100px' }} />
                        <h6>
                            <u>Find Airport</u>
                        </h6>
                    </span>
                </h4>
                <h3 style={{ textAlign: 'left', paddingLeft: '50px' }}>OR</h3>
                <h4 style={{ textAlign: 'left', paddingLeft: '50px' }}>
                    Enter City
                    <input
                        type="text"
                        name="City"
                        value={city}
                        style={{ width: '100px', marginLeft: '20px' }}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <span style={{ marginLeft: '10px' }}>State</span>
                    <input
                        type="text"
                        name="State"
                        value={state}
                        style={{ width: '100px', marginLeft: '20px' }}
                        onChange={(e) => setState(e.target.value)}
                    />
                    <button onClick={handleSearch} style={{ marginLeft: '20px' }}>Search</button>
                </h4>

            </div>
            <div style={{ border: '1px solid #000', padding: '10px', width: 'fit-content', marginLeft: '600px' }}>
                <h5 style={{ textAlign: 'center' }} onClick={handleClick}>
                    Continue Booking
                </h5>
            </div>
            <div style={{ position: 'absolute', top: '150px', right: '150px', border: '1px solid #000', padding: '10px', width: '500px', height: '700px', marginTop: '20px', marginRight: '20px' }}>
                <h5 style={{ textAlign: 'center' }} onClick={handleClick}>
                    Another Box
                </h5>

            </div>

        </div>
    );
}
