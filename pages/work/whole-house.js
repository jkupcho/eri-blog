import React from 'react';

import Gallery from '../../components/Gallery';

export default () => {
  return (
    <div className="container">
      <h1 className="title" style={{ margin: '25px 0' }}>Work - Whole House Remodel</h1>
      <div className="columns">
        <div className="column is-one-third" style={{ margin: '25px 0' }}>
          <Gallery albumId={'72157685385251905'} />
        </div>
        <div className="column">
          <div className="content is-medium"  style={{ margin: '25px 0' }}>
            <p>
              A Whole House Remodel is an ideal solution for growing families who enjoy their
location but need more house. With remodeling, the possibilities are endless. We can
provide skilled Architects and Designers, as well as interior decorators to assist you in
creating a brand new home out of the existing one you own. Weather you’d like to
“pop” the roof and add a second story, or “knock” a wall out and add on.
            </p>
            <p>
              Enhanced Interiors Remodeling can help. Maybe it isn’t more space you need but simple upgrades
              and enhancements. Whatever the project is, Enhanced Interiors Remodeling will work
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}