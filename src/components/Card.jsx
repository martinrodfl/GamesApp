import { useNavigate } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { BsBookmarkStarFill } from "react-icons/bs";
import "./Card.css";

export const Card = ({ id, index, slug, image }) => {
  const navigate = useNavigate();

  const goTogame = () => {
    navigate(`/game/${id}`);
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
          <button className="card-text-button-secondary">
            <span className="card-button-icon-bookmark">
              <BsBookmarkStarFill />
            </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
