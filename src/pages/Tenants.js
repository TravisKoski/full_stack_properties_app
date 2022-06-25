import {useState, useEffect} from "react"
import axios from "axios"
import {Table} from "react-bootstrap"
const TenantsList = () =>{

    const [tenants, setTenants] = useState([]);
    const baseUrl = "http://localhost:3000";
    //queries the backend, and renders all tenants to the screen

    const getAllTenants = () =>{
        const allTenantsUrl = `${baseUrl}/tenants/`;
        axios.get(allTenantsUrl)
        .then((response) =>{
            setTenants(response.data)
        }).catch((error) =>{console.log(error)})
    };
    useEffect(()=>{
        getAllTenants();
    }, []);

    return(
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {tenants.map(t => (
                    <tr>
                        <td>{t.name}</td>
                        <td>{t.age}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
    
};
export default TenantsList