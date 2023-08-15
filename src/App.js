import {useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import TrackList from './components/Tracklist';
import {callSpotify} from './module/apiProcessing';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [trackList, setTrackList] = useState([]);
   /* [
    {
        uri: 'lkjda3654',
        externalId: 1,
        name: "Give It Away",
        artists: [
          {
            uri: 'kaldj',
            profile: [{
              name: "George Strait"
            }]
          }
        ],
        albumOfTrack: [
          {
            uri: 0,
            name: "50 #1 Greatest Hits",
            coverArt:{
              sources: [
                {
                  url:"https://fakeurl.com",
                  width:300,
                  height:300
                },
                {
                  url:"https://fakeurl2.com",
                  width:300,
                  height:300
                },
                {
                  url:"https://fakeurl3.com",
                  width:300,
                  height:300
                }
              ]
            }
          },
          {
            uri: 0,
            name: "Best Of (Deluxe Edition) testing ",
            coverArt:{
              sources: [
                {
                  url:"https://fakeurl.com",
                  width:300,
                  height:300
                },
                {
                  url:"https://fakeurl2.com",
                  width:300,
                  height:300
                },
                {
                  url:"https://fakeurl3.com",
                  width:300,
                  height:300
                }
              ]
            }
          }

        ]
          
    },
    {
        uri: 'lkjda3642',
        externalId: 2,
        name: "All My Exs Live in Texas",
        artists: [
          {
            uri: 'kaldj',
            profile: [{
              name: "George Strait"
            }]
          }
        ],
        albumOfTrack:[
          { name: "50 #1 Greatest Hits"},
          { name: "Strait From The Heart"}
        ]
    },
    {
        uri: 'lkjda3634',
        externalId: 3,
        name: "I Cross My Heart",
        artists: [
          {
            uri: 'kaldj',
            profile: [{
              name: "George Strait"
            }]
          }
        ],
        albumOfTrack:[
          { name: "50 #1 Greatest Hits"},
          { name: "Strait From The Heart"}
        ]
    }

] 
);*/
  
  function handleSearchSubmit(searchText, searchBy){
    if(searchText.length > 0 && searchBy.length > 0){
        //pass to api to search code
        console.log('Searching for: ' + searchText);
        console.log('Searching by: ' + searchBy);
        const results = callSpotify(searchText, searchBy);
        setTimeout( () => {
          if(results.length > 0)
            setSearchResults(results);
          else
            errorOnSearch();
        }, 10000);
        
      }
    }

  function errorOnSearch(){
    alert('No Tracks found for that criteria.');
  }
  
  function handleAddClick(e){
    console.log('Add button clicked');
    setTrackList( (trackList) => [e.target.value, ...trackList]);
  }


  function handleRemoveClick(e){
    console.log('Remove button clicked');
    setTrackList( (trackList) => trackList.filter( (track) => track.key !== e.target.value.key));
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
          <SearchResults data={searchResults} />
        </div>

        <div id="buttons">
          <button id="add" onClick={handleAddClick}>Add</button>
          <br></br>
          <button id="remove" onClick={handleRemoveClick}>Remove</button>
        </div>

        <div id="tracks">
          <TrackList list={trackList} />
        </div>

      </div>

   </div>

  );
}

export default App;
