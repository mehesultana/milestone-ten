import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Abouts from '../../About/Abouts/Abouts';
import Banner from '../../Banner/Banner';
import Breakfasts from '../Breakfasts/Breakfasts';
import Dinners from '../Dinners/Dinners';
import FoodBar from '../FoodBar/FoodBar';
import Lunches from '../Lunches/Lunches';
import './AllFood.css';

const AllFood = () => {
	return (
		<div>
			<Router>
				<Banner />
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
				<Abouts />
			</Router>
		</div>
	);
};

export default AllFood;
