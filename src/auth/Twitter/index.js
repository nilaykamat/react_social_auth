import React, { Component } from 'react';

import config from '../config';

class Twitter extends Component{    
    componentDidMount(){
        (function() {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "https://www.gstatic.com/firebasejs/4.5.0/firebase.js";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        })();   
    }
    
    //Trigger Login for LinkedIn
    twitterLogin = () => {
		console.log("Initializing firebase");
		window.firebase.initializeApp(config.firebase);
		var provider = new window.firebase.auth.TwitterAuthProvider();
		window.firebase.auth().signInWithPopup(provider).then(function(result) {
			console.log(result);
			localStorage.setItem('name', result.additionalUserInfo.username);
			localStorage.setItem('network', "Twitter");
			localStorage.setItem('image', result.additionalUserInfo.profile.profile_image_url);
			localStorage.setItem('accessToken', result.credential.accessToken);

		}).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			var email = error.email;
			var credential = error.credential;
			console.log ("Error! Error code: " + errorCode + ", Email: " + email + ", Credential: " + credential + ". That's all we know.");
		});
	}

    render(){
        return(
			<button id="btnTwitter" onClick={() => this.twitterLogin()}>Twitter Login</button>
        )
    }
}

export default Twitter;