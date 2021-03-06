import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';


const Vehicle = (props) => {
  const { vehicleName, vehicleImage, vehicleDescription, id } = props.vehicle;
  const history = useHistory();
  const handleDestination = (vehicleName, id) => {
    history.push(`/destination/${vehicleName}/${id}`);
  }
  return (


    <div onClick={() => handleDestination(vehicleName, id)} className="container m-auto">
      <Card className='mt-5' style={{ width: '15rem' }}>
        <Card.Img variant="top" style={{ height: '10rem', weight: '15erm' }} src={vehicleImage} />
        <Card.Body>
          <Card.Title>{vehicleName}</Card.Title>
          <Card.Text >
            {vehicleDescription}
          </Card.Text>

        </Card.Body>
      </Card>
    </div>
  );
};

export default Vehicle;
