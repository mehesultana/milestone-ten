import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Breakfasts from '../Breakfasts/Breakfasts';
import Dinners from '../Dinners/Dinners';
import FoodBar from '../FoodBar/FoodBar';
import Lunches from '../Lunches/Lunches';
import './AllFood.css';

const AllFood = () => {
	const { user } = useAuth();

	return (
		<div>
			<Router>
				<FoodBar />
				<Switch>
					<Route exact path="/">
						<Breakfasts></Breakfasts>
					</Route>
					<Route exact path="/home/">
						<Breakfasts></Breakfasts>
					</Route>
					<Route exact path="/breakfast">
						<Breakfasts></Breakfasts>
					</Route>
					<Route exact path="/lunch">
						<Lunches></Lunches>
					</Route>
					<Route exact path="/dinner">
						<Dinners></Dinners>
					</Route>
				</Switch>
			</Router>
			<div className="text-center">
				{!user?.email ? (
					<Link to="/login">
						<button className="btn btn-secondary  my-4">Checkout Your Food</button>{' '}
					</Link>
				) : (
					<Link to="/cart">
						<button className="btn btn-secondary  my-4">Checkout Your Food</button>{' '}
					</Link>
				)}
			</div>
		</div>
	);
};

export default AllFood;
