// This is where the property listing will come from.
import PropertyContainer from '../components/propertyListTable';
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Button} from "react-bootstrap"
import {useNavigate} from "react-router-dom"


const PropertyList = () => { 
    //iniialize the state to be initally empty, and the 'index' URL of my rails api
    const indexUrl = "http://localhost:3000/properties";
    const baseUrl = "http://localhost:3000/";
    const[properties, setProperties] = useState([]);
    const redirect = useNavigate()

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
    /* triggered when the delete button is pressed, it deletes the given property*/
    const deleteProperty = (id) => {
        //get the new properties list which excludes the deleted one
        const filteredProperties = properties.filter( (p) => {return (p.id !== id)});
        axios.delete(`${baseUrl}/properties/${id}`)
        .then(()=> {setProperties(filteredProperties)})

    }
    return (
        <>
        <Button variant = "primary" onClick = {()=> redirect("/createListing")}>New propery listing</Button>
        <PropertyContainer properties={properties} onDelete = {deleteProperty}/>
        </>
    )
}
export default PropertyList