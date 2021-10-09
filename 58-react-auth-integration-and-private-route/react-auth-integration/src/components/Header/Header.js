import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './Header.css';

const Header = () => {
	const { user, logOut } = useAuth();

	return (
		<div className="header">
			<Link to="/home">Home</Link>
			<Link to="/shipping">Shipping</Link>
			<Link to="/placeOrder">Place Order</Link>
			<Link to="/register">Register</Link>
			<Link to="/login">Login</Link>
			<span>{user.displayName} </span>
			{user?.email && <button onClick={logOut}>log out</button>}
		</div>
	);
};

export default Header;
