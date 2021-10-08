import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from 'firebase/auth';
import initializeAuthentication from './Firebase/firebase.initialize';
import { useState } from 'react';
import img from './Image/shopping2.png';

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

function App() {
	const [user, setUser] = useState({});
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

	const handleRegistration = (e) => {
		console.log('registation');
		e.preventDefault();
	};

	return (
		<div className="App">
			<div id="carouselExampleSlidesOnly" className="carousel slide bg-info bg-opacity-50 intro-part" data-ride="carousel ">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<div className="row align-items-center">
							<div className="col-md-6 mt-5 mb-5 order-md-1 pb-5 banner-text">
								<form onSubmit={handleRegistration}>
									<div className="form-group row">
										<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
											Email
										</label>
										<div className="col-sm-10">
											<input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
										</div>
									</div>
									<br />
									<div className="form-group row">
										<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
											Password
										</label>
										<div className="col-sm-10">
											<input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
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
									<div className="form-group row">
										<div className="col-sm-10">
											<button type="submit" className="btn btn-primary">
												Sign in
											</button>
										</div>
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
			<br />
			<br />
			<br />
			{!user.name ? (
				<div>
					<button onClick={handleGoogleSignIn} type="button" className="btn btn-info">
						Google Sign In
					</button>
					<br />
					<button onClick={handleGithubSignIn} type="button" className="btn btn-dark">
						Github Sign In
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
	);
}

export default App;
