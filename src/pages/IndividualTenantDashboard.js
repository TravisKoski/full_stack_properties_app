//this page allows the management of a single tenant in terms of viewing their information,
//and renting out properties
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios";
import getTenantById from "../utils/TenantDashboardUtils"
import {Button} from "react-bootstrap"
const TenantDashboard = () =>{
    const tenantId = useParams();
    const [tenant, setTenant] = useState({});
    //controls whether or not the tenant can view properties to rent
    const [viewProperties, setViewProperties] = useState(false);
    
        useEffect(() =>{
            getTenantById(tenantId.id, setTenant);
    },[]); 
    return(
        <>
        <h1>Welcome, {tenant.name}</h1>
        <Button onClick={() => {setViewProperties(!viewProperties)}}>
            {viewProperties ? "show listings": "collapse listings"}</Button>

    
        </>
     
    )
}
export default TenantDashboard