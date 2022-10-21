import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

const SearchBar = (props) => {
  const inputRef = useRef();
  console.log("Ref:", inputRef);

  const clickHandler = async () => {
    //retrieve an store user input
    const value = inputRef.current.value;
    console.log("ref: ", value);
    
    //call the function from app.js and pass the value in
    props.onClick(value);
    inputRef.current.value = " ";
    
  };

  return (
    <div>
      <label htmlFor="search" className={styles.label}>
        <FontAwesomeIcon icon={props.icon} className={styles.icon} />
        <input
          ref={inputRef}
          id="search"
          type="text"
          placeholder="Search GitHub username_"
          className={styles.input}
        />
        <button onClick={clickHandler} type="submit" className={styles.btn}>
          Search
        </button>
      </label>
    </div>
  );
};

export default SearchBar;
