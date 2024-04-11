import { CardList } from '../components/CardList';
import hero from '../assets/games_characters.png';
import hero_port from '../assets/games_characters_port.jpg';
import './Home.css';
import { useState, useEffect } from 'react';

export const Home = () => {
	const [imageSrc, setImageSrc] = useState(hero_port);
	useState;

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 835) {
				setImageSrc(hero_port);
			} else {
				setImageSrc(hero);
			}
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<div className='home'>
			<div className='home-hero'>
				<img
					className='home-hero-image'
					src={imageSrc}
					alt=''
				/>
			</div>
			<h1 className='home-title'>The 250 top-ranked games</h1>
			<div className='home-list'>
				<CardList />
			</div>
		</div>
	);
};
