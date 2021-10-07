import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from 'firebase/auth';
import initializeAuthentication from './Firebase/firebase.initialize';
import { useState } from 'react';

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

	return (
		<div className="App">
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