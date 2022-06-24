import {Table, Button} from "react-bootstrap"
import TenantDropdownList from "./tenantDropDown.js"

const PropertyContainer = (props) => {
    let propertyList = props.properties;
    return (
        <Table>
            <thead>
                <tr>
                    <th>Property name</th>
                    <th>Monthly rate</th>
                    <th>Current Tenants</th>
                </tr>
            </thead>
            <tbody>
                {propertyList.map((p)=>(
                    <tr>
                        <td>{p.name}</td>
                        <td>${p.monthly_rate}</td>
                        <td> <TenantDropdownList property={p}/></td>
                        <td><Button variant = "primary" onClick = {()=> props.onDelete(p.id)}> Unlist this property</Button></td>
                    </tr>
                ))}

            </tbody>
        </Table>
    )
}
export default PropertyContainer