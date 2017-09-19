import React, { Component } from 'react';
import { fetchAlbum } from '../lib/flickr-api';

import Slider from 'react-slick';

import './Gallery.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  //  autoplay: true
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
          gallery: photos.map((photo) => <div key={photo.id}><div className="img-container"><figure className="image is-4by3"><img src={photo.photoSrc} /></figure></div></div>)
        });
      });
  }

  render() {
    return (
      <div className="gallery-container">
        <div className="gallery-wrapper">
          {this.state.loading ? <span>Loading...</span> : <Slider {...settings}>{this.state.gallery}</Slider>}
        </div>
      </div>
    );
  }

}
