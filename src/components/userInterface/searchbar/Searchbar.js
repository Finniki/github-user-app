import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

const SearchBar = (props) => {
  // let value;
  const inputRef = useRef();
  console.log("Ref:", inputRef);

  const clickHandler = async () => {
    // const input = document.querySelector(".input");
    //retrieve an store user input
    const value = inputRef.current.value;
    console.log("ref: ", value);
    props.onClick(value);
    // input.innerHTML = "";
  };

  return (
    <div>
      <label htmlFor="search" className="label">
        <FontAwesomeIcon icon={props.icon} className="icon" />
        <input
          ref={inputRef}
          id="search"
          type="text"
          placeholder="Search GitHub username_"
          className="input"
        />
        <button onClick={clickHandler} type="submit" className="btn">
          Search
        </button>
      </label>
    </div>
  );
};

export default SearchBar;
