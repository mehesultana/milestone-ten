import React from 'react';
import useAuth from '../../hook/useAuth';

const Home = () => {
	const { user } = useAuth();

	return (
		<div>
			<h2>this is home</h2>
			<h5>User: {user.displayName}</h5>
		</div>
	);
};

export default Home;
