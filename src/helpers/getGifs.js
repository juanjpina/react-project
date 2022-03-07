export const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?limit=5&q=${encodeURI(category)}&api_key=3pMVwkxLo99VKeoZXHF77J73KMnOkbFr`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url


        }
    })
    return gifs;
}
