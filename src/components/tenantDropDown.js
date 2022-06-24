import {Dropdown} from "react-bootstrap"
/* Takes in a property object, and renders a dropdown list of the
tenants who live in it*/
const TenantDropdownList = (props) => {
    let tenants = props.property.tenants;
    return(
        
        <>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            View tenants
        </Dropdown.Toggle>

        <Dropdown.Menu>
            {tenants.map((t)=>(
                <Dropdown.Item>{t.name}</Dropdown.Item>
            ))}
            
        </Dropdown.Menu>
        </Dropdown>
        </>
    

    )
}
export default TenantDropdownList