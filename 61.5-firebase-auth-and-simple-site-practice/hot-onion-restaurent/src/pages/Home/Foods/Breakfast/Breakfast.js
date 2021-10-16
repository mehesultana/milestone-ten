import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Breakfast.css';

const Breakfast = ({ breakfast }) => {
	// const { breakfast } = props;
	const { name, price, description, img } = breakfast;

	const history = useHistory();
	const handleDetailsClick = () => {
		history.push(`../BreakfastDetail/BreakfastDetail.js${name}`);
	};

	return (
		<Container className="breakfast-container">
			<Col>
				<Card className="breakfast">
					<Card.Img variant="top" src={img} />
					<Card.Body>
						<Card.Title>{name}</Card.Title>
						<h2 className="text-center">${price}</h2>
						<Card.Text>{description}</Card.Text>
						<button onClick={handleDetailsClick} type="button" className="btn btn-info">
							Details
						</button>
					</Card.Body>
				</Card>
			</Col>
		</Container>
	);
};

export default Breakfast;
