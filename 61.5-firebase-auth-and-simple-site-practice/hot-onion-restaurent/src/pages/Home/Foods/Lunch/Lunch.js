import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import './Lunch.css';

const Lunch = (lunch) => {
	// const { lunch } = props;
	const { name, price, description, img } = lunch;

	return (
		<Container className="lunch-container">
			<Col>
				<Card className="lunch">
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

export default Lunch;
