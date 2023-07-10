import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="text-light" onClick={() => navigate("/")}>
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="text-light" onClick={() => navigate("/")}>
              Home
            </Nav.Link>
            <Nav.Link className="text-light" onClick={() => navigate("/about")}>
              About Me
            </Nav.Link>
            <Nav.Link
              className="text-light"
              onClick={() => navigate("/projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
