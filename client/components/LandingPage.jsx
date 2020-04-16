import React from 'react'
import { Link } from 'react-router-dom'



class LandingPage extends React.Component {

    render() {
        return (
            <>
                <div>
                    <h1>Collect 7 Dragon Balls and make a wish!</h1>
                </div>
                <div>
                {/* <HideUntilLoaded
                    imageToLoad="../images/bulma_landingPage.png"
                    img src="../images/bulma_landingPage.png" alt="Bulma holding dragon ball"
                </HideUntilLoaded> */}
                <img src="../images/bulma_landingPage.png" alt="Bulma holding dragon ball"></img>
                </div>
                
                <div>
                    <p></p>
                    <br/>
                 
                    
                </div>

                <div>
                     {/* <Link to="/start">
                        <button>(first dragon ball)</button>
                    </Link> */}
                </div>
                
            </>
        )
    }
}

export default LandingPage