import React from 'react';

function Track(props){
    function handleTrackClick(e){
        //call main track click in App.js
        props.onTrackClick(props.data);
    }


        return(
        <li id={props.data.id} key={props.data.id} onClick={handleTrackClick}>
            <h3>{props.data.songName}</h3> 
            <p>Album: {props.data.album}</p>
            <p>Artist: {props.data.artist}</p>
        </li>
        );
}

export default Track;