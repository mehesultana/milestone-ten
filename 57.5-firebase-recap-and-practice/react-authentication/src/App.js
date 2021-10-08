import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import initializeAuthentication from './Firebase/firebase.initialize';
import { useState } from 'react';
import img from './Image/shopping2.png';
import { Container } from 'react-bootstrap';

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

function App() {
	const [user, setUser] = useState({});
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const auth = getAuth();

	const handleGoogleSignIn = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const { displayName, email, photoURL } = result.user;
				const loggedInUser = {
					name: displayName,
					email: email,
					photo: photoURL,
				};
				setUser(loggedInUser);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleGithubSignIn = () => {
		signInWithPopup(auth, gitHubProvider).then((result) => {
			const { displayName, email, photoURL } = result.user;
			const loggedInUser = {
				name: displayName,
				email: email,
				photo: photoURL,
			};
			setUser(loggedInUser);
		});
	};

	const handleSignOut = () => {
		signOut(auth).then(() => {
			setUser({});
		});
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleRegistration = (e) => {
		e.preventDefault();

		console.log(email, password);

		if (password.length < 6) {
			setError('Password must be at least 6 characters long');
			return;
		}
		if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
			setError('Password Must contain 2 upper case');
			return;
		}

		createUserWithEmailAndPassword(auth, email, password).then((result) => {
			const user = result.user;
			console.log(user);
		});
	};

	return (
		<Container>
			<div id="carouselExampleSlidesOnly" className="carousel slide bg-info bg-opacity-50 intro-part" data-ride="carousel ">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<div className="row align-items-center">
							<div className="col-md-6 mt-5 my-5 mb-5  my-5 order-md-1 pb-5 banner-text bg-light">
								<form onSubmit={handleRegistration}>
									<h2>Please Register</h2>
									<div className="form-group row mt-5 ">
										<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
											Email
										</label>
										<div className="col-sm-10">
											<input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="Email" required />
										</div>
									</div>
									<br />
									<div className="form-group row">
										<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
											Password
										</label>
										<div className="col-sm-10">
											<input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder="Password" required />
										</div>
									</div>
									<br />

									<div className="form-group row">
										<div className="col-sm-2">Checkbox</div>
										<div className="col-sm-10">
											<div className="form-check">
												<input className="form-check-input" type="checkbox" id="gridCheck1" />
												<label className="form-check-label" htmlFor="gridCheck1">
													Example checkbox
												</label>
											</div>
										</div>
									</div>
									<br />
									<div className="text-danger"> {error}</div>
									<div className="form-group row">
										<div className="col-sm-10">
											<button type="submit" className="btn btn-primary">
												Register
											</button>
										</div>
										<br />
										<br />

										<h5>Already Have an Account?</h5>

										{!user.name ? (
											<div>
												<button onClick={handleGoogleSignIn} type="button" className="btn btn-info">
													Sign In With Google
												</button>
												<br />
												<br />

												<button onClick={handleGithubSignIn} type="button" className="btn btn-dark">
													Sign In With Github
												</button>
											</div>
										) : (
											<button onClick={handleSignOut} type="button" className="btn btn-danger">
												Sign Out
											</button>
										)}
										<br />
										{user.name && (
											<div>
												<h1> Welcome {user.name}</h1>
												<h4>Your Email address : {user.email}</h4>
												<img src={user.photo} alt="" />
											</div>
										)}
									</div>
								</form>
							</div>
							<div className="col-md-6 align-items-center order-2 order-md-2">
								<img src={img} className="d-block w-50" alt="..." />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>------------------------------</div>
		</Container>
	);
}

export default App;
