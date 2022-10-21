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

  const ContactIcons = [faLocationDot, faTwitter, faLink, faBuilding];

  return (
    <div className={styles.body}>
      <div className={styles.displayCard}>
        <Header />
        <SearchBar icon={faMagnifyingGlass} />
        <UserDisplay icons={ContactIcons} userData={UserData} />
      </div>
    </div>
  );
}

export default App;
