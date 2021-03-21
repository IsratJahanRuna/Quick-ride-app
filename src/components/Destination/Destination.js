import React from 'react';
import { useHistory, useParams } from 'react-router';
import map from '../../images/Map.png'
import fakeData from '../Data/fakedata.json';

const Destination = () => {

    const { vehicleName } = useParams();
    const vehicleInfo = fakeData.find(vehicle =>vehicle.key=== vehicleName)
    const history = useHistory();
    const handleBook = (vehicleName) =>{
        history.push(`/booking/${vehicleName}`);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card bg-secondary shadow text-white mt-5 ml-3" style={{width:'20rem',height:'21rem'}}>
                        <form className="p-3">
                        <label for="destination" class="p-2">Pick from</label>
                        <input type="text" class="form-control" id="from"></input>
                        <label for="destination" class="p-2">Pick To</label>
                        <input type="text" class="form-control" id="to"></input>
                        <button className="btn btn-white mt-5 w-100 bg-white" onClick ={() =>handleBook(vehicleName)}>Search</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8 mt-5">
                    <img src={map} alt="" className="w-75"/>
                </div>
            </div>
        </div>
    );
};

export default Destination;
