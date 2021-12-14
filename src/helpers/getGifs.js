export const getGifs  = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=j4VlZ50kgcgXuvzIjbe3tu6nmzx8Vw5U`;
    const resp = await fetch(url);
    const  {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title : img.title,
            url: img.images?.downsized_large.url
        }

    }) 
     return gifs;    
    
    //setImagenes(gifs);

}