const parser = new DOMParser();

export const parseXml = (json) => {
  const photos = json.photoset.photo
    .map((photo) => {
      return {
        key: photo.id,
        src: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
      }
    });
  return photos;
}