//this page allows the management of a single tenant in terms of viewing their information,
//and renting out properties
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios";
import {getTenantById, rentProperty} from "../utils/TenantDashboardUtils"
import {Button} from "react-bootstrap"
import {getAllProperties} from "../utils/PropertyListUtils"
import PropertyDropdown from "../components/properties/PropertyDropdownList";
import NotificationDropdown from "../components/NotificationDropdown";
import { useAuth0 } from "@auth0/auth0-react";
const TenantDashboard = () =>{
    const tenantId = useParams();
    const [tenant, setTenant] = useState({});
    const {getAccessTokenSilently} = useAuth0();

    //controls whether or not the tenant can view properties to rent
    const [properties, setProperties] = useState([]);
    
        useEffect(async() =>{
            const accessToken = await getAccessTokenSilently();
            getTenantById(tenantId.id, setTenant);
            getAllProperties(setProperties, accessToken);
    },[]); 
    return(
        <>
        <h1>Welcome, {tenant.name}</h1>
        <PropertyDropdown properties = {properties} tenantId= {tenantId.id} onRent = {rentProperty}/>
        <NotificationDropdown tenant = {tenant}/>

    
        </>
     
    )
}
export default TenantDashboard