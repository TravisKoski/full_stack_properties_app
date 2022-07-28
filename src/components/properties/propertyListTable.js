import {Table, Button} from "react-bootstrap"
import TenantDropdownList from "../tenants/tenantDropDown.js"
import RentalRequests from "./RentalRequestDropdown.js"
import { useAuth0 } from "@auth0/auth0-react"
import {useEffect, useState} from "react"

const PropertyContainer = (props) => {
    let propertyList = props.properties;
    const {getAccessTokenSilently} = useAuth0();
    const [token, setToken] = useState(null);
    const [rentalRequests, setRentalRequests] = useState([]);
    useEffect(()=>{
        const getAccessToken = async() =>{
            const jwtToken = await getAccessTokenSilently();
             setToken(jwtToken);
        };
        getAccessToken();
    })
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
                        <td><RentalRequests propertyId = {p.id}/></td>
                        <td><Button variant = "primary" onClick = {()=> props.onDelete(p.id, token)}> Unlist this property</Button></td>
                    </tr>
                ))}

            </tbody>
        </Table>
    )
}
export default PropertyContainer