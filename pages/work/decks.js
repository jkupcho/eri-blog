import React from 'react';

import Gallery from '../../components/Gallery';

export default () => {
  return (
    <div className="container">
      <h1 className="title" style={{ margin: '25px 0' }}>Work - Decks</h1>
      <div className="columns">
        <div className="column is-one-third" style={{ margin: '25px 0' }}>
          <Gallery albumId={'72157682435697104'} />
        </div>
        <div className="column">
          <div className="content is-medium"  style={{ margin: '25px 0' }}>
            <p>
              Decks can provide as much function as there are materials to build the with. Imagine a
              new Cedar deck allowing you access to a lower back yard. Or a maintenance free
              Composite deck with custom benches for outdoor entertaining.
            </p>
            <p>
              However the style or type you need, Enhanced Interiors Remodeling will work for you. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}