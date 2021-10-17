import React from 'react';
import { Container } from 'react-bootstrap';
import Breakfasts from '../Home/Foods/Breakfasts/Breakfasts';
import Dinners from '../Home/Foods/Dinners/Dinners';
import Lunches from '../Home/Foods/Lunches/Lunches';

const AllFoods = () => {
	return (
		<Container>
			<Breakfasts />
			<Lunches />
			<Dinners />
		</Container>
	);
};

export default AllFoods;
