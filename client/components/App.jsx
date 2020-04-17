import React from 'react'
import LandingPage from './LandingPage'
import EndingPage from './EndingPage'
import YourWish from './YourWish'

class App extends React.Component {
  render() {
    console.log('rendering')
    return (
      <>
        {/* <Router>
          <Route exact path="/" component={LandingPage} />
        </Router> */}
        <LandingPage />
        <YourWish />
        <EndingPage />
      </>
    )
  }
}
export default App
