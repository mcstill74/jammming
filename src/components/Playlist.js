import React from 'react';
import Track from './Track';

function Playlist(props){
    const rows = [];
    for(let i = 0; i<props.data.length; i++){
        rows.push( <Track id={props.data[i].id} key={props.data.uri} data={props.data[i]} onTrackClick={props.onTrackClick}  />)
    }

    function handleNameChange(e){
        if(e.target.value !== ''){
            props.onChange(e.target.value)
            document.getElementById('submit').disabled = false;
        }
        else{
            document.getElementById('submit').disabled = true;
        }
    }

    function handleSubmit(e){
        if(props.nameList !== ''){
            props.submit();//call submit in app.js
        }
        else{
            alert('Playlist name is required.');
            document.getElementById('playlistName').focus();
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='playlistName'>Playlist name:</label>
            <input onChange={handleNameChange} type='text' id='playlistName' name='playlistName' value={props.nameList}></input>
            <ul style={{listStyle:"none"}}>
                {rows}
            </ul>
            <button disabled id='submit'>Save to Spotify</button>
        </form>

    );
}
export default Playlist;
