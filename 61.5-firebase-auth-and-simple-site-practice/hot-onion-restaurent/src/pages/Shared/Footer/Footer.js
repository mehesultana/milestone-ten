import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
import logo from '../../../images/logo.png';

const Footer = () => {
	return (
		<Container>
			<div className="text-white footer">
				<img className="logo" src={logo} alt="" />
				<div className="col-lg-6 justify-content-center justify-content-lg-end d-flex">
					<ul>
						<li>About online food</li>
						<li>Read our blog</li>
						<li>Get Help</li>
					</ul>
				</div>

				<p className="text-center text-white py-3 m-0">© Copyright 2021 || Red Onion All Rights Reserved</p>
			</div>
		</Container>
	);
};

export default Footer;
