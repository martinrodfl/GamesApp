import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext.jsx";
import { IoStar } from "react-icons/io5";
import { BsBookmarkStarFill } from "react-icons/bs";
import { exists } from "../helpers/exists.js";
import "./Card.css";

export const Card = ({ id, index, slug, image }) => {
  const {
    userSession,
    setUserSession,
    loggedIn,
    setLoggedIn,
    mygames,
    setMygames,
  } = useContext(UserContext);

  const [bookmarked, setBookmarked] = useState(exists(mygames, id));
  const [cardMessage, setCardMessage] = useState("");
  const navigate = useNavigate();

  const goTogame = () => {
    navigate(`/game/${id}`);
  };

  //************* GUARDA JUEGO EN DB *************
  const saveMyGame = async () => {
    console.log("AGREGANDO GAME: ", id, " a ", mygames);
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${userSession.token}`,
    };

    let bodyContent = JSON.stringify({
      userId: userSession?.user.id,
      gameId: id,
    });

    let response = await fetch("https://localhost:7122/mygames", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.text();
    let dataObject = JSON.parse(data);
    console.log(dataObject);
    setMygames([...mygames], id);
    setBookmarked(true);
  };

  //************* ELIMINA JUEGO DE DB *************
  const deleteGame = async () => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${userSession.token}`,
    };

    let response = await fetch(
      `https://localhost:7122/mygames/${userSession?.user.id}/${id}`,
      {
        method: "DELETE",
        headers: headersList,
      }
    );

    let data = await response.text();
    let dataObject = JSON.parse(data);
    console.log(dataObject);
    const updatedGames = mygames.map((id) => id !== id);
    setMygames(updatedGames);
    setBookmarked(false);
  };

  //************* MANEJA GUARDA/ELIMINA *************
  const handleBookmark = () => {
    //NO LOGUEADO*****
    if (!loggedIn) {
      setCardMessage("To save a game you must be logged in");
      setTimeout(() => {
        setCardMessage("");
      }, 1000);
      return;
    }
    //LOGUEADO*****
    if (bookmarked) {
      deleteGame();
      setCardMessage("Game deleted");
      setTimeout(() => {
        setCardMessage("");
      }, 1000);
      return;
    }
    saveMyGame();
    setCardMessage("*Game saved");
    setTimeout(() => {
      setCardMessage("");
    }, 1000);
  };

  return (
    <div className="card-body">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="card-texts-div">
        <div className="card-texts-titles">
          <span className="card-number">
            {"#"}
            {index + 1}
          </span>
          <span className="separator"></span>
          <h3 className="card-texts-game-title">{slug}</h3>
        </div>
        <div className="card-texts-buttons-div">
          <button className="card-text-button" onClick={goTogame}>
            <span className="card-button-icon-star">
              <IoStar />
            </span>{" "}
            <span>See</span>{" "}
          </button>
          <button
            className={
              bookmarked
                ? "card-text-button-secondary bokmarked"
                : "card-text-button-secondary"
            }
            onClick={handleBookmark}
          >
            <span className="card-button-icon-bookmark">
              <BsBookmarkStarFill />
            </span>{" "}
          </button>
        </div>
        <div className="card-message">
          {bookmarked ? (
            <span className="saved">{cardMessage}</span>
          ) : (
            <span className="deleted">{cardMessage}</span>
          )}
        </div>
      </div>
    </div>
  );
};
