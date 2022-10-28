import { useRef } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ fetchUser }) => {
  const ref = useRef("");
  const handleOnClick = () => {
    const value = ref.current.value;
    fetchUser(value);
    ref.current.value = "";
  };

  return (
    <div>
      <label htmlFor="search" className={styles.label}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
        <input
          ref={ref}
          id="search"
          type="text"
          placeholder="Search GitHub username_"
          className={styles.input}
        />
        <button type="submit" className={styles.btn} onClick={handleOnClick}>
          Search
        </button>
      </label>
    </div>
  );
};

export default SearchBar;
