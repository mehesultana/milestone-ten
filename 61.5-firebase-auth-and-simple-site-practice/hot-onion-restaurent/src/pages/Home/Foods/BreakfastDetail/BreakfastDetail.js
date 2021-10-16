import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const BreakfastDetail = () => {
	const { name } = useParams();
	const history = useHistory();

	const backHome = () => {
		history.push(`/home`);
	};
	const [breakfasts, setBreakfasts] = useState([]);
	useEffect(() => {
		setBreakfasts(`breakfast.json`[name]);
	}, [name]);
	const { price, description, img } = breakfasts;

	return (
		<div>
			<Container>
				<Card>
					<Card.Img variant="top" className="details-img" src={img} />
					<Card.Body>
						<h1>{name}</h1>
						<Card.Text>${price}</Card.Text>
						<p>{description}</p>
					</Card.Body>
					<Button className="mb-4" variant="warning" onClick={backHome}>
						Add To Cart
					</Button>
				</Card>
				<Button variant="success" onClick={backHome}>
					Back Home
				</Button>
			</Container>
		</div>
	);
};

export default BreakfastDetail;
