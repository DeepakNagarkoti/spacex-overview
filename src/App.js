import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import SpaceXOverview from './components/SpaceXOverview'

const App = () => {
  return (
    <Router>
      <Route path='/' component={SpaceXOverview}></Route>
    </Router>
  )
}

export default App
