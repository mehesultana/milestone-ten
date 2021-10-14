import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
	return (
		<Container>
			<div className="banner-image">
				<div className="banner-text">
					<h1>Best Food Waiting For Your Belly</h1>
					<div className="input-group mb-3">
						<input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
						<div className="input-group-prepend">
							<button className="btn btn-outline-secondary" type="button">
								Search
							</button>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Banner;
