const API_KEY = process.env.REACT_APP_SPOTIFY_API_KEY;

/*
callSpotify: Async Function
* parameters: searchText - text to search for tracks
              searchBy - from combo to get results by
*    returns: array of new object (for cleaner access in Track.js)
*/

async function searchForTracks(searchText, searchBy){
    try{
        //const search = searchText.replace(' ', '%20');
        const url = `https://spotify23.p.rapidapi.com/search/?q=${searchText}&type=${searchBy}&offset=0&limit=10&numberOfTopResults=5`;

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY, 
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
                'Cache-Control':'no-cache'
            }
        };
        console.log(url);
        const response = await fetch(url, options);
        if(!response.ok){
            throw new Error('There is a problem sending the request.' + response.status);
        }
        else{
            const jsonResponse = await response.json();
            if(jsonResponse !== undefined){
                console.log(jsonResponse);
                return jsonResponse.tracks.items.map(track => ({
                    id: track.data.id,
                    uri:track.data.uri,
                    songName: track.data.name,
                    artist: track.data.artists.items.map((artist) => artist.profile.name),
                    album:track.data.albumOfTrack.name
                  }));

                }
        }
    }
    catch(error){
        console.error(error);
    }
                        
}

async function createPlayList(tracks, playlistname){
    console.log('Playlist param: ' + playlistname +  JSON.stringify(tracks));
    return {
        playlistName:tracks
    };
    /*const url = 'https://spotifystefan-skliarovv1.p.rapidapi.com/createPlaylist';
    const searchParms = '?accessToken= 
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'Spotifystefan-skliarovV1.p.rapidapi.com'
        },
        body: new URLSearchParams({
            accessToken: '<REQUIRED>',
            name: '<REQUIRED>',
            userId: '<REQUIRED>',
            description: playlist
        })
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
        
    } catch (error) {
        console.error(error);
    }*/
}

/*
updatePlaylist: Async Function
* parameters: name - text to name the playlist
              playlist - an array of tracks user selected
* 
*/

//to be called withlogin???
async function getMyPlaylists(){
    alert('getPlaylists called')
    /*
    const url = 'https://spotifystefan-skliarovv1.p.rapidapi.com/getMyPlaylists';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'Spotifystefan-skliarovV1.p.rapidapi.com'
        },
        body: new URLSearchParams({
            accessToken: '<REQUIRED>'
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }*/
}

async function updatePlaylist(playListObj){
    console.log('Playlist param: ' +  JSON.stringify(playListObj));
    alert('Playlist created: ' + playListObj.playlistname);
    return playListObj;

    /*try{
        console.log('callUpdateSpotify was called with parameters passed ' + playlist);
        const url = 'https://spotifystefan-skliarovv1.p.rapidapi.com/addTracksToPlaylist';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'Spotifystefan-skliarovV1.p.rapidapi.com'
            },
	body: new URLSearchParams({
		userId: '<REQUIRED>',
		accessToken: '<REQUIRED>',
		playlistId: playlist.id
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
    }
    catch(error){
        console.error(error);
    }*/

}

export {searchForTracks, createPlayList, getMyPlaylists, updatePlaylist};

