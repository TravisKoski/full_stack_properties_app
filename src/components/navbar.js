import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { useAuth0 } from "@auth0/auth0-react";
const NavBar = () => {
  const {isAuthenticated} = useAuth0();

return(
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href = "/"> HomePage</Nav.Link>
        
        {isAuthenticated?
        <>
        <Nav.Link href = "/properties">Your properties</Nav.Link>
        <Nav.Link href = "/tenants"> Current Tenants in system</Nav.Link> </>: null}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

)};
export default NavBar