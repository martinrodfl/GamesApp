import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '../components/Card';
import { IoMdArrowBack } from 'react-icons/io';
import './MyGames.css';

export const MyGames = () => {
	const [isLoading, setIsLoading] = useState(false);
	const myGamesIds = [3328, 4200, 28, 324997, 58175, 3990];
	const [myGames, setMyGames] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const promises = myGamesIds.map(async (id) => {
				const url = `https://api.rawg.io/api/games/${id}?key=01de356b02bb4257b02f2c2ca4c78ad6`;
				const response = await fetch(url);
				const data = await response.json();
				return data;
			});
			const results = await Promise.all(promises);
			setMyGames(results);
			setIsLoading(false);
		};
		fetchData();
	}, []);

	return (
		<div className='my-games-page'>
			<div className='my-games-content'>
				<div className='back-arrow-div'>
					<NavLink
						to='/'
						className='arrow-icon'
					>
						<IoMdArrowBack />
					</NavLink>
				</div>
				My games
			</div>
			<div className='cardList-body'>
				<div className='game-list'>
					<>
						{Array.isArray(myGames) &&
							myGames.map((game, index) => (
								<Card
									key={game.id}
									id={game.id}
									index={index}
									slug={game.name}
									image={game.background_image}
								/>
							))}
					</>
				</div>
				{isLoading && (
					<div className='loadership_ELDPB'>
						<div></div>
						<div></div>
					</div>
				)}
			</div>
		</div>
	);
};
