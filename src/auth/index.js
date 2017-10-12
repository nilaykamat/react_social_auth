import React, { Component } from 'react';

class Auth extends Component{
    
    render(){
        return(
            <div>
				<h3 class="centered">Social Login</h3>
				<hr/>
				<div id="social-buttons">
					<button>Facebook Login</button>
					<button>Google Login</button>
					<button>Twitter Login</button>
					<button>Linkedin Login</button>
				</div>
            </div>
        )
    }
}

export default Auth;