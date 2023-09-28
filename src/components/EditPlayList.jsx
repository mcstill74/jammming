import React, {useState} from 'react';
import Track from './Track';

function EditPlayList(props){
    const [playListName, setPlayListName] = useState(props.data.playlistname);
    const [tracks, setTracks] = useState(props.data.tracks);
    console.log('In EditPlayList - data from app' + JSON.stringify(props.data));

    function handleNameChange(e){
        setPlayListName(e.target.value);
    }

    function handleRemoveTrack(obj){
        console.log('Track being removed: ' + obj.songName);
        alert('Track being removed: ' + obj.songName);
        setTracks(tracks.filter( (item) => item !== obj));
    }

    function handleSaveChanges(){
        alert('Clicked Save Changes.')
        props.saveChanges(playListName, tracks);
    }
    if(props.data.length > 0){
        return (
            <>
                <input id="editPlayListName" value={playListName} onChange={handleNameChange}></input>
                <ul id="editList" value={tracks}>
                    {props.data.tracks.map((track) => 
                            <Track id={track.id}
                                load="editPlaylist"
                                key={track.uri}
                                data={track}
                                onRemove={handleRemoveTrack} />
                    )}
                </ul>
                
                <button id="saveEditedPlaylist" onClick={handleSaveChanges}>Save Changes</button>       
            </>
        )
    }
}
export default EditPlayList;