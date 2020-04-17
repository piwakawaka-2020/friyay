import React from 'react'

class EndingPage extends React.Component {
    
    state = {
        name: '',
        wish: ''
    }
    
    handleChange =(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(this.state.name)
    }

    
    submitChange = (event) =>{
        event.preventDefault()

        //addWishes function with setState
    }

    render() {

        return (
            <>
                <form> 
                    <label>
                        Enter your name mortal:
                        <input type = "text" name ="name" onChange ={this.handleChange}/>
                    </label>
                    <label>
                        Make a wish:
                        <input type ="text" name="wish" onChange ={this.handleChange}/>
                    </label>
                    <input type='submit' value="Submit"/>
                </form>
 
            </>
        )
    }
}

export default EndingPage