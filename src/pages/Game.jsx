import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import platform from '../data/platforms.js';
import { getPlatformImageArray } from '../helpers/getPlatformImage.js';
import { FaRankingStar } from 'react-icons/fa6';
import { IoMdArrowBack } from 'react-icons/io';
import { RiCodeFill } from 'react-icons/ri';
import { MdDateRange } from 'react-icons/md';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaSquareReddit } from 'react-icons/fa6';
import { MdOutlineDescription } from 'react-icons/md';
import { BsJoystick } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import './Game.css';

export const Game = () => {
	const gameId = useParams();

	const [game, setGame] = useState();
	const [read, setRead] = useState(false);

	const previousPage = window.history;
	console.log('previous: ', previousPage);

	useEffect(() => {
		window.scrollTo(0, 0);
		fetch(
			`https://api.rawg.io/api/games/${gameId.id}?key=01de356b02bb4257b02f2c2ca4c78ad6`
		)
			.then((response) => response.json())
			.then((data) => setGame(data));
	}, []);

	const handleAlgo = () => {
		setRead(!read);
	};

	// console.log(game);

	return (
		<div className='game-page'>
			{game ? (
				<div className='game-content'>
					<div className='back-arrow-div'>
						<NavLink
							to='/'
							className='arrow-icon'
						>
							<IoMdArrowBack />
						</NavLink>
					</div>
					<h2 className='game-title'>{game?.name}</h2>
					<div className='game-image-texts-div'>
						<div className='game-image-div'>
							<div
								className='game-image'
								style={{ backgroundImage: `url(${game?.background_image})` }}
							/>
						</div>
						<div className='game-platform-div'>
							<h6 className='platforms-title'>
								<span className='game-text-enphasis'>
									<BsJoystick /> Platforms:
								</span>
							</h6>
							{game?.platforms?.map((item, index) => (
								<div key={index}>
									<div
										key={index}
										className='logo-name'
									>
										<span className='logo-platform-name'>
											{item.platform.name}
										</span>
										<img
											className='game-platform-logo'
											key={index}
											src={getPlatformImageArray(item.platform.id, platform)}
											alt={`name ${item.platform.name}`}
										/>
									</div>
								</div>
							))}
						</div>
						<div className='game-platform-texts'>
							<div className='textos-div'>
								<h6>
									{' '}
									<span className='game-text-enphasis'>
										<FaRankingStar /> RAWG Rank:
									</span>{' '}
									{game?.rating}
								</h6>
								<h6>
									{' '}
									<span className='game-text-enphasis'>
										<RiCodeFill /> Developer:
									</span>{' '}
									{game?.developers[0]?.name}
								</h6>
								<h6>
									{' '}
									<span className='game-text-enphasis'>
										{' '}
										<MdDateRange />
										Released:
									</span>{' '}
									{game?.released}
								</h6>

								<h6>
									{' '}
									<span className='game-text-enphasis'>
										{' '}
										<FaExternalLinkAlt />
										Website:
									</span>{' '}
									<a
										href={game?.website}
										target='_blank'
									>
										{game?.website}
									</a>
								</h6>
								<h6>
									{' '}
									<span className='game-text-enphasis'>
										<FaSquareReddit /> Reddit:
									</span>{' '}
									<a
										href={game?.reddit_url}
										target='_blank'
									>
										{game?.reddit_url}
									</a>
								</h6>

								<h6>
									<span className='game-text-enphasis'>
										<MdOutlineDescription /> Description:
									</span>{' '}
								</h6>
								<p
									className={
										read ? 'game-description ' : ' game-description hideText '
									}
								>
									{game?.description_raw}
								</p>
								<button
									className='game-read-button'
									onClick={handleAlgo}
								>
									{read ? (
										<span>
											<IoIosArrowUp /> Read Less...
										</span>
									) : (
										<span>
											<IoIosArrowDown />
											Read More...
										</span>
									)}
								</button>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className='loadership_ELDPB'>
					<div></div>
					<div></div>
				</div>
			)}
		</div>
	);
};
