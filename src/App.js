import {useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import TrackList from './components/Tracklist';
import Playlist from './components/Playlist';
import {callSpotify, callUpdateSpotify} from './module/apiProcessing';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [track, setTrack] = useState({});
  const [trackList, setTrackList] = useState([]);
  const [playList, setPlaylist] = useState([]);
  const [playListName, setPlayListName] = useState('');



  function handleSearchSubmit(searchText, searchBy){
    if(searchText.length > 0 && searchBy.length > 0){
        //pass to api to search code
        console.log('Searching for: ' + searchText);
        console.log('Searching by: ' + searchBy);
        Promise.all([callSpotify(searchText, searchBy)])
        .then(onSuccessSearch)
        .then(setSearchResults)
        .catch(failureOnSearch);
  
      }
    }

  function onSuccessSearch(result){
    console.log('Result: '  + JSON.stringify(result));
    let tracks = [];
    for(let i =0; i< result[0].items.length; i++){
    const trackObj = {
        id: result[0].items[i].data.id,
        uri:result[0].items[i].data.uri,
        songName: result[0].items[i].data.name,
        artist: result[0].items[i].data.artists.items[0].profile.name,
        album:result[0].items[i].data.albumOfTrack.name
    }
    tracks.push(trackObj);
    }
    return tracks;
  }

  function failureOnSearch(error){
    alert('No Tracks found for that criteria.');
  }
  
  function handleAddClick(){
    console.log('Adding track to list' + track.id);
    const iterator = searchResults.values();
    for( const value of iterator){
      if(value === track){
        console.log('a match!');
        setTrackList( (trackList) => [...trackList, track]);
        setSearchResults(searchResults.filter( (item) => item !== value));
        if(document.getElementById("save").checked === true)
        {
          setPlaylist( (playList) => [...playList, track]);
        }
        break;
      }
      else{
        console.log('no match!');
      }
    }
      
  }

  function handleRemoveClick(){
    console.log('Remove button clicked');
    setTrackList( (trackList) => trackList.filter( (item) => item !== track));
    setSearchResults( (searchResults) => [...searchResults, track]);
  }
  
  function onTrackClick(obj){
    console.log('Track id: ' + obj.id);
    setTrack(obj);
  }

  function handleAddToPlaylist(e){
    console.log('add to playlist checked!');
    if(e.target.checked === true ){
      document.getElementById("playlist").hidden = false;
      setPlaylist(trackList);
    }
    else{
      document.getElementById("playlist").hidden = true;
      setPlaylist([]);
    }
  }
  function handlePlaylistNameChange(nameOfPlaylist){
    setPlayListName(nameOfPlaylist);
  }

  function handleSaveToSpotify(){
    Promise.all([callUpdateSpotify(playListName, playList)])
    .then(onSuccessUpdate)
    .catch(failureOnUpdate);
  }

  function onSuccessUpdate(){
    alert(`Your ${playListName} playlist has been saved.`);
  }

  function failureOnUpdate(){
    alert(`An issue is identified saving the playlist ${playListName}.`);
  }

  return (
    <div>
      <header>
        <h1>Jammming</h1>
      </header>

      <div id="search">
        <h1>Search for your song</h1>
        <SearchBar search={handleSearchSubmit} />
      </div>
      <br></br>
      <br></br>
      <div id="action">
        <div id="results">
          <SearchResults data={searchResults} onTrackClick={onTrackClick} />
        </div>

        <div id="buttons">
          <button id="add" onClick={handleAddClick}>Add</button>
          <br></br>
          <button id="remove" onClick={handleRemoveClick}>Remove</button>
        </div>


        <div id="tracks">
          <div>
              <input type="checkbox" name="save" id="save" onClick={handleAddToPlaylist} disabled={trackList.length === 0} />    
              <label htmlFor="save">Add To Playlist</label>
          </div>
          <div>
            <TrackList data={trackList} onTrackClick={onTrackClick} />
          </div>
            <br></br>
        </div>
        
        <div id="playlist" hidden>
          <Playlist data={playList} onChange={handlePlaylistNameChange} nameList={playListName} submit={handleSaveToSpotify}  />
        </div>
      </div>

   </div>

  );
}

export default App;
