import React, { useEffect, useState } from 'react';
import './HomePage.css';
import fakeData from '../Data/fakedata.json';
import Vehicle from '../Vehicle/Vehicle';


const HomePage = () => {
    const [vehicle, setVehicle] = useState([]);
    useEffect(() => {
        setVehicle(fakeData);
        console.log(fakeData);
    }, [])
    return (
        <div style={{ backgroundImage: `url(https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHw%3D&w=1000&q=80)` }} className="homepage">
            <div className="row m-0">
                {
                    vehicle.map(vehicle => <div className="col-lg-3 col-md-6 col-sm-12 "><Vehicle vehicle={vehicle} key={vehicle.vehicleName}></Vehicle></div>)
                }
            </div>
        </div>
    );
};

export default HomePage;