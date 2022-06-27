import axios from "axios"
const getTenantById = (id, setTenant) => {
    const requestUrl = `http://localhost:3000/tenants/${id}`;
    axios.get(requestUrl).
    then((response)=>{
        let tenantData = response.data;
        setTenant(tenantData);
    }).catch((error) => {console.log(error)});
};
export default getTenantById