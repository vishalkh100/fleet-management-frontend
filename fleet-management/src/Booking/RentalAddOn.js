import React, { useState, useEffect } from "react";
import { Link,Outlet } from "react-router-dom";

export default function RentalAddOn(props) {
  const [addons, setAddons] = useState([]);
  const [selectedAddons, setSelectedAddons] = useState({});
  const [seatRadio, setSeatRadio] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/addon")
      .then((res) => res.json())
      .then((result) => {
        setAddons(result);
      })
      .catch((error) => {
        console.error("Error fetching add-ons:", error);
      });
  }, []);

  const handleCheckboxChange = (event) => {
    const addonId = event.target.id;
    setSelectedAddons((prevSelectedAddons) => ({
      ...prevSelectedAddons,
      [addonId]: {
        selected: event.target.checked,
        numberOfChildSeats: 1, // Default value
      },
    }));
  };

  const handleChildSeatChange = (event, addonId, value) => {
    setSelectedAddons((prevSelectedAddons) => ({
      ...prevSelectedAddons,
      [addonId]: {
        ...prevSelectedAddons[addonId],
        numberOfChildSeats: value,
      },
    }));

    setSeatRadio(value);
  };

  return (
    <div>
      <h2>Rental Add-ons</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>addOnName</th>
            <th>addOnRate</th>
          </tr>
        </thead>
        <tbody>
          {addons.map((add) => (
            <tr key={add.addOnId}>
              <td>
                <input
                  type="checkbox"
                  id={add.addOnId}
                  checked={selectedAddons[add.addOnId]?.selected || false}
                  onChange={handleCheckboxChange}
                />
              </td>
              <td>
                <label htmlFor={add.addOnId}>{add.addOnName}</label>
              </td>
              <td>
                <label htmlFor={add.addOnId} id="addon1">
                  {add.addOnRate}
                </label>
              </td>
              <td>
                {selectedAddons[add.addOnId]?.selected && add.addOnName === "Child Seat" && (
                  <label>
                    Please select the number of seats:
                    <div>
                      <label>
                        <input
                          type="radio"
                          name={`childSeat_${add.addOnId}`}
                          value={1}
                          checked={selectedAddons[add.addOnId]?.numberOfChildSeats === 1}
                          onChange={(e) => handleChildSeatChange(e, add.addOnId, 1)}
                        />
                        1
                      </label>
                      <label>
                        <input
                          type="radio"
                          name={`childSeat_${add.addOnId}`}
                          value={2}
                          checked={selectedAddons[add.addOnId]?.numberOfChildSeats === 2}
                          onChange={(e) => handleChildSeatChange(e, add.addOnId, 2)}
                        />
                        2
                      </label>
                    </div>
                  </label>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h3>Selected Add-on Details</h3>
        <p>Seats: {seatRadio}</p>
        <ul>
          {Object.entries(selectedAddons).map(([addonId, addonData]) => (
            addonData.selected && (
              <li key={addonId}>
                Add-on ID: {addonId}
                {addonData.addonName === "Child Seat" && (
                  <span>, Child Seats: {addonData.numberOfChildSeats} (ID: {addonId})</span>
                )}
              </li>
            )
          ))}
        </ul>
      </div>
      <button style={{ marginRight: "50px" }}><Link to="/BlankCustomerInfo">Continue Booking</Link></button>
      <Outlet/>
    </div>
  );
}