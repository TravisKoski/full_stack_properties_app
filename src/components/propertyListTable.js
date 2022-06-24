import {Table, Button} from "react-bootstrap"

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
                        <td>Tenant dropdown here</td>
                    </tr>
                ))}

            </tbody>
        </Table>
    )
}
export default PropertyContainer