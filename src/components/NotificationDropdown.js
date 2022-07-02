import {Dropdown} from "react-bootstrap"
const NotificationDropdown = (props) => {
    const notifications = props.tenant.notifications;
    console.log(notifications);
    return (
        <Dropdown>
            <Dropdown.Toggle>
                View notifictions
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {notifications.map((notification) =>(
                    <Dropdown.Item>{notification.message}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )

}
export default NotificationDropdown