import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../../Login/Login/Login';
import Signup from '../../Signup/Signup';
import AllFood from '../Foods/AllFoods/AllFood';

const Home = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/signup">
						<Signup />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/allfood">
						<AllFood />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default Home;
