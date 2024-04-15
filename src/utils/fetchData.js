export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ff96d73bd1msh61b58290e887b4dp10e5ecjsn461a025d8b50',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
 export const youtubeOptions = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
    headers: {
        'X-RapidAPI-Key': 'ff96d73bd1msh61b58290e887b4dp10e5ecjsn461a025d8b50',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};



export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};