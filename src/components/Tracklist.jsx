import React from 'react';
import Track from './Track';

function TrackList(props){
    return (
        <>
            {props.tracks.map( (track) => {
                return( <Track id={track.id} 
                        load={props.load}
                        key={track.uri} 
                        data={track} 
                        onAdd={props.onAdd}
                        onRemove={props.onRemove} />
                    )}
            )}
        </>
    );
};
export default TrackList;