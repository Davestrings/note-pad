import React, { useEffect, useState } from "react";
import "./App.css";
import Practice from "./components/practice/Practice";
import Login from "./components/practice/Login";
import SearchApp from "./components/search/SearchApp";

function App() {
  const [appState, setAppState] = useState({
    isRegistered: false,
    isLoggedIn: false,
  });

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));

    if (localUser !== null) {
      setAppState({
        isRegistered: true,
      });
    }
    console.log(localUser);
    console.log("localUser:", localUser);
    sessionStorage.removeItem("user");
  }, []);

  return (
    <div className="App">
      {!appState.isRegistered && !appState.isLoggedIn ? <Practice /> : null}
      {appState.isRegistered && !appState.isLoggedIn ? (
        <Login appState={appState} setAppState={setAppState} />
      ) : null}
      {appState.isLoggedIn ? <SearchApp /> : null}
    </div>
  );
}

export default App;
