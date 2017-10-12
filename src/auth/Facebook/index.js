import React, {Component} from 'react';

import config from '../config';

class Facebook extends Component{
    
    componentDidMount(){
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        
        window.fbAsyncInit = function() {
            window.FB.init({
              appId      : config.facebook,
              cookie     : true,  // enable cookies to allow the server to access the session
              xfbml      : true,  // parse social plugins on this page
              version    : 'v2.8' // use version 2.8
            });
        };
    }
	
	redirectToProfile = () => {
		this.props.history.push("/profile");
	}

    facebookLogin = () => {        
        window.FB.login(function(resp){
			this.statusChangeCallback(resp);
		}.bind(this),{ scope : 'email,public_profile' });
    }
    
    checkLoginState() {
		console.log( "Checking login status..........." );        
        window.FB.getLoginStatus(function(response) {
            console.log(response)
            this.statusChangeCallback(response);
        }.bind(this));
    }
    
    statusChangeCallback(response) {
        if (response.status === 'connected') {
			// Logged into your app and Facebook.
			localStorage.setItem('accessToken', response.authResponse.accessToken);
			localStorage.setItem('network', 'Facebook');
            this.fetchDataFacebook();
        } else if (response.status === 'not_authorized') {
			console.log('Import error', 'Authorize app to import data', 'error')
        } else {
			console.log('Import error', 'Error occured while importing data', 'error')
        }
    }
    
    fetchDataFacebook = () => {
		console.log('Fetching user info');
        window.FB.api('/me', function(user) {
			console.log(user);
			localStorage.setItem('name', user.name);
			console.log('Successful login from facebook : ' + user.name);
			this.redirectToProfile();
		}.bind(this));
		// this.props.history.push("/profile");
    }

    render(){
        return(
			<button id="btnFacebook" onClick={() => this.facebookLogin()}>Facebook Login</button>
        )
    }
}

export default Facebook;
