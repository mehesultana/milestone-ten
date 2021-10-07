import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import initializeAuthentication from './Firebase/firebase.initialize';
import { useState } from 'react';

initializeAuthentication();

const provider = new GoogleAuthProvider();

function App() {
	const [user, setUser] = useState({});

	const handleGoogleSignIn = () => {
		const auth = getAuth();
		signInWithPopup(auth, provider)
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

	return (
		<div className="App">
			<button onClick={handleGoogleSignIn} type="button" className="btn btn-info">
				Google Sign In
			</button>
			<br />
			{user.email && (
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
