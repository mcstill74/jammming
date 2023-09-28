import React, {useState} from 'react';
 
function SearchBar(props){
    const [searchText, setSearchText] = useState('');
    const [searchBy, setSearchBy] = useState('tracks');

    function handleSearchByChange(e){
        setSearchBy(e.target.value);
    }

    function handleSearchTextChange(e){
        setSearchText(e.target.value);
    }

    function handleSearchClick(){
        props.onSearch(searchText, searchBy);
      };
    
    return(
        <>
            <input id="searchText" type="text" 
                   name="searchText" minLength="3" 
                   placeholder="Enter song title or artist here" 
                   onChange={handleSearchTextChange} />

            <select id="searchBy" name="Search By"  onChange={handleSearchByChange}>
                <option value='tracks'>Tracks</option>
            </select>
            <button id="searchBtn" onClick={handleSearchClick} type="submit">Search</button>
        </>
    );
}

export default SearchBar;
