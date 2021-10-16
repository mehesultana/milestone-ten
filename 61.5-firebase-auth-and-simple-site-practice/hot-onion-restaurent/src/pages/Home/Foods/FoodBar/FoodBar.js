import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './FoodBar.css';

const FoodBar = () => {
	return (
		<div>
			<Container className="header my-5">
				<Nav className="navbar text-center">
					<NavLink to="/breakfast">Breakfast</NavLink>
					<NavLink to="/lunch">Lunch</NavLink>
					<NavLink to="/dinner">dinner</NavLink>
				</Nav>
			</Container>
		</div>
	);
};

export default FoodBar;
