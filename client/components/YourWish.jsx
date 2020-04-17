import React from 'react'
import { getWishes } from '../api/wishes'


class YourWish extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {
        getWishes()
            .then(wishes => {
                console.log(wishes)
                this.setState({
                    data: wishes
                })
            })
    }

    render() {
        return (
            <div>
                <p>What everyone wished for!</p>
                <ul>
                    {
                        this.state.data.map(wishes => {
                            return(
                            <li>{wishes.name} | {wishes.wishes}</li>
                            )
                        })
                    }
                </ul>
            </div>


        )
    }
}
//state
//componentDidMount call getWishes and set state
//this.state.wishes.map(wish=>{
    //wish.name
//})

export default YourWish