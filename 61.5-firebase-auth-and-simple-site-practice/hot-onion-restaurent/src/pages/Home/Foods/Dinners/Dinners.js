import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Dinner from '../Dinner/Dinner';

const Dinners = () => {
	const [dinners, setDinners] = useState([]);

	useEffect(() => {
		fetch(`dinner.json`)
			.then((res) => res.json())
			.then((data) => setDinners(data));
	}, []);

	return (
		<Container>
			<Row xs={2} md={3} className="g-4 ">
				{dinners.map((dinner) => (
					<Dinner key={dinner.id} dinner={dinner}></Dinner>
				))}
			</Row>
		</Container>
	);
};

export default Dinners;
