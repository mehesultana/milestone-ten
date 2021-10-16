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
		</div>
	);
};

export default AllFood;
