import React from 'react';
import TrackList from './Tracklist';

function Playlist(props){
    
    function handleNameChange(e){
        props.onNameUpdate(e.target.value);
    }


    return (
        <>
        <h2><input value={props.name} className='playlistName' onChange={handleNameChange} placeholder="New Playlist" /></h2>
        <div className="PlayList" >  
            <TrackList load="playlist" tracks={props.tracks} onRemove={props.onRemoveTrack} />
        </div>
        <button id="saveToSpotify" disabled={props.name.length === 0} onClick={props.onSave}>Save</button>
        </>
    )
};
export default Playlist;
