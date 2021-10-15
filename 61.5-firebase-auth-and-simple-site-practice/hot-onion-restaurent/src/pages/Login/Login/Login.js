import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
	return (
		<Container className="login-form">
			<div>
				<h2>Login</h2>
				<form>
					<input type="email" name="" id="" placeholder="Your Email" />
					<br />
					<input type="password" name="" id="" />
					<br />
					<input type="submit" value="Submit" />
				</form>
				<p>
					new to Hot Onion? <Link to="/signup">Create Account</Link>
				</p>
				<div>-------or----------</div>
				<button className="btn-regular">Google Sign In</button>
			</div>
		</Container>
	);
};

export default Login;
