import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo2 from '../../../images/logo2.png';
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
	const { user, logOut } = useAuth();

	return (
		<>
			<Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
				<Container>
					<img className="logo" src={logo2} alt="" />
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<FontAwesomeIcon icon={faCartPlus} />
						<Nav.Link as={Link} to="/allfood">
							All Food
						</Nav.Link>
						{user?.email ? (
							<Button onClick={logOut} variant="light">
								Logout
							</Button>
						) : (
							<Nav.Link as={Link} to="/login">
								Login
							</Nav.Link>
						)}
						{/* <Nav.Link as={Link} to="/login">
							Login
						</Nav.Link> */}
						<Nav.Link as={Link} to="/signup">
							Signup
						</Nav.Link>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
