import React from 'react'
import './Thumb.css'

export default class Thumb extends React.Component {

  render() {
    return (
      <div className="thumb column">
        <figure className="has-shadow image is-4by3 add-shadow">
          <img src={this.props.img} />
          <span className="thumb-title">{this.props.label}</span>
        </figure>
      </div>
    )
  }

}

