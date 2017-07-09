import React, { Component } from 'react';
import { fetchAlbum } from '../lib/flickr-api';

import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default class Gallery extends Component {

  constructor(props) {
    super(props);
    this.albumId = props.albumId;

    this.state = {
      loading: true,
      gallery: []
    }
  }

  componentWillMount () {
    fetchAlbum(this.albumId)
      .then((photos) => {
        this.setState({
          loading: false,
          gallery: photos.map((photo) => <div key={photo.key}><img src={photo.src} /></div>)
        });
      });
  }

  render() {
    return (
      <div>{this.state.loading ? <span>Loading...</span> : <Slider {...settings}>{this.state.gallery}</Slider>}</div>
    );
  }

}