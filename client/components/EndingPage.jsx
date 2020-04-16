import React from 'react'

class EndingPage extends React.Component {
    
    state = {
        name: '',
        wish: ''
    }

    render() {
        
        return (
            <>
                <form> 
                    <label>
                        Enter your name mortal:
                        <input type = "text" name ="name"/>
                    </label>
                    <label>
                        Make a wish:
                        <input type ="text" wish="wish"/>
                    </label>
                    <input type='submit' value="Submit"/>
                </form>
 
            </>
        )
    }
}

export default EndingPage