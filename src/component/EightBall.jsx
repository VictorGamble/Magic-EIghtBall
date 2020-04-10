import React, { Component } from 'react';

class EightBall extends Component{
    state = {
        question: "will i complete this project by 2?"
    }

    LoadData = async (url) => {
        const response = await fetch(url);
        const data = await response.json()
        return data;
    }

    async componentDidMount(){
        try {
        let url = `https://8ball.delegator.com/magic/:format/:question`
            const response = await this.LoadData(url);
            
 
     } catch (error) {
         console.error("Error", error);
         return error;
     }
    }

    render() {
        return (
            <form>
                <input type='Text' placeholder="Ask the Magic EightBall" />
                <br/>
                <button type="submit">Get your answer</button>
            </form>

        )
    }

}

export default EightBall;