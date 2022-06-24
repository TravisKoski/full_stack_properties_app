// This is where the property listing will come from.
import PropertyContainer from '../components/propertyListTable';
import axios from 'axios'
import {useState, useEffect} from 'react'


const PropertyList = () => { 
    //iniialize the state to be initally empty, and the 'index' URL of my rails api
    const indexUrl = "http://localhost:3000/properties";
    const[properties, setProperties] = useState([]);

    useEffect(()=>{
        getAllProperties();
    }, []);
    const getAllProperties = () =>{
        axios.get(indexUrl)
        //convert the returned response into it's json object, and use that value to set the state
        .then((response) => {
            const propertiesJson = response.data;
            setProperties(propertiesJson);
        })
        .catch((error) => {console.error(`error; ${error}`)});

    }
    return (
        <>
        <PropertyContainer properties={properties}/>
        </>
    )
}
export default PropertyList