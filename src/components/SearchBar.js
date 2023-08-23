import React, {useState} from 'react';
 
function SearchBar(props){
    const [searchText, setSearchText] = useState('');
    const [searchBy, setSearchBy] = useState('tracks');
    
    function handleTextChange(e){
        setSearchText(e.target.value)
        let value = searchText.replace(' ', '+');
        console.log('setting search text value: ' + value);
    }

    function handleSearchBySelection(e){
        setSearchBy(e.target.value)
        console.log('changing selection:' + e.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        if(searchText.length > 0 && searchBy.length > 0 ){
          props.search(searchText, searchBy);
          setSearchText('');
        }
      };
    
    return(
        <form onSubmit={handleSubmit}><span>
            <select id="searchBy" name="Search By" value={searchBy} onChange={handleSearchBySelection}>
                <option value='tracks'>Tracks</option>
            </select>
            <label name="searchText" htmlFor="searchText">Search</label>
            <input id="searchText" type="text" name="searchText" minLength="3" value={searchText} onChange={handleTextChange} />
            <button type="submit">Search</button></span>
        </form>
    );

}

export default SearchBar;
