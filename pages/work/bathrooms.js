import React from 'react';

import Gallery from '../../components/Gallery';

export default () => {
  return (
    <div className="container">
      <h1 className="title" style={{ margin: '25px 0' }}>Work - Bathrooms</h1>
      <div className="columns">
        <div className="column is-one-third" style={{ margin: '25px 0' }}>
          <Gallery albumId={'72157682321345432'} />
        </div>
        <div className="column">
          <div className="content is-medium"  style={{ margin: '25px 0' }}>
            <p>
             At Enhanced Interiors Remodeling we understand a bathroom is a highly utilized and
fairly personal part of your home. We can create a space unique to your needs.
Custom cabinetry can be built to fit in small and awkward areas. Perhaps a whirl pool
tub with matching tub deck and shower is what you desire. 
            </p>
            <p>
              However you like, Enhanced Interiors Remodeling will work for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}