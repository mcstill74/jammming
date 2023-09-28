import React, {useState, useCallback} from 'react';
import './App.css';
import SearchBar from './components/SearchBar.jsx';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import {searchForTracks, createPlayList} from './utils/apiProcessing';
import UserLogin from './components/UserLogin';


function App(){
  const [loggedIn, setLoggedIn] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [playListTracks, setPlayListTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  


  function handleLogin(loggedIn){
      setLoggedIn(loggedIn);
  };

  const search = useCallback((searchText, searchBy )=>{
    searchForTracks(searchText, searchBy)
    .then( (response) => {setSearchResults(response)})
    .catch(failureOnSearch);
  }, []);


  function failureOnSearch(error){
    alert('No Tracks found for that criteria. ' + error);
  }

  //Set Tracklist when selecting add button in search results list
  function onAddTrackClick(id){
    console.log('Event track id: ' + id);
      let trackIndex = searchResults.findIndex((result) => result.id === id);
      if(trackIndex !== undefined ){
        setPlayListTracks( [...playListTracks, searchResults[trackIndex]]);
        setSearchResults(searchResults.filter( (track) => track.id !== id) );
      }
      else{
        alert(`Track isn't found.`);
      }
  }
    //Remove track from track list  and remove from track list back to search results list
    function onRemoveTrackClick(id){
      if(id !== undefined ){
        setPlayListTracks(playListTracks.filter( (track) => track.id !== id) );  
      }
      else{
        alert(`Track isn't found.`);
      }

  }

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  function saveToSpotify(){
    createPlayList(playListTracks, playlistName)
    .then(onPlaylistSuccess)
    .catch(failureOnSave);
  }

  function onPlaylistSuccess(){
    alert('Saved playlist. ' + playlistName);
  }

  function failureOnSave(error){
    alert('Unable to save playlist. ' + error);
  }


  return (
      <>
        <header>
          <h1>Jammming</h1>
        </header>
        <div>
          {!loggedIn && <div id="loginDiv">
            <UserLogin onLogIn={handleLogin} />
          </div> }
          {loggedIn && <div id="search">
            <section>
                <h2>Search for Tracks</h2>
                <SearchBar onSearch={search} /> 
            </section>
            <section id='lists'>
                <SearchResults tracks={searchResults} onAdd={onAddTrackClick} /> 
                <Playlist tracks={playListTracks} name={playlistName} 
                        onNameUpdate={updatePlaylistName} onRemoveTrack={onRemoveTrackClick}
                        onSave={saveToSpotify} />

            </section>
            </div>}
        </div>
      </>
  );
}
export default App;
