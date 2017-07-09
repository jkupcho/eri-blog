import React from 'react';

import Gallery from '../../components/Gallery';

export default () => {
  return (
    <div className="container">
      <h1 className="title" style={{ margin: '25px 0' }}>Work - Family Rooms</h1>
      <div className="columns">
        <div className="column is-one-third" style={{ margin: '25px 0' }}>
          <Gallery albumId={'72157682321554212'} />
        </div>
        <div className="column">
          <div className="content is-medium"  style={{ margin: '25px 0' }}>
            <p>
              Enhancing your living space can go a long way to making you home a more enjoyable
              place to be. Installing energy efficient gas fireplaces and custom built entertainment
              centers can turn an ordinary room into “the place to be”. 
            </p>
            <p>
              Whether you decide to add more space by way of an addition or up grade the space you currently have, Enhanced Interiors Remodeling will work for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}