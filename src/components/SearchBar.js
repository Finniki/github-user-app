const SearchBar = () => {
  return (
    <div>
      <label for="search"></label>
      <input id="search" type="text" placeholder="Search GitHub username_" />
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchBar;
