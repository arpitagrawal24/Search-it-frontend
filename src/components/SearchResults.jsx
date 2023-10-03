/* eslint-disable react/prop-types */

function SearchResults({ searchResults, handleReadMore }) {
    return (
        <div className="result">
            {searchResults.map((result, idx) => (
                <div key={idx} className="list">
                    <a href={result.link} target="_blank" rel="noopener noreferrer">
                        <h3 dangerouslySetInnerHTML={{ __html: result.htmlTitle }}></h3>
                    </a>
                    <p dangerouslySetInnerHTML={{ __html: result.htmlSnippet }}></p>
                    <a href='#' rel="noopener noreferrer" onClick={() => handleReadMore(result.link)}>
                        Read More
                    </a>
                </div>
            ))}
        </div>
    );
}

export default SearchResults;
