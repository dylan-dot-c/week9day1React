import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarBS() {
    return (
        <Navbar expand='lg' className='bg-warning'>
            <Container>
                <Navbar.Brand href='#home'>Task Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#link'>Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarBS;
