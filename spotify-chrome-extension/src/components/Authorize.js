import React,{Component} from 'react';

class Authorize extends Component{
    submit(){

    }
    render(){
        return(
            <div>
                <h2>refresh_token</h2>
                <input type="text"></input>
                <button onClick={this.submit}>Submit</button>
            </div>
        )
    }
}

export default Authorize;