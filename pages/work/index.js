import React from 'react'
import Gallery from '../../components/Gallery'
import Thumb from '../../components/Thumb'

import ExteriorThumb from '../../images/exterior_thumb.jpg'

import detail from './detail.json'

export default class Work extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: props.location.query === undefined ? 'default' : props.location.query.gallery
    }
  }

  componentWillMount() {
    const gallery = this.props.location.query === undefined ? 'default' : this.props.location.query.gallery

    this.findDetail(gallery)
  }

  findDetail(gallery) {
    let galleryShown = detail.filter(d => d.name === gallery)[0]

    if (galleryShown === undefined) { galleryShown = detail[0] }

    this.setState({
      galleryShown
    })
  }

  render() {
    return (
      <div className="container">
        <section className="section">
          <Gallery albumId={this.state.galleryShown.albumId} />
          <hr />
        </section>
        <section className="section">
          <Thumbs onClick={this.findDetail.bind(this)} />
        </section>
        <section></section>
      </div>
    )
  }

}

const Thumbs = ({onClick}) => { 
  const thumbClicked = (gallery) => {
    onClick(gallery)
  }

  const thumb = (detail) => {
    switch (detail.name) {
      case 'exterior':
        return ExteriorThumb
      case 'woodwork':
        return ExteriorThumb
      default:
        return ''
    }
  }

  return (
    <div className="thumb-gallery columns is-multiline">
      {
        detail.map((d, index) => {
          if (d.name !== 'default') {
            return (<div key={index} onClick={thumbClicked.bind(this, d.name)}><Thumb label={d.name} img={thumb(d)} /></div>)
          }
          return ''
        })
      }
    </div>
  )

}
