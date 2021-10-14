import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import './Dinner.css';

const Dinner = ({ dinner }) => {
	const { name, price, description, img } = dinner;

	return (
		<Container className="dinner-container">
			<Col>
				<Card className="dinner">
					<Card.Img variant="top" src={img} />
					<Card.Body>
						<Card.Title>{name}</Card.Title>
						<h2 className="text-center">${price}</h2>
						<Card.Text>{description}</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Container>
	);
};

export default Dinner;
