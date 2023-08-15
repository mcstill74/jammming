const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ad3f36107fmsh738f9dac8c7bd05p1991a5jsne787c43933ba',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
};

export async function callSpotify(searchText, searchBy){
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
                        return jsonResponse.tracks.items;
                    case 'albums':
                        return jsonResponse.albums.items;
                    case 'artists':
                        return jsonResponse.artists.items;
                    default:
                        alert('The search by criteria was not read.');
                        break;
                }
               
            } 
            else{
                alert("No results for that search Request.");
            }
        }
        throw new Error('request failed');
    }
    catch(error){
        console.error(error);
    }
                        
}


