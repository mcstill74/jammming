import React from 'react';
import Track from './Track';


function TrackList(props){
    return (
        <>
            {props.list.map(item => 
                <Track key={item.id} trackObj={item}  /> )}   

        </>
    )

}
export default TrackList;