import React from 'react';

import Gallery from '../../components/Gallery';

export default () => {
  return (
    <div className="container">
      <h1 className="title" style={{ margin: '25px 0' }}>Work - Custom Cabinetry</h1>
      <div className="columns">
        <div className="column is-one-third" style={{ margin: '25px 0' }}>
          <Gallery albumId={'72157683326210760'} />
        </div>
        <div className="column">
          <div className="content is-medium"  style={{ margin: '25px 0' }}>
            <p>
              Custom cabinetry and woodwork not only improves the look of your home but can also
              increase the over all value too. Upgrading cabinets, doors, trim work and shelving can
              be a relatively noninvasive and quick way to enhance the interior of your house. 
            </p>
            <p>
              From custom built in cabinets, to wainscoting and crown molding, Enhanced Interiors Remodeling will work for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}