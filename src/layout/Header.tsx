import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">
                        <b>PartnrVault</b>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Explorer</Nav.Link>
                            <Nav.Link href="/">My Vault</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div>
                        <Button>Connect Wallet</Button>
                    </div>
                </Container>
            </Navbar>
        </header>
    );
}
