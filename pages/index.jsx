import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

import ExteriorThumb from '../images/exterior_thumb.jpg'
import PorchesThumb from '../images/porches_thumb.jpg'
import KitchensThumb from '../images/kitchens_thumb.jpg'
import LivingRoomThumb from '../images/living_room_thumb.jpg'

import AboutUs from './about-us.md'

import Title from '../components/Title'
import Gallery from '../components/Gallery'
import Icon from '../components/Icon'
import Thumb from '../components/Thumb'
import Banner from '../images/banner.jpg'
import AboutUsImage from '../images/dusolds-540x460.jpg'
import '../css/index.css'

export default class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <Gallery albumId={'72157682345181862'}/>
      
        <section className="section">
          <div className="thumb-gallery columns is-multiline">
            <Link to={{ pathname: '/work/', query: { gallery: 'exterior' } }}><Thumb label='Exterior' img={ExteriorThumb}></Thumb></Link>
            <Link to={{ pathname: '/work/', query: { gallery: 'porches' } }}><Thumb label='Porches' img={PorchesThumb}></Thumb></Link>
            <Link to={{ pathname: '/work/', query: { gallery: 'kitchens' } }}><Thumb label='Kitchens' img={KitchensThumb}></Thumb></Link>
            <Link to={{ pathname: '/work/', query: { gallery: 'livingrooms' } }}><Thumb label='Living Rooms' img={LivingRoomThumb}></Thumb></Link>
          </div>
        </section>

        <section className="about-us section has-shadow" style={{backgroundColor: '#f5f1f5', borderTop: '1px solid #cfcfcf', borderBottom: '1px solid #cfcfcf'}}>
          <div className="column is-offset-one-quarter is-half">

            <h1 className="title is-1 has-text-centered">About Us</h1>
            <figure className="image is-4by3">
              <img className="is-centered" src={AboutUsImage} style={{display: 'block', margin: 'auto'}} />
            </figure>
            <br />
            <div className="content" dangerouslySetInnerHTML={{ __html: AboutUs.body }}></div>
          </div>
          <div className="column is-one-quarter"></div>
        </section>
        <div className="section-divider"></div>
      </div>
    )
  }
}
