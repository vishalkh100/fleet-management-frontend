import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link,Outlet } from "react-router-dom";

export default function VehicalSelection(){

     const [cartype, setcartype] = useState([]);
     const [selectedCar, setSelectedCar] = useState(null);
     
    //const {car_type_id} = useParams()
   // let car_type_id=1;
     useEffect(() => {
         fetch("http://localhost:8080/CarTypeMaster/getAllbyHubId/"+1)
        .then(res=>res.json())
        .then((result) => {setcartype(result)}
        )},[]);

        
        console.log(cartype);
        console.log(cartype.length);

        const handleSelect = (carName) => {
          setSelectedCar(carName);
        };

        //console.log(cartype[0].daily_rate);

    return (
     
        <div>
            {/* <h3>{cartype.length}</h3>
            <h2>CarType Data..</h2>
            <h3>{cartype[0].carTyepName}</h3>
            <h3>{cartype[0].dailyRate}</h3> */}


{/* <img src="CarType/FirstCar.jpg" alt="car"/> */}
<div style={{ backgroundColor: "white", padding: "20px" }}></div>

            <table align="center">
            <thead>
                <tr >
                    <th  id = "c1" className="colm-header">CAR CLASS</th>
                    <th id = "c1"  className="colm-header"  >CAR TYPE</th>
                    <th  id = "c1" className="colm-header">DAILY RATE</th>
                    <th  id = "c1" className="colm-header">WEEKLY RATE</th>
                    <th  id= "c1"  className="colm-header">MONTHLY RATE</th>
                    <th id="c1" className="colm-header"></th>
                   
                </tr>
                </thead>
             <tbody>
                {cartype.map(c=>(
                  <tr key={c.carTypeId}>
                    <td><img
          src={`CarType/${c.imagePath}.jpg`}
          alt={c.carTypeName}
          style={{ width: "120px", height: "120px" }}
        /></td>
                    <td>{c.carTypeName}</td>
                    <td>{c.dailyRate}</td>
                    <td>{c.weeklyRate}</td>
                    <td>{c.monthRate}</td>
                    <td>
                    <a href="#" onClick={() => handleSelect(`${c.carTyepName} (ID: ${c.carTypeId})`)}>Select</a>
              </td>
                   
                  
                  </tr>  
                ))}
             </tbody>
             </table>
             {selectedCar && <p>Selected Car: {selectedCar}</p>}
             <button style={{ marginRight: "50px" }}><Link to="/RentalAddOn">Continue Booking</Link></button>
          <button>Cancel</button>
          
<Outlet/>
        </div>
    )
}