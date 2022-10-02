import {
  faLink,
  faLocationDot,
  faMagnifyingGlass,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import Header from "./components/userInterface/header/Header";
import SearchBar from "./components/userInterface/searchBar/SearchBar";
import UserDisplay from "./components/userInterface/userDisplay/UserDisplay";
import octocat from "./assets/images/octocat.jpg";

function App() {
  const UserData = {
    profile: {
      image: { octocat },
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
    <div className="body">
      <div className="display-card">
        <Header />
        <SearchBar icon={faMagnifyingGlass} />
        <UserDisplay icons={ContactIcons} userData={UserData} />
      </div>
    </div>
  );
}

export default App;
