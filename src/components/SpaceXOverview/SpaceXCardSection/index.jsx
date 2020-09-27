import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'

import SpaceXCard from './SpaceXCard'
import { getParamsData } from '../../../helpers/getParamsData'
import { ERROR_MSG } from '../../../constant'

const SpaceXCardSection = (props) => {
  const { location: {
    pathname
  } } = props

  const [yearFilter, setYearFilter] = useState('')
  const [launchFilter, setLaunchFilter] = useState('')
  const [landFilter, setLandFilter] = useState('')
  const [spaceData, setSpaceData] = useState({})

  useEffect(() => {
    if (pathname.includes('year')) {
      const year = getParamsData(pathname)
      setYearFilter(`&launch_year=${year}`)
    } else if (pathname.includes('launch')) {
      const launch = getParamsData(pathname)
      setLaunchFilter(`&launch_success=${launch}`)
    } else if (pathname.includes('land')) {
      const land = getParamsData(pathname)
      setLandFilter(`&land_success=${land}`)
    }

    fetch(`https://api.spacexdata.com/v3/launches?limit=100${yearFilter}${launchFilter}${landFilter}`)
      .then(res => res.json())
      .then(res => {
        if(res.length>0){
          setSpaceData(res)
        } else {
          setSpaceData('error')
        }
      })
  }, [pathname, yearFilter, launchFilter, landFilter])
  return (
    <>
      {(spaceData.length >= 1 && spaceData !== 'error') && spaceData.map((data, key) => {
        return <SpaceXCard key={key} cardData={data} />
      })}
      { (spaceData === 'error') && <h2>{ERROR_MSG}</h2> }
    </>
  )
}

export default withRouter(SpaceXCardSection)
