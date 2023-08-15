import React from 'react';
import Track from './Track';

function SearchResults(props){   

        return (
            <>
                <ul style={{listStyle:"none"}}>
                    {props.data.map(item => 
                        <Track key={item.uri} data={item} /> )}   
                </ul>
            </>

        );


}
export default SearchResults;