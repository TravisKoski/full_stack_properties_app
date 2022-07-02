import axios from "axios"
import ApiService from "./fetchUtils.js"


const getAllProperties = (setProperties, token) =>{
    
    const fetcher = ApiService(token);
    const indexUrl = "http://localhost:3000/properties";
    fetcher.get(indexUrl)
    //convert the returned response into it's json object, and use that value to set the state
    .then((response) => {
        const propertiesJson = response.data;
        setProperties(propertiesJson);
    })
    .catch((error) => {console.error(`error; ${error}`)});

};

const deleteProperty = (id) => {
    const baseUrl = "http://localhost:3000/";
    //get the new properties list which excludes the deleted one
    axios.delete(`${baseUrl}/properties/${id}`)
    window.location.reload(false);

};

export {getAllProperties, deleteProperty}