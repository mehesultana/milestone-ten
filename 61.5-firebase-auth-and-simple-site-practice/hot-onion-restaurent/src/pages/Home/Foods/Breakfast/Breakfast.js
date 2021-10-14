import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import './Breakfast.css';

const Breakfast = ({ breakfast }) => {
	// const { breakfast } = props;
	const { name, price, description, img } = breakfast;

	return (
		<Container className="breakfast-container">
			<Col>
				<Card className="breakfast">
					<Card.Img variant="top" src={img} />
					<Card.Body>
						<Card.Title>{name}</Card.Title>
						<h2 className="text-center">${price}</h2>
						{/* <Card.Text>Price : ${price}</Card.Text> */}
						<Card.Text>{description}</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Container>
	);
};

export default Breakfast;
