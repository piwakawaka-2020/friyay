 import React from 'react'
 import Dragon from './Dragon'
// import LandingPage from './LandingPage'
// import EndingPage from './EndingPage'

// class App extends React.Component {
//   render() {
//     console.log('rendering')
//     return (
//       <>
//         {/* <Router>
//           <Route exact path="/" component={LandingPage} />
//         </Router> */}
//         <LandingPage />
//         <EndingPage />
//       </>
//     )
//   }
// }
 import { HashRouter as Router, Route } from 'react-router-dom' 
//  Internal API for Kenin n L needs 'link'

import { getDragonBallDetails } from '../api/get-api'
// import characterPage from './Dragon.jsx'


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
                  return <Dragon key={dragon.id} data={dragon} />
              })}
          </ul>
        <Route path='/description/:id' render={(props) => (
        <Description {...props} data={this.state.dragon} />)}/>
    </Router>
  )
}
}
export default App

//how do I call individual character from the array >
//how do I call individual character from the array >

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
