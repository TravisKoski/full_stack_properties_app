// This is where the property listing will come from.
import PropertyContainer from '../components/propertyListTable';
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Button} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import {getAllProperties, deleteProperty} from "../utils/PropertyListUtils"
import { useAuth0 } from "@auth0/auth0-react"




const PropertyList = () => { 
    //iniialize the state to be initally empty, and the 'index' URL of my rails api
    const[properties, setProperties] = useState([]);
    const redirect = useNavigate();
    const {getAccessTokenSilently} = useAuth0();
    

    useEffect( ()=>{
        const fetchWithToken = async () =>{
        const token = await getAccessTokenSilently();
        await getAllProperties(setProperties, token);
        }
        fetchWithToken();
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