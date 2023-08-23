import React from 'react';
import Track from './Track';

function TrackList(props){
    const rows = [];
    for(let i = 0; i<props.data.length; i++){
        rows.push( <Track id={props.data[i].id} key={props.data.uri} data={props.data[i]} onTrackClick={props.onTrackClick}  />)
    }

    return (
        <>
            <ul style={{listStyle:"none"}}>
                {rows}
            </ul>
        </>

    );
}
export default TrackList;