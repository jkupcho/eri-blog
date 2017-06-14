import 'whatwg-fetch';
import { parseXml } from './photo-parser';

const FLICKR_API_KEY = '07762f5617ad00f5da6fc8656e9d2e9a';

export const fetchAlbum = (albumId) => {
  console.log(albumId);
  return fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&photoset_id=${albumId}&format=json&nojsoncallback=1&api_key=${FLICKR_API_KEY}`)
    .then((resp) => resp.json())
    .then(parseXml);
}