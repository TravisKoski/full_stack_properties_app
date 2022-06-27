//this page allows the management of a single tenant in terms of viewing their information,
//and renting out properties
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios";
import getTenantById from "../utils/TenantDashboardUtils"
import {Button} from "react-bootstrap"
import {getAllProperties} from "../utils/PropertyListUtils"
import PropertyDropdown from "../components/PropertyDropdownList";
const TenantDashboard = () =>{
    const tenantId = useParams();
    const [tenant, setTenant] = useState({});
    //controls whether or not the tenant can view properties to rent
    const [properties, setProperties] = useState([]);
    
        useEffect(() =>{
            getTenantById(tenantId.id, setTenant);
            getAllProperties(setProperties);
    },[]); 
    return(
        <>
        <h1>Welcome, {tenant.name}</h1>
        <PropertyDropdown properties = {properties}/>

    
        </>
     
    )
}
export default TenantDashboard