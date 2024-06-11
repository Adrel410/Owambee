import React from 'react';

function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Which area are you sending it to?" />
            <button>Use current location</button>
        </div>
    );
}

export default SearchBar;
