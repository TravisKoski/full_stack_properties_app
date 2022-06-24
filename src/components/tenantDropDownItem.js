import {Table} from "react-bootstrap"
/* This will be rendered in place of a 'dropdown item, reason is so that we can display
one dropdown item in a horizontal fashion*/

const DropdownTenantItem = (props) => {
    return(
        <Table>
            <tbody>
                <tr>
                    <td>name: {props.tenant.name}</td>
                    <td>age: {props.tenant.age}</td>
                </tr>
            </tbody>
        </Table>
    )
};
export default DropdownTenantItem