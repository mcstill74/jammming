import React from 'react';

function Track(props) {

    function handleAddClick(e) {
        props.onAdd(e.target.value);
    }

    function handleRemoveClick(e) {
        props.onRemove(e.target.value);
    }

    const renderAction = () => {
        if(props.load === "results"){
            return ( 
                <button id="add" value={props.data.id} onClick={handleAddClick}>+</button> 
             );       
        }
        else{
            return (
                <>
                <h3 id='playname'>{props.playname}</h3>
                <button id="remove" value={props.data.id} onClick={handleRemoveClick}>-</button>
                </>
            );
        }
    }

    return (
        <div>
            {renderAction()}
            <div>
                <h3 id="songName">{props.data.songName}</h3>
                <p id='albumartistName'>
                    Album:{props.data.album} | Track By: {props.data.artist}
                </p>
            </div>
        </div>
    );
}
export default Track;