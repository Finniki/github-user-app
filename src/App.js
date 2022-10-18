import { useState } from "react";
import {
  faLink,
  faLocationDot,
  faMagnifyingGlass,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import Header from "./components/userInterface/Header/Header";
import SearchBar from "./components/userInterface/SearchBar/SearchBar";
import UserDisplay from "./components/userInterface/UserDisplay/UserDisplay";
//import octocat from "./assets/images/octocat.jpg";

function App() {
  /*const UserData = {
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
  };*/

  const ContactIcons = [faLocationDot, faTwitter, faLink, faBuilding];

  const [apiData, setApiData] = useState([]);

  const findUser = async (username) => {
    //console.log(`passed`);
    try {
      const resUser = await fetch(`https://api.github.com/users/${username}`);
      if (!resUser.ok) throw new Error("Problem getting user data");
      const dataUser = await resUser.json();
      //console.log(" dat ", dataUser);
      const {
        avatar_url,
        bio,
        blog,
        company,
        created_at,
        followers,
        following,
        name,
        login,
        public_repos,
        location,
        twitter_username,
      } = dataUser;
      // const dated = new Date(created_at).toLocaleString("en-US", {
      //   day: "2-digit",
      //   month: "short",
      //   year: "numeric",
      // });
      // const dated = {
      //   day: datee.toLocaleString("en-US", { day: "2-digit" }),
      //   month: datee.toLocaleString("en-US", { month: "short" }),
      //   year: datee.getFullYear(),
      // };
      // console.log("comp", blog);
      setApiData({
        profile: {
          image: `${avatar_url}`,
          name: `${name}`,
          handle: `${login}`,
          bio: `${bio}`,
          date: `Joined ${new Date(created_at).toLocaleString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}`,
        },
        account: {
          repo: `${public_repos}`,
          followers: `${followers}`,
          following: `${following}`,
        },
        contact: {
          location: `${location}`,
          twitter: `${twitter_username}`,
          website: `${blog}`,
          job: `${company}`,
        },
      });
    } catch (err) {
      console.log(err.message, "Something went wrong");
    }
  };
  console.log("old:", apiData);

  return (
    <div className="body">
      <div className="display-card">
        <Header />
        <SearchBar icon={faMagnifyingGlass} onClick={findUser} />
        <UserDisplay icons={ContactIcons} userData={apiData} />
      </div>
    </div>
  );
}

export default App;
