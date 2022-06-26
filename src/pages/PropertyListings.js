// This is where the property listing will come from.
import PropertyContainer from '../components/propertyListTable';
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Button} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import {getAllProperties, deleteProperty} from "../utils/PropertyListUtils"



const PropertyList = () => { 
    //iniialize the state to be initally empty, and the 'index' URL of my rails api
    const[properties, setProperties] = useState([]);
    const redirect = useNavigate()

    useEffect(()=>{
        getAllProperties(setProperties);
    }, []);
    
    /* triggered when the delete button is pressed, it deletes the given property*/
    
    return (
        <>
        <Button variant = "primary" onClick = {()=> redirect("/createListing")}>New propery listing</Button>
        <PropertyContainer properties={properties} onDelete = {deleteProperty}/>
        </>
    )
}
export default PropertyList