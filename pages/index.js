import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

import ExteriorThumb from '../images/exterior_thumb.jpg'
import PorchesThumb from '../images/porches_thumb.jpg'
import KitchensThumb from '../images/kitchens_thumb.jpg'
import LivingRoomThumb from '../images/living_room_thumb.jpg'

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
            <Thumb label='Exterior' img={ExteriorThumb}></Thumb>
            <Thumb label='Porches' img={PorchesThumb}></Thumb>
            <Thumb label='Kitchens' img={KitchensThumb}></Thumb>
            <Thumb label='Living Rooms' img={LivingRoomThumb}></Thumb>
          </div>
        </section>

        <section className="about-us section has-shadow" style={{backgroundColor: '#f5f1f5', borderTop: '1px solid #cfcfcf', borderBottom: '1px solid #cfcfcf'}}>
          <div className="column is-offset-one-quarter is-half">
            <h1 className="title is-1 has-text-centered">About Us</h1>
              <div style={{margin: '20px 20px'}}>
                <img className="is-centered" src={AboutUsImage} width={350} height={350} style={{display: 'block', margin: 'auto'}} />
              </div>
              <div className="content">
                <p>
                  Enhanced Interiors Remodeling is a family owned, Father and Son company. Established in 1989 by Bill Dusold, Enhanced Interiors Remodeling was started with the intention of remodeling only the interiors of the homes. As time progressed, the natural evolution was to provide complete home remodeling services while maintaining its original name.
                </p>
                <p>
                  While enjoying a successful engineering career, Bill started Enhanced Interiors Remodeling business. Lacking tangible evidence of improvements while in industry, Bill was spurred by the constant and unlimited change in the remodeling process. As Bill has always stated, "At the end of a day, there will be change."
                </p>
                <p>
                  Following in his fathers footsteps Andy Dusold attended Dunwoody College of Technology and received a degree in Architectural Drafting and Estimating. After working for Lennar Homes as a construction coordinator and DAFC as a site supervisor, Andy decided that the time was right to go to work along side his father. Together they are solely responsible for the success of the company.
                </p>
                <p>
                  Bill and Andy have a great understanding of the hard work it takes to provide excellent quality and superior customer service. Just as their motto states “Working with the customer from conception through completion” Enhanced Interiors Remodeling will work for you.
                </p>
              </div>
          </div>
          <div className="column is-one-quarter"></div>
        </section>
        <div className="section-divider"></div>
      </div>
    )
  }
}
