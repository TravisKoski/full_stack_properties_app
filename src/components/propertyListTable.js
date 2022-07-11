import {Table, Button} from "react-bootstrap"
import TenantDropdownList from "./tenantDropDown.js"
import { useAuth0 } from "@auth0/auth0-react"
import {useEffect, useState} from "react"

const PropertyContainer = (props) => {
    let propertyList = props.properties;
    const {getAccessTokenSilently} = useAuth0();
    const [accessToken, setAccessToken] = useState(null);
    useEffect(() =>{
        const getAccessToken = async() =>{
            const token = await getAccessTokenSilently();
            setAccessToken(token);

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
                        <td><Button variant = "primary" onClick = {()=> props.onDelete(p.id, accessToken)}> Unlist this property</Button></td>
                    </tr>
                ))}

            </tbody>
        </Table>
    )
}
export default PropertyContainer