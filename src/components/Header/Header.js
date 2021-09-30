import React from "react";
import {
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    Button,
    Stack,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../logo.jpg";
const Header = (props) => {
    const { handleSearch } = props;
    return (
        <Navbar bg="dark" variant="dark px-5" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home" className="fw-bold text-warning">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    Food Fusion
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Stack direction="horizontal" gap={3}>
                            <NavLink
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/menu"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                Menu
                            </NavLink>
                            <NavLink
                                to="/orders"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                Orders
                            </NavLink>
                            <NavLink
                                to="/about"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                About
                            </NavLink>
                        </Stack>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            onChange={handleSearch}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="btn btn-warning">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
