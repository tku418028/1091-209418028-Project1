import React from 'react';

const SearchBox28 = ({ searchChange }) => {
    return (
        <div>
            <input 
                type="search"
                placeholder='search demos'
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox28;