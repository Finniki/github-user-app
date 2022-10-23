import { useRef } from "react";
import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = (props) => {
  const ref = useRef("");
  // console.log(value);
  const ClickHandler = () => {
    const value = ref.current.value;
    console.log(value);
    props.searchHandler(value);
    ref.current.value = "";
  };

  return (
    <div>
      <label htmlFor="search" className={styles.label}>
        <FontAwesomeIcon icon={props.icon} className={styles.icon} />
        <input
          ref={ref}
          id="search"
          type="text"
          placeholder="Search GitHub username_"
          className={styles.input}
        />
        <button type="submit" className={styles.btn} onClick={ClickHandler}>
          Search
        </button>
      </label>
    </div>
  );
};

export default SearchBar;
