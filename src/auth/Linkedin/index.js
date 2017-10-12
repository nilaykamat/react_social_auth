import React, { Component } from 'react';

import config from '../config';

class Linkedin extends Component{
	constructor(props){
		super(props);
		console.log(this.props);
	}
	
    componentDidMount(){
        (function() {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "http://platform.linkedin.com/in.js?async=true";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        })();   
    }
    
    //Trigger Login for LinkedIn
    linkedinLogin = () => {
        window.IN.init({
			api_key 	: config.linkedin.api_key
        });
        setTimeout(function(){
			this.getUserDetails()
		}.bind(this),1000);   
        console.log("Loaded")
	}
	
    getUserDetails = () => {
		console.log("Trying To get User details");
        window.IN.User.authorize( function(){ 
            window.IN.API.Profile("me").fields(
				["id", "firstName", "lastName", "pictureUrl", "publicProfileUrl"]
			).result(function(result) {
				console.log(result);
				localStorage.setItem('name', result.values[0].firstName + " " + result.values[0].lastName);
				localStorage.setItem('network', "Linkedin");
				localStorage.setItem('image', result.values[0].pictureUrl);
				localStorage.setItem('accessToken', result.values[0].id);
				this.props.history.push("/profile");
			}).error(function(err) {
				console.log('Import error - Error occured while importing data')
			});
        });
    }
    render(){
        return(
			<button id="btnLinkedin" onClick={() => this.linkedinLogin()}>LinkedIn Login</button>
        )
    }
}

export default Linkedin;