import React from 'react'
import { render } from '@testing-library/react'

import SpaceXCard from '..'

describe('<SpaceXCard />', () => {
  let props

  beforeEach(() => {
    props = { cardData: {
      flight_number: '123',
      mission_name: 'test',
      links : {
        mission_patch_small: 'a.com'
      },
      mission_id: '1',
      launch_year: '2XX1',
      launch_success: true,
      rocket: {
        first_stage : {
          cores: [{land_success: true}]
        }
      }
    } }
  })

  it('should render <SpaceXCard />', async () => {
    const { asFragment } = render(<SpaceXCard {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
