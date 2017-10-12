import React, { Component } from 'react';

import Facebook from './Facebook/'
import Google from './Google/'
import Linkedin from './Linkedin/'
import Twitter from './Twitter/'

class Auth extends Component{
    render(){
        return(
            <div>
				<h3 className="centered">Social Login</h3>
				<hr/>
				<div id="social-buttons">
					<Facebook />
					<Google />
					<Linkedin />
					<Twitter />
				</div>
            </div>
        )
    }
}

export default Auth;