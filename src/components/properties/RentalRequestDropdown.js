import Dropdown from 'react-bootstrap/Dropdown';
import {useState, useEffect} from "react"
import {getRentalRequests} from "../../utils/RentalRequestsUtils";

const RentalRequests = (props) => {
  const [rentalRequests, setRentalRequests] = useState([]);
  //load the rental request for the given property
  const propertyId = props.propertyId;
  const accessToken = props.token;
  useEffect(() => {
    getRentalRequests(setRentalRequests, accessToken, propertyId);
  }, []);
  console.log(rentalRequests);



    
    return (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Rental requests
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
            {rentalRequests.map((request) =>(
              <p>{request.Property_id}</p>
          ))}
          </Dropdown.Menu>
        </Dropdown>
      );

};
export default RentalRequests