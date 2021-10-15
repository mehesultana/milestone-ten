import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Container } from 'react-bootstrap';
import logo2 from '../../images/logo2.png';
import './Signup.css';

const Signup = () => {
	const { handleNameChange, handleRegistration, handleEmailChange, handlePasswordChange, toggleLogin, error, handleResetPassword, isLogin } = useAuth();

	return (
		<Container className="text-center mt-5 mb-5">
			<img className="logo mb-5" src={logo2} alt="" />
			<form onSubmit={handleRegistration} className="signup-form"></form>
			<h3>Please {isLogin ? 'Login' : 'Register'}</h3>
			{!isLogin && (
				<div className="row mb-3">
					<div className="col-sm-10">
						<input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
					</div>
				</div>
			)}
			<div className="row mb-3">
				<div className="col-sm-10">
					<input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
				</div>
			</div>
			<div className="col-sm-10">
				<input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
			</div>
			<div className="row mb-3">
				<div className="col-sm-10 offset-sm-2">
					<div className="form-check">
						<input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
						<label className="form-check-label" htmlFor="gridCheck1">
							Already Registered?
						</label>
					</div>
				</div>
			</div>
			<div className="row mb-3 text-danger">{error}</div>
			<button type="submit" className="btn btn-success">
				{isLogin ? 'Login' : 'Register'}
			</button>
			<br />
			<br />
			Forgot password?
			<br />
			<button type="button" onClick={handleResetPassword} className="btn btn-secondary btn-sm">
				Reset Password
			</button>
		</Container>
	);
};

export default Signup;
