import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
	return (
		<Container className="text-center mt-5 mb-5">
			<h2>Please Signup</h2>
			<form>
				<input type="email" placeholder="Enter Your Email" />
				<br />
				<input type="password" placeholder="Enter Your Password" />
				<br />
				<input type="submit" value="submit" />
			</form>
			<Link to="/login">Already Registered?</Link>
		</Container>
	);
};

export default Signup;
