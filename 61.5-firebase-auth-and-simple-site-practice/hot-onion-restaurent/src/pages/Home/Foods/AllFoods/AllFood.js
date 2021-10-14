import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Breakfasts from '../Breakfasts/Breakfasts';
import Dinners from '../Dinners/Dinners';
import FoodBar from '../FoodBar/FoodBar';
import Lunches from '../Lunches/Lunches';
import './AllFood.css';

const AllFood = () => {
	return (
		<div>
			<Router>
				<FoodBar />
				<Switch>
					<Route path="/breakfast">
						<Breakfasts />
					</Route>
					<Route path="/lunch">
						<Lunches />
					</Route>
					<Route path="/dinner">
						<Dinners />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default AllFood;
