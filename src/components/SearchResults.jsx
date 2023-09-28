import React from 'react';
import TrackList from './Tracklist';
function SearchResults(props){ 

    function handleAddClick(value){
        props.onAdd(value);
    }
    return (
        <>
        <h2>Search Results</h2>
        <div className="Results">
            <TrackList tracks={props.tracks} onAdd={handleAddClick} load='results' />
        </div>
        </>
    );
}
export default SearchResults;