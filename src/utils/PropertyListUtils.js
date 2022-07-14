import axios from "axios"
import ApiService from "./fetchUtils.js"
import { useAuth0} from "@auth0/auth0-react"
const {getAccessTokenSilently} = useAuth0();


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

const deleteProperty = async(id) => {
    const token = await getAccessTokenSilently();
    const baseUrl = "http://localhost:3000/";
    const fetcher = ApiService(token);
    //get the new properties list which excludes the deleted one
    fetcher.delete(`${baseUrl}/properties/${id}`)
    window.location.reload(false);

};

export {getAllProperties, deleteProperty}