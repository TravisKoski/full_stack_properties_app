//this page allows the management of a single tenant in terms of viewing their information,
//and renting out properties
import {useParams} from "react-router-dom"
const TenantDashboard = () =>{
    const tenantId = useParams();
    console.log(tenantId);
    return(
        <h1>hello</h1>
     
    )
}
export default TenantDashboard