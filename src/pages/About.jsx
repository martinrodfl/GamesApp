import { NavLink } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import './About.css';

export const About = () => {
	return (
		<div className='about'>
			<div className='back-arrow-div'>
				<NavLink
					to='/'
					className='arrow-icon'
				>
					<IoMdArrowBack />
				</NavLink>
			</div>
			<div className='about-texts'>
				<h1 className='about-title'>About Us</h1>
				<p className='about-paragraph'>
					This website is a hobby creation and all game data is obtained from :
					<a
						href='https://rawg.io/'
						target='_blank'
					>
						{' '}
						https://rawg.io/
					</a>
				</p>
				<p className='about-paragraph'>
					The home (wide) image is user created :
					<a
						href='https://www.deviantart.com/leafpenguins/art/Super-Smash-Bros-Ultimate-OFFICIAL-Panoramic-Art-749450766'
						target='_blank'
					>
						{' '}
						Super Smash Bros. Ultimate OFFICIAL Panoramic Art By Leafpenguins
					</a>{' '}
					from DebiantArt webpage
				</p>
				<p className='about-paragraph'>
					The home (mobile) image is user created :
					<a
						href='https://www.deviantart.com/hybridmink/art/Super-Smash-Bros-Ultimate-792151347'
						target='_blank'
					>
						{' '}
						Super Smash Bros. (Ultimate) By hybridmink
					</a>{' '}
					from DebiantArt webpage
				</p>
			</div>
		</div>
	);
};
