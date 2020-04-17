import React from 'react'
 import { HashRouter as Router, Route } from 'react-router-dom' 
//  Internal API for Kenin n L needs 'link'

import { getDragonBallDetails } from '../api/get-api'
import characterPage from './Character.jsx'


class App extends React.Component {
    state = {
      dragon: []
    }
    componentDidMount() {
      this.update()
    }

    update = () => {
      getDragonBallDetails()
      .then(dragon => {
        this.setState({
          dragon: dragon
        })
      })
    }


render() {
  // console.log(this.state.dragon)
  return (
    <Router>
      <header>
        <h1>Dragon Ball Z Characters</h1>
        <img src="" />
      </header>
          <ul>
              {this.state.dragon.map((dragon) => {
                console.log(dragon)
                return <p>
                        Kelly loves SCONES {dragon._id}
                      </p>
                  {/* return <Dragon key={dragon.id} data={dragon} /> */}
              })}
          </ul>
        <Route path='/description/:id' render={(props) => (
        <Description {...props} data={this.state.dragon} />)}/>
    </Router>
  )
}
}
export default App

// species: "unknown"
// status: "Alive"
// originPlanet: "Unknown"
// gender: "Male"
// _id: "5c7c89fb12b25c00177aa150"
// name: "Frieza"
// series: "Z"
// created: "2019-03-04T02:14:19.836Z"
// url: "/api/character/Frieza"
// image: "../images/Frieza.jpg"":"../images/Goku.jpg","__v":0},
