import React, { useState } from 'react';


const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Simulated search results (you would replace this with actual search logic)
    const simulatedResults = [
      "Result 1",
      "Result 2",
      "Result 3",
      "Result 4"
    ];
    setResults(simulatedResults.filter(result => result.includes(term)));
  }

  return (
    <header className="header">
      <h1>Welcome to My App</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={handleInputChange} 
        />
        <button style={{
          backgroundColor:'white',
          color:'black'
        }}>Search</button>
      </div>
      {results.length > 0 && (
        <div className="search-results">
          <h2>Search Results:</h2>
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
