import axios from "axios"
const getTenantById = (id, setTenant) => {
    const requestUrl = `http://localhost:3000/tenants/${id}`;
    axios.get(requestUrl).
    then((response)=>{
        let tenantData = response.data;
        setTenant(tenantData);
    }).catch((error) => {console.log(error)});
};
//creates a rental request which gets sent to the inbox of the property beign rented out
const rentProperty = (tenantId, propertyId) =>{
    const requestUrl = `http://localhost:3000/rental_requests/create`;
    const rentalRequestParams = {Property_id: propertyId, Tenant_id: tenantId};
    axios.post(requestUrl, rentalRequestParams)
    .then((response) =>{
        alert(`created rental request! Check your inbox for updates.`);
    })
    .catch((error) => {console.log(error)});
};
export {getTenantById, rentProperty}