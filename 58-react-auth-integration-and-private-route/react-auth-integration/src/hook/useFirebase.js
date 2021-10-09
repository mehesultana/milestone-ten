import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState('');

	const auth = getAuth();

	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();

	const signInUsingGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				console.log(result.user);
				setUser(result.user);
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	const signInUsingGithub = () => {
		signInWithPopup(auth, githubProvider).then((result) => {
			console.log(result.user);
			setUser(result.user);
		});
	};

	const logOut = () => {
		signOut(auth).then(() => {
			setUser({});
		});
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log('inside state change', user);
				setUser(user);
			}
		});
	}, []);

	return {
		user,
		error,
		signInUsingGoogle,
		logOut,
		signInUsingGithub,
	};
};

export default useFirebase;
