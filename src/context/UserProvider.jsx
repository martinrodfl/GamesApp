import { useState, useEffect } from "react";
import { getSessionStorage } from "../helpers/handleSessionStorage";
import UserContext from "./UserContext";

let userInit = getSessionStorage("userSession");

const UserProvider = ({ children }) => {
  const [userSession, setUserSession] = useState(JSON.parse(userInit) ?? null);
  const [loggedIn, setLoggedIn] = useState(userSession ? true : false);
  const [mygames, setMygames] = useState([]);

  // console.log("LOGGEDIN: ", loggedIn);
  // console.log("USERSESSION: ", userSession);

  //************* TRAER JUEGOS DE DB fetchGames() *************
  const fetchGames = async () => {
    try {
      let headersList = {
        Accept: "*/*",
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
    } finally {
    }
  };

  useEffect(() => {
    if (userSession?.user) {
      fetchGames();
    }
  }, []);

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
