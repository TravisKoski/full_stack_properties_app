import axios from "axios"
const getTenantById = (id, setTenant) => {
    const requestUrl = `http://localhost:3000/tenants/${id}`;
    axios.get(requestUrl).
    then((response)=>{
        let tenantData = response.data;
        setTenant(tenantData);
    }).catch((error) => {console.log(error)});
};
const rentProperty = (tenantId, propertyId) =>{
    const requestUrl = `http://localhost:3000/tenants/${tenantId}/properties/${propertyId}/rent`;
    axios.put(requestUrl)
    .then((response) =>{
        const rentedProperty = response.data;
        alert(`Successfully rented ${rentProperty.name}`);
    })
    .catch((error) => {console.log(error)});
};
export {getTenantById, rentProperty}