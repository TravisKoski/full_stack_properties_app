//this page allows the management of a single tenant in terms of viewing their information,
//and renting out properties
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios";
const TenantDashboard = () =>{
    const tenantId = useParams();
    const [tenant, setTenant] = useState({})
    const getTenantById = (id) => {
        const requestUrl = `http://localhost:3000/tenants/${id}`;
        axios.get(requestUrl).
        then((response)=>{
            let tenantData = response.data;
            console.log(tenantData)
            setTenant(tenantData);
        }).catch((error) => {console.log(error)});
    }
        useEffect(() =>{
            getTenantById(tenantId.id);
    },[]); 
    return(
        <h1>hello</h1>
     
    )
}
export default TenantDashboard