import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = ({ about }) => {
	// const { about } = props;
	const { name, description, img } = about;

	return (
		<Container className="breakfast-container">
			<Col>
				<Card className="breakfast">
					<Card.Img variant="top" src={img} />
					<Card.Body>
						<Card.Title>{name}</Card.Title>
						<Card.Text>{description}</Card.Text>
						<Link>
							See more
							<FontAwesomeIcon icon={faArrowAltCircleRight} />
						</Link>
					</Card.Body>
				</Card>
			</Col>
		</Container>
	);
};

export default About;
