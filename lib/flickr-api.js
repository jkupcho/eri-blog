import fetch from 'isomorphic-fetch';

const FLICKR_API_KEY = '91e62fcb781c700043e6c76a6ca6a8e9';
const USER_ID = '151884322@N02'

export const fetchAlbum = (albumId) => {
  return fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&photoset_id=${albumId}&user_id=${USER_ID}&format=json&nojsoncallback=1&api_key=${FLICKR_API_KEY}`)
    .then((resp) => resp.json())
    .then(json => json.photoset.photo.map((photo) => {
      return {
        key: photo.id,
        src: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
      }
    }));
}