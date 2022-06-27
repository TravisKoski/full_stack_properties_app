import {Dropdown} from "react-bootstrap"

const PropertyDropdown = (props) =>{
    const properties = props.properties; //the list we'll iterate through

    return (
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    View available properties for rent
  </Dropdown.Toggle>

  <Dropdown.Menu>
    {properties.map((p) => (
        <Dropdown.Item> {p.name} </Dropdown.Item>   
    ))}
  </Dropdown.Menu>
</Dropdown>
    )
}
export default PropertyDropdown