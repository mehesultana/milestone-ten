import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
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
					<Link to="/home">
						<img to="/home" className="logo" src={logo2} alt="" />
					</Link>

					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<FontAwesomeIcon icon={faCartPlus} />

						{user?.email && (
							<Navbar.Text>
								Signed in as: <a href="#login">{user.displayName}</a>
							</Navbar.Text>
						)}
						{user?.email ? (
							<button className="logout_btn" onClick={logOut}>
								Logout
							</button>
						) : (
							<div>
								<Link to="/login">Login</Link>
								<Link className="ms-3 signUp" to="/signup">
									Sign up
								</Link>
							</div>
						)}
						{/* <Nav.Link as={Link} to="/signup">
							Signup
						</Nav.Link> */}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
