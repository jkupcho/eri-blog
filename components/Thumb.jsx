import React from 'react'
import './Thumb.css'

export default class Thumb extends React.Component {

  render() {
    return (
      <div className="thumb column">
        <ImageFigure img={this.props.img}
                     label={this.props.label}>
        </ImageFigure>
      </div>
    )
  }

}

const ImageFigure = ({img, label}) => (
  <figure className="has-shadow image is-4by3 add-shadow">
    <img src={img} />
    <span className="thumb-title">{label}</span>
  </figure>
);

