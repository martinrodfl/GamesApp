import { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import { NavLink } from "react-router-dom";
import { Card } from "../components/Card";
import { IoMdArrowBack } from "react-icons/io";
import "./MyGames.css";

export const MyGames = () => {
  const { mygames } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(false);
  const [games, setGames] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const promises = mygames.map(async (id) => {
        const url = `https://api.rawg.io/api/games/${id}?key=01de356b02bb4257b02f2c2ca4c78ad6`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
      });
      const results = await Promise.all(promises);
      setGames(results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [mygames]);

  return (
    <div className="my-games-page">
      <div className="my-games-content">
        <div className="back-arrow-div">
          <NavLink to="/" className="arrow-icon">
            <IoMdArrowBack />
          </NavLink>
        </div>
        <h1 className="title">My Favorite Games</h1>
      </div>
      <div className="cardList-body">
        <div className="game-list">
          {games.map((game, index) => (
            <Card
              key={game.id}
              id={game.id}
              index={index}
              slug={game.name}
              image={game.background_image}
            />
          ))}
        </div>
        {isLoading && (
          <div className="loadership_ELDPB">
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
};
