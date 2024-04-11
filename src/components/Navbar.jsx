import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { IoClose, IoMenu } from 'react-icons/io5';
import joystick from '../assets/joystick.svg';
import UserContext from '../context/UserContext';
import { deleteSessionStorage } from '../helpers/handleSessionStorage';
import avatar from '../assets/arcade.svg';
import { getInitials } from '../helpers/getInitials.js';
import { FiHome } from 'react-icons/fi';
import { BsJoystick } from 'react-icons/bs';
import { TbLogin2 } from 'react-icons/tb';
import { TbLogout2 } from 'react-icons/tb';
import { MdOutlineDescription } from 'react-icons/md';
import './Navbar.css';

export const Navbar = () => {
	const { userSession, setUserSession } = useContext(UserContext);
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const closeMenuOnMobile = () => {
		if (window.innerWidth <= 1150) {
			setShowMenu(false);
		}
	};

	const handleLogout = () => {
		deleteSessionStorage('userSession');
		setUserSession(null);
		setTimeout(() => {
			closeMenuOnMobile();
		}, 500);
	};
	return (
		<header className='header'>
			<nav className='nav container'>
				<div className='nav-logo-icon-div'>
					<NavLink
						to='/'
						className='icon'
					>
						<img
							className='nav-icon'
							src={joystick}
							alt=''
						/>
					</NavLink>
					<NavLink
						to='/'
						className='nav-logo'
					>
						SuperGames
					</NavLink>
				</div>
				{/* nav menu */}
				<div
					className={`nav-menu ${showMenu ? 'show-menu' : ''}`}
					id='nav-menu'
				>
					{userSession?.user ? (
						<span className='nav-userName'>{userSession?.user?.userName}</span>
					) : (
						''
					)}
					<ul className='nav-list'>
						<li className='nav-item'>
							<NavLink
								to='/'
								className='nav-link '
								onClick={closeMenuOnMobile}
							>
								<span className='nav-link-inner-icon'>
									<FiHome />
								</span>
								<span className='nav-link-inner-text'>Home</span>
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								to='/mygames'
								className='nav-link'
								onClick={closeMenuOnMobile}
							>
								<span className='nav-link-inner-icon'>
									<BsJoystick />
								</span>
								<span className='nav-link-inner-text'>My Games</span>
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								to='/about-us'
								className='nav-link'
								onClick={closeMenuOnMobile}
							>
								<span className='nav-link-inner-icon'>
									<MdOutlineDescription />
								</span>
								<span className='nav-link-inner-text'>About Us</span>
							</NavLink>
						</li>
						{userSession?.user ? (
							<>
								<li className='nav-item'>
									<NavLink
										to='/'
										className='nav-link logout'
										onClick={handleLogout}
									>
										<span className='nav-link-inner-icon'>
											<TbLogout2 />
										</span>
										<span className='nav-link-inner-text'>Logout</span>
									</NavLink>
								</li>
								<div className='avatar-div-2'>
									<div className='avatar'>
										<img
											src={avatar}
											alt=''
											className='avatar-img'
										/>
									</div>
									<span className='avatar-name'>
										{getInitials(userSession?.user?.userName)}
									</span>
								</div>
							</>
						) : (
							<li className='nav-item'>
								<NavLink
									to='/login-register'
									className='nav-link'
									onClick={closeMenuOnMobile}
								>
									<span className='nav-link-inner-icon'>
										<TbLogin2 />
									</span>
									<span className='nav-link-inner-text'>Login</span>
								</NavLink>
							</li>
						)}
					</ul>

					<div
						className='nav-close'
						id='nav-close'
						onClick={toggleMenu}
					>
						<IoClose />
					</div>
				</div>

				<div
					className='nav-toggle'
					id='nav-toggle'
					onClick={toggleMenu}
				>
					{userSession ? (
						<div className='avatar-div'>
							<div className='avatar'>
								<img
									src={avatar}
									alt=''
									className='avatar-img'
								/>
							</div>
							<span className='avatar-name'>
								{getInitials(userSession?.user?.userName)}
							</span>
						</div>
					) : (
						<IoMenu />
					)}
				</div>
			</nav>
		</header>
	);
};
