import React from 'react';

function Track(props){

        function handleOnClick(e){
            alert('Clicked Me!');
        }
        
        return(
        <>
            <li id={props.data.uri} onClick={handleOnClick}>
                <h3>{props.data.name}</h3> 
                <h4>Artist:</h4>
                {props.data.artists.forEach( (item) => <li>item.profile.name</li> ) }
                <h4>Album:</h4>
                {props.data.albumOfTrack.forEach( (item) => <li>item.name</li> ) }
            </li>
            
        </>
        );
}

export default Track;