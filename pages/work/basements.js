import React from 'react';

import Gallery from '../../components/Gallery';

export default () => {
  return (
    <div className="container">
      <h1 className="title" style={{ margin: '25px 0' }}>Work - Basements</h1>
      <div className="columns">
        <div className="column is-one-third" style={{ margin: '25px 0' }}>
          <Gallery albumId={'72157685285691136'} />
        </div>
        <div className="column">
          <div className="content is-medium"  style={{ margin: '25px 0' }}>
            <p>
              A basement is a fantastic area of remodeling opportunity. Basements often lend
              themselves to endless possibilities. From additional bedrooms, family rooms, game
              rooms and rec. areas. To uniquely designed craft rooms and Man Caves.
            </p>
            <p>
              When it comes to basements, Enhanced Interiors Remodeling will work for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}