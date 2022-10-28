import { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/UserInterface/Header/Header";
import SearchBar from "./components/UserInterface/SearchBar/SearchBar";
import UserDisplay from "./components/UserInterface/UserDisplay/UserDisplay";

function App() {
  const [apiData, setApiData] = useState({});

  const fetchUser = async (username) => {
    try {
      const resUser = await fetch(`https://api.github.com/users/${username}`);
      if (!resUser.ok) throw new Error("Problem getting user data");
      const data = await resUser.json();
      setApiData(data);
    } catch (err) {
      setApiData({});
      console.error(`An error occurred: ${err}`);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.displayCard}>
        <Header />
        <SearchBar fetchUser={fetchUser} />
        <UserDisplay userData={apiData} />
      </div>
    </div>
  );
}

export default App;
