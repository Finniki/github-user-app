// import logo from "./logo.svg";
// import { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserDisplay from "./components/UserDisplay";

function App() {
  const ContactIcons = [faLocationDot, faTwitter, faLink];

  return (
    <div className="body">
      <div className="display-card">
        <Header />
        <SearchBar icon={faMagnifyingGlass} />
        <UserDisplay icons={ContactIcons} />
      </div>
    </div>
  );
}

export default App;
