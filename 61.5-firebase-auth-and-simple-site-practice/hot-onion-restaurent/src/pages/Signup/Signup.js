import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Container } from 'react-bootstrap';
import logo2 from '../../images/logo2.png';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
	const { handleNameChange, handleRegistration, handleEmailChange, handlePasswordChange, error, handleResetPassword, isLogin } = useAuth();

	return (
		<Container className="text-center signup-form mt-5 mb-5 background-image">
			<form onSubmit={handleRegistration}>
				<img className="logo  mb-5" src={logo2} alt="" />
				<br />
				<input type="email" name="" id="" placeholder="Your Name" onBlur={handleNameChange} />
				<br />
				<input type="email" name="" id="" placeholder="Your Email" onBlur={handleEmailChange} />
				<br />
				<input type="password" name="" id="" placeholder="Your PasswordEmail" onBlur={handlePasswordChange} />
				<br />
				<br />
				{error}
				<button type="submit" className="btn btn-success">
					{isLogin ? 'Login' : 'Signup'}
				</button>

				<br />
				<br />
				<h5>
					Have an account ? <Link to="/login">Login</Link>
				</h5>
				<br />
				<br />
				<div className="row mb-3 text-danger">Forgot password?</div>

				<button type="button" onClick={handleResetPassword} className="btn btn-secondary btn-sm">
					Reset Password
				</button>
			</form>
		</Container>

		// <Container className="text-center mt-5 mb-5">
		// 	<img className="logo mb-5" src={logo2} alt="" />
		// 	<form onSubmit={handleRegistration} className="signup-form">
		// 		<h3>Please {isLogin ? 'Login' : 'Signup'}</h3>
		// 		{!isLogin && (
		// 			<div className="row mb-3">
		// 				<div className="col-sm-10">
		// 					<input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
		// 				</div>
		// 			</div>
		// 		)}
		// 		<div className="row mb-3">
		// 			<div className="col-sm-10">
		// 				<input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
		// 			</div>
		// 		</div>
		// 		<div className="col-sm-10">
		// 			<input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
		// 		</div>
		// 	</form>
		// 	<div className="row mb-3">
		// 		<div className="col-sm-10 offset-sm-2">
		// 			<div className="form-check">
		// 				<input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
		// 				<h5>
		// 					I have an account ? <Link to="/login">Login</Link>
		// 				</h5>
		// 				<br />
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<div className="row mb-3 text-danger">
		// 		{error}
		// 		<button type="submit" className="btn btn-success">
		// 			{isLogin ? 'Login' : 'Signup'}
		// 		</button>
		// 		<br />
		// 		<br />
		// 		Forgot password?
		// 		<br />
		// 		<button type="button" onClick={handleResetPassword} className="btn btn-secondary btn-sm">
		// 			Reset Password
		// 		</button>
		// 	</div>
		// </Container>
	);
};

export default Signup;
