import React from 'react'
import Gallery from '../../components/Gallery'
import Thumb from '../../components/Thumb'

import ExteriorThumb from '../../images/exterior_thumb.jpg'

import detail from './detail.json'

export default class Work extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 'default'
    }
  }

  render() {
    let galleryShown = detail.filter(d => d.name === this.state.selected)[0]

    if (galleryShown === undefined) { galleryShown = detail[0] }

    return (
      <div className="container">
        <section className="section">
          <span className="testing">{galleryShown.description}</span>
          <Gallery albumId={galleryShown.albumId} />
          <hr />
        </section>
        <section className="section">
          <Thumbs />
        </section>
        <section></section>
      </div>
    )
  }

}

const Thumbs = () => { 
  const thumb = (detail) => {
    switch (detail.name) {
      case 'Exterior':
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
            return (<Thumb key={index} label={d.name} img={thumb(d)} />)
          }
          return ''
        })
      }
    </div>
  )

}
