import { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import { CardList } from "../components/CardList";
import hero from "../assets/games_characters.png";
import hero_port from "../assets/games_characters_port.jpg";
import "./Home.css";

export const Home = () => {
  const { userSession, setUserSession, loggedIn, setLoggedIn } =
    useContext(UserContext);

  const [imageSrc, setImageSrc] = useState(hero_port);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 835) {
        setImageSrc(hero_port);
      } else {
        setImageSrc(hero);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // console.log("loged in home: ", loggedIn);

  return (
    <div className="home">
      <div className="home-hero">
        <img className="home-hero-image" src={imageSrc} alt="" />
      </div>
      <h1 className="home-title">The 250 top-ranked games</h1>
      <div className="home-list">
        <CardList />
      </div>
    </div>
  );
};
