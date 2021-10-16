import React from 'react';
import Abouts from '../About/Abouts/Abouts';
import Banner from '../Banner/Banner';
import AllFood from '../Foods/AllFoods/AllFood';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<AllFood></AllFood>
			<Abouts></Abouts>
		</div>
	);
};

export default Home;
