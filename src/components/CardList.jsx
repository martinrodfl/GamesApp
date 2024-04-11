import { useEffect, useState, memo } from "react";
import { Card } from "./Card.jsx";
import "./CardList.css";

export const CardList = memo(() => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setIsLoading(true);

    setError(null);
    // console.log("fetched page: ", page);

    try {
      if (page > 11) {
        return;
      }

      const response = await fetch(
        `https://rawg.io/api/games/lists/popular?discover=
				true&&page_size=24&page=${page}&key=01de356b02bb4257b02f2c2ca4c78ad6`
      );
      const data = await response?.json();
      console.log(data);
      if (page === 1) {
        setItems(data?.results);
      } else {
        setItems((prevItems) => [...prevItems, ...data?.results]);
      }

      setPage(page + 1);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight &&
      !isLoading
    ) {
      console.log("Debe hacer fetch de datos");
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <div className="cardList-body">
      <div className="game-list">
        <>
          {Array.isArray(items) &&
            items.map((item, index) => (
              <Card
                key={item.id}
                id={item.id}
                index={index}
                slug={item.name}
                image={item.background_image}
              />
            ))}
        </>
      </div>
      {isLoading && (
        <div className="loadership_ELDPB">
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
});
