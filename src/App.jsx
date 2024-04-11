import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProvider from './context/UserProvider.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { Home } from './pages/Home.jsx';
import { LoginRegister } from './pages/LoginRegister.jsx';
import { Game } from './pages/Game.jsx';
import { About } from './pages/About.jsx';
import { MyGames } from './pages/MyGames.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';
import './App.css';

function App() {
	return (
		<>
			<UserProvider>
				<Router>
					<Navbar />
					<main className='main-content'>
						<Routes>
							<Route
								path='/'
								element={<Home />}
							/>
							<Route
								path='/game/:id'
								element={<Game />}
							/>
							<Route
								path='/about-us'
								element={<About />}
							/>
							<Route
								path='/mygames'
								element={<MyGames />}
							/>
							<Route
								path='/login-register'
								element={<LoginRegister />}
							/>
							<Route
								path='*'
								element={<ErrorPage />}
							/>
						</Routes>
					</main>
					<Footer />
				</Router>
			</UserProvider>
		</>
	);
}

export default App;
