import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Breakfast from '../Breakfast/Breakfast';

const Breakfasts = () => {
	const [breakfasts, setBreakfasts] = useState([]);

	useEffect(() => {
		fetch(`breakfast.json`)
			.then((res) => res.json())
			.then((data) => setBreakfasts(data));
	}, []);

	return (
		<Container>
			<h1 className="text-primary mt-5">Our breakfasts</h1>
			<Row xs={2} md={3} className="g-4 ">
				{breakfasts.map((breakfast) => (
					<Breakfast key={breakfast.id} breakfast={breakfast}></Breakfast>
				))}
			</Row>
		</Container>
	);
};

export default Breakfasts;
