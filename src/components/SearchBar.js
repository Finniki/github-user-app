import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = (props) => {
  return (
    <div>
      <label for="search" className="label">
        <FontAwesomeIcon icon={props.icon} className="icon" />
        {/* <i className={props.icon}></i> */}
        <input
          id="search"
          type="text"
          placeholder="Search GitHub username_"
          className="input"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </label>
    </div>
  );
};

export default SearchBar;
