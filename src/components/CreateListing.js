import {useState} from "react"
const CreateListingForm = (onCreate) => {
    const [name, setName] = useState("")
    const [rate, setRate] = useState("")
    //helper for validating the rate input
    const isRateValid = (rate) => {
        return (rate >= 0 && ! isNaN(rate))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        //validate the presence of the property name
        if (!name){
            alert("Please enter a name for your listing");
            return;
        }
        //also validate the rate field being a number
        if(!isRateValid(rate)){
            alert("Monthly rent rate must be a non negative number!")
            return;
        }
        //call the add function which makes the POST request to the back
        console.log({name,rate});
        //clear the form fields for the next use
        setName("")
        setRate("")
    }

    return(
        <form onSubmit = {onSubmit}>
            <div className = 'form-control'>
                <label>Property name</label>
                <input type = "text" placeholder = "add name here" value = {name}
                onChange = {(e)=> setName(e.target.value)}/>
            </div>
            <div className = 'form-control'>
                <label>Monthly rate</label>
                <input type = "text" placeholder = "enter monthly rate here"
                value = {rate} onChange= {(e) => setRate(e.target.value)}/>
            </div>
            <input type = "submit" value = "save listing"/>
        </form>
        

    )
 }
 export default CreateListingForm