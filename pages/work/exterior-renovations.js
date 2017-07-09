import React from 'react';

import Gallery from '../../components/Gallery';

export default () => {
  return (
    <div className="container">
      <h1 className="title" style={{ margin: '25px 0' }}>Work - Exterior Renovations</h1>
      <div className="columns">
        <div className="column is-one-third" style={{ margin: '25px 0' }}>
          <Gallery albumId={'72157682437069284'} />
        </div>
        <div className="column">
          <div className="content is-medium"  style={{ margin: '25px 0' }}>
            <p>
              Enhanced Interiors Remodeling can provide a solution for all the exterior work you
              have in mind. Weather it is new siding and paint to address curb appeal, or new
              windows and doors to make your home more energy efficient.
            </p>
            <p>
              No matter your
              needs, from Roofs to Custom patios and retaining walls, Enhanced interiors
              Remodeling will work for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}