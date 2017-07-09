import React from 'react';

import Gallery from '../../components/Gallery';

export default () => {
  return (
    <div className="container">
      <h1 className="title" style={{ margin: '25px 0' }}>Work - Kitchens</h1>
      <div className="columns">
        <div className="column is-one-third" style={{ margin: '25px 0' }}>
          <Gallery albumId={'72157682318556182'} />
        </div>
        <div className="column">
          <div className="content is-medium"  style={{ margin: '25px 0' }}>
            <p>
             Love to entertain? or is your kitchen just too small for your family? Let our designers help you create the kitchen of your dreams. At Enhanced Interiors Remodeling we work with custom cabinet makers, skilled craftsmen and excellent designers to help you envision and create the kitchen you have always wanted.
            </p>
            <p>
              Enhanced Interiors Remodeling will work for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}