import {Table, Button} from "react-bootstrap"
const RentalRequesters  = (props) =>{
    const requests = props.requests;
    console.log(requests);

    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {requests.map((request)=>(
                    <tr>
                        <td>{request.Tenant.name}</td>
                        <td>{request.Tenant.age}</td>
                        <td><Button onClick={()=>props.onApprove(request.id, request.Tenant_id)}>Approve</Button></td>
                        <td><Button onClick={()=>props.onDeny(request.id, request.Tenant_id)}>Deny</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
};
export default RentalRequesters