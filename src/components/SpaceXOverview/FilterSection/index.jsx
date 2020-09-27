import React from 'react'
import { withRouter } from 'react-router'

import './index.scss'
import {
  FILTER_MONTH,
  SUCCESS_BUTTON,
  FILTER_HEADING,
  LAUNCH_HEADING,
  SUCCESSFUL_LAUNCH_HEADING,
  SUCCESSFUL_LAND_HEADING
} from '../../../constant'

const FilterSection = (props) => {
  const { history } = props
  const clickHandler = (val) => {
    history.push(val)
  }

  return (
    <div className='filter-wrapper'>
      <h3>{FILTER_HEADING}</h3>
      <p className='sub-heading'>{LAUNCH_HEADING}</p>
      <hr />
      {FILTER_MONTH.map((val, key) => {
        return (
          <button
            key={key}
            className="button year-button"
            onClick={() => clickHandler(`year=${val}`)}>
            {val}
          </button>
        )
      })}
      <>
        <p className='sub-heading'>{SUCCESSFUL_LAUNCH_HEADING}</p>
        <hr />
        {SUCCESS_BUTTON.map((val, key) => {
          return (
            <button
              key={key}
              className="button launch-button"
              onClick={() => clickHandler(`launch=${val.toLocaleLowerCase()}`)}>
              {val}
            </button>
          )
        })}
      </>
      <>
        <p className='sub-heading'>{SUCCESSFUL_LAND_HEADING}</p>
        <hr />
        <span className='button-land-button'>
          {SUCCESS_BUTTON.map((val, key) => {
            return (
              <button
                key={key}
                className="button land-button"
                onClick={() => clickHandler(`land=${val.toLocaleLowerCase()}`)}>
                {val}
              </button>
            )
          })}
        </span>
      </>
    </div>
  )
}

export default withRouter(FilterSection)
