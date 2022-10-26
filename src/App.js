import { useState } from "react";
import {
  faLink,
  faLocationDot,
  faMagnifyingGlass,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "./App.module.css";
import Header from "./components/UserInterface/Header/Header";
import SearchBar from "./components/UserInterface/SearchBar/SearchBar";
import UserDisplay from "./components/UserInterface/UserDisplay/UserDisplay";
import octocat from "./assets/images/octocat.jpg";

function App() {
  const UserData = {
    profile: {
      image: octocat,
      name: "The Octocat",
      handle: "@octocat",
      bio: "This profile has no bio",
      date: "Joined 25 Jan 2011",
    },
    account: {
      repo: "8",
      followers: "3938",
      following: "9",
    },
    contact: {
      location: "San Fransisco",
      twitter: "Not Available",
      website: "https://github.blog",
      job: "github",
    },
  };
  const [apiData, setApiData] = useState(UserData);

  const ContactIcons = [faLocationDot, faTwitter, faLink, faBuilding];

  const fetchUser = async (username) => {
    try {
      const resUser = await fetch(`https://api.github.com/users/${username}`);
      if (!resUser.ok) throw new Error("Problem getting user data");
      console.log(resUser);
      const data = await resUser.json();

      const {
        avatar_url,
        name,
        login,
        created_at,
        bio,
        public_repos,
        followers,
        following,
        location,
        twitter_username,
        blog,
        company,
      } = data;

      setApiData({
        profile: {
          image: `${avatar_url}`,
          name: `${name || "Not Available"}`,
          handle: `${login || "Not Available"}`,
          bio: `${bio || "This profile has no bio"}`,
          date: `Joined ${
            new Date(created_at).toLocaleString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }) || "Not Available"
          }`,
        },
        account: {
          repo: `${public_repos || "-"}`,
          followers: `${followers || "-"}`,
          following: `${following || "-"}`,
        },
        contact: {
          location: `${location || "Not Available"}`,
          twitter: `${twitter_username || "Not Available"}`,
          website: `${blog || "Not Available"}`,
          job: `${company || "Not Available"}`,
        },
      });
    } catch (err) {
      setApiData({});
      console.error(`An error occurred: ${err}`);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.displayCard}>
        <Header />
        <SearchBar icon={faMagnifyingGlass} fetchUser={fetchUser} />
        <UserDisplay icons={ContactIcons} userData={apiData} />
      </div>
    </div>
  );
}

export default App;
