import fetch from 'isomorphic-fetch';

const FLICKR_API_PATH = 'https://api.flickr.com/services/rest';
const FLICKR_API_KEY = '91e62fcb781c700043e6c76a6ca6a8e9';
const FLICKR_DEFAULT_PARAMS = `api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=10`;
const USER_ID = '151884322@N02';
const PHOTOSETS = 'flickr.photosets.getPhotos';
const PHOTO_SIZES = 'flickr.photos.getSizes';


export const fetchAlbum = (albumId) => {
  return fetch(`${FLICKR_API_PATH}/?${FLICKR_DEFAULT_PARAMS}&method=${PHOTOSETS}&photoset_id=${albumId}&user_id=${USER_ID}`)
    .then((resp) => resp.json())
    .then(data => data.photoset.photo)
    .then((photos) => {
      return photos.map((photo) => {
        return {
          photoSrc: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`,
          id: photo.id
        }
      });
    });
}

