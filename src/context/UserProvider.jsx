import { useState, useEffect, useCallback } from "react";
import { getSessionStorage } from "../helpers/handleSessionStorage";
import UserContext from "./UserContext";

let userInit = getSessionStorage("userSession");

const UserProvider = ({ children }) => {
  const [userSession, setUserSession] = useState(JSON.parse(userInit) ?? null);
  const [loggedIn, setLoggedIn] = useState(userSession ? true : false);
  const [mygames, setMygames] = useState([]);

  //************* FETCH GAMES DB  *************
  const fetchGames = useCallback(async () => {
    try {
      let headersList = {
        Accept: "*//*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${userSession?.token}`,
      };

      let response = await fetch(
        `https://localhost:7122/mygames/${userSession?.user.id}`,
        {
          method: "GET",
          headers: headersList,
        }
      );

      let data = await response.text();
      let dataObject = JSON.parse(data);
      setMygames(dataObject);
    } catch (error) {
      console.log("error en fetchGames() - provider");
    }
  }, [userSession?.token, userSession?.user.id]);

  useEffect(() => {
    if (userSession?.user) {
      fetchGames();
    }
  }, [userSession?.user, fetchGames]);

  console.log("MYGAMES-EN-CONTEXT: ", mygames);

  const data = {
    userSession,
    setUserSession,
    loggedIn,
    setLoggedIn,
    mygames,
    setMygames,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
