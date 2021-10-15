import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import './Login.css';

const Login = () => {
	const { signInUsingGoogle } = useAuth();
	library.add(faFacebookF);
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
				<Button onClick={signInUsingGoogle} className="btn-warning">
					<FontAwesomeIcon icon={['fab', 'google']} />
					Sign In With Google
				</Button>
				<br />
				<br />

				<Button className="btn-warning">
					<FontAwesomeIcon icon={['fab', 'facebook-f']} />
					Sign In With Facebook
				</Button>
			</div>
		</Container>
	);
};

export default Login;
