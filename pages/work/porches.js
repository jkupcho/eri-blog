import React from 'react';

import Gallery from '../../components/Gallery';

export default () => {
  return (
    <div className="container">
      <h1 className="title" style={{ margin: '25px 0' }}>Work - Porches</h1>
      <div className="columns">
        <div className="column is-one-third" style={{ margin: '25px 0' }}>
          <Gallery albumId={'72157682436627004'} />
        </div>
        <div className="column">
          <div className="content is-medium"  style={{ margin: '25px 0' }}>
            <p>
              Like decks, a porch is a great area for outside entertainment and relaxation. From open
              air to screened in, to a completely enclosed three or four season, we have the ability
              and understanding to construct your ideal porch.
            </p>
            <p>
              Whatever porch you have in mind, Enhanced Interiors Remodeling will work for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}