import 'whatwg-fetch';

const FLICKR_API_KEY = '91e62fcb781c700043e6c76a6ca6a8e9';

export const fetchAlbum = (albumId) => {
  return fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&photoset_id=${albumId}&format=json&nojsoncallback=1&api_key=${FLICKR_API_KEY}`)
    .then((resp) => resp.json())
    .then(json => json.photoset.photo.map((photo) => {
      return {
        key: photo.id,
        src: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
      }
    }));
}