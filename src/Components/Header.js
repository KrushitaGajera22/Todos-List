import React from 'react'
import PropTypes from 'prop-types'
  import Button from 'react-bootstrap/Button';
  import Container from 'react-bootstrap/Container';
  import Form from 'react-bootstrap/Form';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';

export default function Header(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
    <Navbar.Brand href="/">{props.title}</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Nav.Link href="/">Home</Nav.Link>
        <span className="mx-2"></span>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
        />
        <Form className="d-flex">
        <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
        </Form>
    </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

Header.defaultProps = {
    title: "Your Title Here",
    searchBar: true, 
}

Header.protoTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired,
}