import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../images/notfound.jpg';

const NotFound = () => {
	return (
		<Container>
			<img src={img} alt="" />
		</Container>
	);
};

export default NotFound;
