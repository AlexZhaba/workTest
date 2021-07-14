import React, { useEffect } from 'react';
import { SearchContainer } from './style.js';

const Search = ({ searchString, handleSearch }) => {

  useEffect(() => {
    const handle = (event) => {
      if (event.keyCode === 13) {
        handleSearch();
      }
    }
    document.addEventListener('keydown', handle);

    return () => {
      document.removeEventListener('keydown', handle);
    }
  }, [handleSearch])

  return (
    <SearchContainer placeholder="Name of the game" {...searchString} id='headerSearch'>
      
    </SearchContainer>
  )
}

export default Search;

