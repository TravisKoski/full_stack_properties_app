import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

const Intro = () => {
    const {isAuthenticated} = useAuth0();
    console.log(isAuthenticated)
    return(
        <>
        <h1 style = {{color: "white"}}>Welcome to the property management app</h1> 
        {isAuthenticated? <LogoutButton/>: <LoginButton/>}
        </>

    )
};
export default Intro
