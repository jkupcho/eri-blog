import React from 'react';

import Gallery from '../../components/Gallery';

export default () => {
  return (
    <div className="container">
      <h1 className="title" style={{ margin: '25px 0' }}>Work - Mud Rooms</h1>
      <div className="columns">
        <div className="column is-one-third" style={{ margin: '25px 0' }}>
          <Gallery albumId={72157683326007650} />
        </div>
        <div className="column">
          <div className="content is-medium"  style={{ margin: '25px 0' }}>
            <p>
              A new or expanded mud room can take a cluttered messy entry, and convert it into a clean organized place for your family to transfer from outdoors to in.  
              A mud room can be fitted with Custom lockers for coats and boots. 
              Depending on the size, a mud room can often double as a laundry room.
            </p>
            <p>No matter your families needs, Enhanced Interiors Remodeling will work for you.</p>
          </div>
        </div>
      </div>
    </div>
  );
}