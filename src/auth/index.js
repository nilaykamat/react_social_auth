import React, { Component } from 'react';
import Facebook from './Facebook/'

class Auth extends Component{
    
    render(){
        return(
            <div>
				<h3 className="centered">Social Login</h3>
				<hr/>
				<div id="social-buttons">
					<Facebook />
					<button id="btnGoogle">Google Login</button>
					<button id="btnTwitter">Twitter Login</button>
					<button id="btnLinkedin">Linkedin Login</button>
				</div>
            </div>
        )
    }
}

export default Auth;