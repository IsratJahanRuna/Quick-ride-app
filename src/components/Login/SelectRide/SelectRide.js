import React from 'react';
import { Link } from 'react-router-dom';


const SelectRide = () => {
    return (
        <div>
            <div class="container text-center mt-5">
                <h3> You Need to Select Ride</h3>
                <br/>
                <Link to="/home">
                    <button class="btn btn-primary">Select Ride Type</button>
                </Link>
            </div>
        </div>
    );
};

export default SelectRide;