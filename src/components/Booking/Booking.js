import { Link, useParams } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import fakeData from '../Data/fakedata.json';
import GoogleMap from '../GoogleMap/GoogleMap';

// import Destination from '../Destination/Destination';

const Booking = () => {
    const { id } = useParams();
    // const{ vehicleName} = props.vehicle;
    const [vehicleInfo, setVehicleInfo] = useState([]);
    

    useEffect(() => {
        setVehicleInfo(fakeData[id-1]) 
        
    }, [id])
    const { vehicleName, vehicleImage, vehicleSeat, vehiclePrice, from, to } = vehicleInfo;

    return (
        <div className="container ">
        <div className="row m-3">
            <div className="col-md-5  col-sm-12">
                <div className="card bg-info shadow text-white" style={{width:'25rem',height:'25rem'}}>
                    <form className="p-3">
            <div className="mt-5">
                    <h5>From: <strong>{from}</strong> </h5>
                    <h5>To: <strong>{to}</strong> </h5>
                </div>
            <div className="border rounded mt-3 mb-3">
                <img style={{ width: '75px' }} src={vehicleImage} alt="" />
                <strong> {vehicleName}</strong>
                <img className="ml-3" style={{ width: '40px' }} src="https://static.thenounproject.com/png/292059-200.png" alt=""/> 
                
                <strong> {vehicleSeat}</strong> <strong className="ml-5"> ${vehiclePrice}</strong>
            </div>
            <div className="border rounded mt-3 mb-3">
                <img style={{ width: '75px' }} src={vehicleImage} alt="" />
                <strong> {vehicleName}</strong>
                <img className="ml-3" style={{ width: '40px' }} src="https://static.thenounproject.com/png/292059-200.png" alt=""/> 
                <strong> {vehicleSeat}</strong> <strong className="ml-5"> ${vehiclePrice}</strong>
            </div>
            <div className="border rounded mt-3 mb-3">
                <img style={{ width: '75px' }} src={vehicleImage} alt="" />
                <strong> {vehicleName}</strong>
                <img className="ml-3" style={{ width: '40px' }} src="https://static.thenounproject.com/png/292059-200.png" alt=""/> <strong> {vehicleSeat}</strong> <strong className="ml-5"> ${vehiclePrice}</strong>
            </div>
            </form>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 mt-3">
                   <GoogleMap></GoogleMap>
                </div>
            </div>
           
        </div>
        
       
    );
};

export default Booking;