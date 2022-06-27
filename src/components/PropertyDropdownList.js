import {Dropdown, Button, Table} from "react-bootstrap"

const PropertyDropdown = (props) =>{
    const properties = props.properties; //the list we'll iterate through

    return (
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    View available properties for rent
  </Dropdown.Toggle>

  <Dropdown.Menu>
    {properties.map((p) => (
        <Dropdown.Item>
          <Table><thead>
            <tr>
              <th>Name</th>
              <th>monthly_rate</th>
            </tr>
            
            </thead>
            <tbody>
              <tr>
                <td>{p.name}</td>
                <td>{p.monthly_rate}</td>
                <td><Button onClick = {() => {console.log("clicked")}}> Rent this property</Button></td>

              </tr>

              </tbody>
              </Table>
        </Dropdown.Item>   
    ))}
  </Dropdown.Menu>
</Dropdown>
    )
}
export default PropertyDropdown