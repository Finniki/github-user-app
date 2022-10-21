import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = (props) => {
  return (
    <div>
      <label htmlFor="search" className={styles.label}>
        <FontAwesomeIcon icon={props.icon} className={styles.icon} />
        <input
          id="search"
          type="text"
          placeholder="Search GitHub username_"
          className={styles.input}
        />
        <button type="submit" className={styles.btn}>
          Search
        </button>
      </label>
    </div>
  );
};

export default SearchBar;
