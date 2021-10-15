import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import About from '../About/About';
import './Abouts.css';

const Abouts = () => {
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		fetch(`about.json`)
			.then((res) => res.json())
			.then((data) => setAbouts(data));
	}, []);

	return (
		<Container className="about">
			<div className="about-text">
				<h1>Why You Choose Us</h1>
				<p>Barton waited twenty always repair in while we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded</p>
			</div>
			<Row xs={1} md={3} className="g-4 ">
				{abouts.map((about) => (
					<About key={about.id} about={about}></About>
				))}
			</Row>
		</Container>
	);
};

export default Abouts;
