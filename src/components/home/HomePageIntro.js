import LoginButton from "../authentication/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../authentication/LogoutButton";

const Intro = () => {
    const {isAuthenticated, user} = useAuth0();
    console.log(user)
    return(
        <>
        <h1 style = {{color: "white"}}>Welcome to the property management app</h1> 
        {isAuthenticated? <LogoutButton/>: <LoginButton/>}
        </>

    )
};
export default Intro
