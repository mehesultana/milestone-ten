import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo2 from '../../../images/logo2.png';
import './Header.css';

const Header = () => {
	return (
		<>
			<Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
				<Container>
					<img className="logo" src={logo2} alt="" />
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<FontAwesomeIcon icon={faCartPlus} />
						<Nav.Link to="/login">Login</Nav.Link>
						<Nav.Link to="/signup">Signup</Nav.Link>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
