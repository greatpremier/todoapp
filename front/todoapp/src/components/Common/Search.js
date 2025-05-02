import React, {useEffect, useState} from "react";
import '../../styles/components/Header.css'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulating API call
    fetch('https://jsonplaceholder.typicode.com/users') // Example API
      .then(response => response.json())
      .then(users => setData(users.map(user => user.name))); // Storing names in data
  }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item => 
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return(
    <>
    <input
        type="text"
        className="form-control me-3 search-pan"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />

      {searchTerm && <ul className="list-group">
        <li className="list-group-item"><h3>Authors</h3></li>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))
        ) : (
          <li className="list-group-item">No results found</li>
        )}
        <li className="list-group-item"><h3>Blogs</h3></li>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))
        ) : (
          <li className="list-group-item">No results found</li>
        )}
        <li className="list-group-item"><h3>Topics</h3></li>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))
        ) : (
          <li className="list-group-item">No results found</li>
        )}
      </ul>
      }
    </>
    )
}

export default Search