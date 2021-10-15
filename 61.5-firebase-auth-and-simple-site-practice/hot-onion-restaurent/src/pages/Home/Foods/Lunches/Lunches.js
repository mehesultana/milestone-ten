import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Lunch from '../Lunch/Lunch';

const Lunches = () => {
	const [lunches, setLunches] = useState([]);

	useEffect(() => {
		fetch(`lunch.json`)
			.then((res) => res.json())
			.then((data) => setLunches(data));
	}, []);

	return (
		<Container>
			<h1 className="text-primary mt-5">Our lunches</h1>
			<Row xs={2} md={3} className="g-4 ">
				{lunches.map((lunch) => (
					<Lunch key={lunch.id} lunch={lunch}></Lunch>
				))}
			</Row>
		</Container>
	);
};

export default Lunches;
