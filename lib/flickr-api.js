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
    .then(json => Promise.all(json.photoset.photo.map((photo) => {
      return fetch(`${FLICKR_API_PATH}/?${FLICKR_DEFAULT_PARAMS}&method=${PHOTO_SIZES}&photo_id=${photo.id}`)
        .then((sizeResp) => sizeResp.json())
        .then((photoSizeJson) => {
          const sizes = photoSizeJson.sizes.size;

          if (sizes.filter(size => size.label === 'Large').length > 0) {
            return {
              id: photo.id, 
              thumbnailSrc: sizes.filter(size => size.label === 'Thumbnail')[0].source,
              photoSrc: sizes.filter(size => size.label === 'Large')[0].source
            };
          }
        })
      })))
      .then(photos => photos.filter((photo) => photo !== undefined));
}

