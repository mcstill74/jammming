
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ad3f36107fmsh738f9dac8c7bd05p1991a5jsne787c43933ba',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
};

async function callSpotify(searchText, searchBy){
    //call api
    try{
        const url = 'https://spotify23.p.rapidapi.com/search/?q=' + searchText + '&type='+ searchBy + '&offset=0&limit=10&numberOfTopResults=5';
        console.log(url);
        console.log(options);
        options.q = searchText;
        options.type = searchBy;
        const response = await fetch(url, options);
        if(response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse);  
            if(jsonResponse !== null){
                switch(searchBy){
                    case 'tracks':
                        return jsonResponse.tracks;
                    case 'albums':
                        return jsonResponse.albums;
                    case 'artists':
                        return jsonResponse.artists;
                    default:
                        alert('The search by criteria was not read.');
                        break;
                }
               
            } 
            else{
                alert("No results for that search Request.");
            }
        }
        throw new Error('There is a problem sending the request.');
    }
    catch(error){
        console.error(error);
    }
                        
}

async function callUpdateSpotify(name, playlist){
    try{
        console.log('callUpdateSpotify was called with parameters passed ' + name + playlist);
    }
    catch(error){
        console.error(error);
    }

}

export {callSpotify, callUpdateSpotify};

