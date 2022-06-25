import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
const NavBar = () => {

return(
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href = "/"> HomePage</Nav.Link>
        <Nav.Link href = "/properties">Your properties</Nav.Link>
        <Nav.Link href = "/tenants"> Current Tenants in system</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

)};
export default NavBar