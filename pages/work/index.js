import React from 'react'
import Gallery from '../../components/Gallery'
import Thumb from '../../components/Thumb'

import ExteriorThumb from '../../images/exterior_thumb.jpg'
import PorchesThumb from '../../images/porches_thumb.jpg'
import KitchensThumb from '../../images/kitchens_thumb.jpg'
import LivingRoomThumb from '../../images/living_room_thumb.jpg'

import detail from './detail.json'

import Scroll, { animateScroll } from 'react-scroll' 

export default class Work extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: props.location.query === undefined ? 'default' : props.location.query.gallery
    }
    this.options = {
      offset: 90
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

    animateScroll.scrollToTop(this.options);

    this.setState({
      galleryShown
    })
  }

  render() {
    return (
      <div className="container">
        <Gallery albumId={this.state.galleryShown.albumId} />
        <section className="section">
          <div className="content">
            <h2>{this.state.galleryShown.label}</h2>
            <p>
              Ipsum molestias maxime dolores molestiae necessitatibus magnam impedit. Dolorem vel recusandae ea id cupiditate expedita, earum? Lorem maiores enim ad eveniet suscipit? Maiores expedita quaerat aliquam labore necessitatibus id, numquam
            </p>
            <p>
            Sit quod accusamus rerum cumque quidem quibusdam? Molestias odio veritatis autem consectetur esse? Doloremque aut elit adipisci labore illo Eaque totam voluptatibus itaque quis mollitia. Dolore esse voluptatem maiores veniam
            </p>
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

const Thumbs = ({onClick}) => { 
  const thumbClicked = (gallery) => {
    onClick(gallery)
  }

  const thumb = (detail) => {
    switch (detail.name) {
      case 'exterior':
        return ExteriorThumb
      case 'porches':
        return PorchesThumb
      case 'kitchens':
        return KitchensThumb
      case 'livingrooms':
        return LivingRoomThumb
      default:
        return ''
    }
  }

  return (
    <div className="thumb-gallery columns is-multiline">
      {
        detail.map((d, index) => {
          if (d.name !== 'default') {
            return (<div key={index} onClick={thumbClicked.bind(this, d.name)}><Thumb label={d.label !== undefined ? d.label : d.name} img={thumb(d)} /></div>)
          }
          return ''
        })
      }
    </div>
  )

}
