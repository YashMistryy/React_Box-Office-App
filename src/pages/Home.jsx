import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = ev => {
    setSearchValue(() => ev.target.value);

  };

  const onSearch = async (event) => {
    event.preventDefault();
    // here on submitting form we will find the search result and fetch it using fetch API which works asynchronously so lets see
    const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q= ${searchValue}`)
    const body = await response.json()
    console.log(body)
    
  };

  return (
    <div>
      <h5>home page</h5>
      <form onSubmit={onSearch}>
        <input type="text" value={searchValue} onChange={handleSearchChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default Home;
