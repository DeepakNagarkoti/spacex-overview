import React from 'react'

import SpaceXCardSection from './SpaceXCardSection'
import FilterSection from './FilterSection'
import {MAIN_HEADING, DEVELOPERS_DETAILS} from '../../constant'
import './index.scss'

const SpaceXOverview = () => {
  return (
    <>
      <p className="heading">{MAIN_HEADING}</p>
      <div className='filter-with-card'>
        <div className='filter-section'>
          <FilterSection />
        </div>
        <div className='card-section'>
          <SpaceXCardSection />
        </div>
      </div>
      <h3 className="footer-text">{DEVELOPERS_DETAILS}</h3>
    </>
  )
}

export default SpaceXOverview
