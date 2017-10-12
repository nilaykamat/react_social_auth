import React, { Component } from 'react';

import config from '../config';

class GoogleLogin extends Component{

    componentDidMount(){
        (function() {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        })();    
    }
    
    //Triggering login for google
    googleLogin = () => {
        window.gapi.auth.signIn({
            callback: function(authResponse) {
                this.googleSignInCallback(authResponse)
            }.bind( this ),
            clientid: config.google, //Google client Id
            cookiepolicy: "single_host_origin",
            requestvisibleactions: "http://schema.org/AddAction",
            scope: "https://www.googleapis.com/auth/plus.login email"
        });
    }
    
    googleSignInCallback = (e) => {
        console.log(e)
        if (e["status"]["signed_in"]) {
            window.gapi.client.load("plus", "v1", function() {
                if (e["access_token"]) {
					localStorage.setItem('accessToken', e["access_token"]);
					localStorage.setItem('network', 'Google');
                    this.getUserGoogleProfile(e["access_token"])
                } else if (e["error"]) {
                    console.log('Import error', 'Error occured while importing data')
                }
            }.bind(this));
        } else {
            console.log('Oops... Error occured while importing data')
        }
    }

    getUserGoogleProfile = accesstoken => {
        var e = window.gapi.client.plus.people.get({
            userId: "me"
        });
        e.execute(function(e) {
            if (e.error) {
                console.log(e.message);
                console.log('Import error - Error occured while importing data')
                return            
            } else if (e.id) {
                //Profile data
				// alert("Successfull login from google : "+ e.displayName )
				localStorage.setItem('name', e.displayName);
				localStorage.setItem('image', e.image.url);
                console.log(e);
                return;
            }
        });
    }
    
    render(){
        return(
			<button id="btnGoogle" onClick={() => this.googleLogin()}>Google Login</button>
        )
    }
}

export default GoogleLogin;