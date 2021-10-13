import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
	const [user, setuser] = useState({});
	const [isLoading, setIsLodaing] = useState(true);

	const auth = getAuth();

	const signInUsingGoogle = () => {
		setIsLodaing(true);
		const googleProvider = new GoogleAuthProvider();

		signInWithPopup(auth, googleProvider)
			.then((result) => {
				setuser(result.user);
			})
			.finally(() => setIsLodaing(false));
	};
	// observe user state change
	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setuser(user);
			} else {
				setuser({});
			}
			setIsLodaing(false);
		});
		return () => unsubscribed;
	}, []);

	const logOut = () => {
		setIsLodaing(true);

		signOut(auth)
			.then(() => {})
			.finally(() => setIsLodaing(false));
	};

	return {
		user,
		signInUsingGoogle,
		logOut,
	};
};

export default useFirebase;
