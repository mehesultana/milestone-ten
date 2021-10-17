import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import logo2 from '../../../images/logo2.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { BsArrowBarRight } from 'react-icons/bs';
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
						<Link className="ms-3 home" to="/home">
							Home
						</Link>
						<Link className="ms-3 allfoods" to="/allfoods">
							All Foods
						</Link>
						<Link className="ms-3 cart" to="/cart">
							Cart <FontAwesomeIcon icon={faCartPlus} />
						</Link>

						{user?.email && (
							<Navbar.Text>
								Signed in as: <a href="#login">{user.displayName}</a>
							</Navbar.Text>
						)}
						{user?.email ? (
							// <button className="btn-warning" onClick={logOut}>
							// 	Logout
							// </button>
							<Button className="btn btn-warning" onClick={logOut}>
								Log Out
								<BsArrowBarRight className="w-6 h-6" />
							</Button>
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
