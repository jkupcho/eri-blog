import React from 'react';

import Gallery from '../../components/Gallery';

export default () => {
  return (
    <div className="container">
      <h1 className="title" style={{ margin: '25px 0' }}>Work - Great Rooms</h1>
      <div className="columns">
        <div className="column is-one-third" style={{ margin: '25px 0' }}>
          <Gallery albumId={'72157682321625302'} />
        </div>
        <div className="column">
          <div className="content is-medium"  style={{ margin: '25px 0' }}>
            <p>
              Kitchens are often a focal point of a home, and people are always using them to
              entertain. Great Rooms are an excellent way to combine your kitchen with where you
              entertain. Usually a wall needs to be removed in order to create a Great Room.
              Enhanced Interiors can install a “Raised” Header to make the room look as if it had
              always been that way. 
            </p>
            <p>
              If it’s a Great Room you desire, Let Enhanced Interiors Remodeling work for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}