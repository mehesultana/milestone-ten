import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
	const { signInUsingGoogle } = useAuth();
	const location = useLocation();
	console.log('came from', location.state?.from);

	return (
		<div className="login-form">
			<div>
				<h2>Login</h2>
				<form>
					<input type="email" name="" id="" placeholder="Your Email" />
					<br />
					<input type="password" name="" id="" />
					<br />
					<input type="submit" />
					<p>
						New to ema-John <Link to="/register">Create Account</Link>
					</p>
					<div>------or------</div>
					<button className="btn-regular" onClick={signInUsingGoogle}>
						Google Sign In
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
