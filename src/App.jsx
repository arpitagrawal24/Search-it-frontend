import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Summary from './components/Summary';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [summaryData, setSummaryData] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://seach-it.onrender.com/api/search?q=${searchTerm}`);
      setSearchResults(response.data);
      // console.log('Search results:', response.data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const handleReadMore = async (url) => {
    try {
      const response = await axios.get(`https://seach-it.onrender.com/api/summary?url=${url}`);
      const resData = response.data;
      // console.log('Summary Data:', resData);

      setSummaryData(resData);
      setIsVisible(true);
    } catch (error) {
      console.error('Error fetching summary data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Search it!!</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />

      <div className="results-container">

        <SearchResults
          searchResults={searchResults}
          handleReadMore={handleReadMore}
        />

        <Summary
          isVisible={isVisible}
          summaryData={summaryData}
        />

      </div>
    </div>
  );
}

export default App;
