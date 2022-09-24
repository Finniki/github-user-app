import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserDisplay from "./components/UserDisplay";

function App() {
  return (
    <div className="body">
      <div className="display-card">
        <Header />
        <SearchBar />
        <UserDisplay />
      </div>
    </div>
  );
}

export default App;
