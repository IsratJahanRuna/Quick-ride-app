import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import GoogleMap from '../GoogleMap/GoogleMap';



const Destination = () => {
    const { id } = useParams();


    const history = useHistory();
    const handleBooking = (id) => {
        history.push(`/booking/${id}`);
    }
    const [destination, setDestination] = useState({
        from: '',
        to: ''
    })

    const handleBlur = (e) => {
        const newDestinationInfo = { ...destination }
        newDestinationInfo[e.target.name] = e.target.value;
        setDestination(newDestinationInfo);
    }
    return (
        <div className="container ">
            <div className="row m-5">
                <div className="col-md-5 ">
                    <div className="card bg-dark shadow text-white" style={{ width: '22rem', height: '25rem' }}>
                        <form className="p-3">
                            <label className="p-3">Pick from</label>
                            <input onBlur={handleBlur} type="text" class="form-control" id="from" required></input>
                            <label className="p-3">Pick To</label>
                            <input onBlur={handleBlur} type="text" class="form-control" id="to" required></input>

                            <button className="btn btn-danger mt-5 w-100" onClick={() => handleBooking(id)}>Search</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 mt-1">
                    <GoogleMap></GoogleMap>
                    {/* <img src={map} alt="" className="w-100 mt-3"/> */}
                </div>
            </div>

        </div>
    );
};

export default Destination;