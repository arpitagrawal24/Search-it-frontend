/* eslint-disable react/prop-types */

function SearchBar({
  searchTerm,
  setSearchTerm,
  handleSearch
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your research topic"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
