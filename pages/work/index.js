import React from 'react'
import Gallery from '../../components/Gallery'
import Thumb from '../../components/Thumb'

import ExteriorThumb from '../../images/exterior_thumb.jpg'
import DecksThumb from '../../images/deck_thumb.jpg'
import GarageThumb from '../../images/garage_thumb.jpg'
import WoodworkThumb from '../../images/woodwork_thumb.jpg'
import MudroomThumb from '../../images/mudroom_thumb.jpg'
import PorchesThumb from '../../images/porches_thumb.jpg'
import KitchensThumb from '../../images/kitchens_thumb.jpg'
import LivingRoomThumb from '../../images/livingrooms_thumb.jpg'
import BasementThumb from '../../images/basements_thumb.jpg'
import BathroomsThumb from '../../images/bathrooms_thumb.jpg'

import ExteriorMd from './Exterior.md'
import WoodworkMd from './Woodwork.md'
import MudroomMd from './Mudroom.md'
import PorchesMd from './Porches.md'
import GarageMd from './Garage.md'
import DecksMd from './Decks.md'
import LivingRoomMd from './LivingRoom.md'
import BasementMd from './Basement.md'
import BathroomsMd from './Bathrooms.md'
import KitchensMd from './Kitchens.md'

import detail from './detail.json'

import Scroll, { Link, Element, animateScroll } from 'react-scroll' 

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
    let galleryShown = detail[0]

    if (gallery !== undefined) {
      galleryShown = detail.filter(d => d.name === gallery.replace(/\s/g, ''))[0]
    }


    this.setState({
      galleryShown
    })
  }

  render() {
    return (
      <div className="container">
        <Element name="gallery">
          <Gallery name="gallery" albumId={this.state.galleryShown.albumId} />
        </Element>
        <section className="section">
          <div className="content">
            <h2>{this.state.galleryShown.label}</h2>
            <Description name={this.state.galleryShown.name} />
          </div>
        </section>
        <section className="section">
          <Thumbs onClick={this.findDetail.bind(this)} />
        </section>
        <section></section>
      </div>
    )
  }

}

const Description = ({name}) => {

  const thumb = (name) => {
    console.log(name);
    switch (name) {
      case 'exterior':
        return ExteriorMd
      case 'woodwork':
        return WoodworkMd
      case 'mudrooms': 
        return MudroomMd
      case 'porches': 
        return PorchesMd
      case 'garage': 
        return GarageMd
      case 'decks':
        return DecksMd
      case 'livingrooms':
        return LivingRoomMd
      case 'basements':
        return BasementMd
      case 'bathrooms':
        return BathroomsMd
      case 'kitchens':
        return KitchensMd
      default:
        return ''
    }
  }

  return (
    <div className="content" dangerouslySetInnerHTML={{ __html: thumb(name).body }}></div>
  )
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
        return WoodworkThumb
      case 'mudrooms': 
        return MudroomThumb
      case 'porches': 
        return PorchesThumb
      case 'garage': 
        return GarageThumb
      case 'decks':
        return DecksThumb
      case 'livingrooms':
        return LivingRoomThumb
      case 'basements':
        return BasementThumb
      case 'bathrooms':
        return BathroomsThumb
      case 'kitchens':
        return KitchensThumb
      default:
        return ''
    }
  }

  return (
    <div className="thumb-gallery columns is-multiline">
      {
        detail.map((d, index) => {
          if (d.name !== 'default') {
            return (<Link to={'gallery'} smooth={true} key={index} onClick={thumbClicked.bind(this, d.name)}><Thumb label={d.label !== undefined ? d.label : d.name} img={thumb(d)} /></Link>)
          }
          return ''
        })
      }
    </div>
  )

}
