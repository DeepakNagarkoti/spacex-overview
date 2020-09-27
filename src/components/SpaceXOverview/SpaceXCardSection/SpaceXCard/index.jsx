import React from 'react'

import { MISSION_ID, LAUNCH_YEAR, SUCCESSFUL_LAUNCH, SUCCESSFUL_LANDING } from '../../../../constant'
import './index.scss'

const SpaceXCard = (props) => {
  const { cardData: {
    flight_number,
    mission_name,
    links : {
      mission_patch_small
    },
    mission_id,
    launch_year,
    launch_success,
    rocket: {
      first_stage : {
        cores: [{land_success}]
      }
    }
  } } = props
  const missionId = mission_id[0]?mission_id[0] : 'NA'

  return (
    <div className='space-card-wrapper'>
    <img src={mission_patch_small} className="space-img" alt="space-img" />
    <p>{`${mission_name} #${flight_number}`}</p>
    <h3>{MISSION_ID}<span>{missionId}</span></h3>
    <h3>{LAUNCH_YEAR}<span>{launch_year}</span></h3>
    <h3>{SUCCESSFUL_LAUNCH}<span>{`${launch_success}`}</span></h3>
    <h3>{SUCCESSFUL_LANDING}<span>{`${land_success}`}</span></h3>
    </div>
  )
}

export default SpaceXCard
