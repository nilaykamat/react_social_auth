import React, {Component} from 'react';


//import config from '../../../config';

class Profile extends Component{
	constructor(props) {
		super(props);
		var accessToken = localStorage.getItem('accessToken');
		console.log(accessToken);
		if(!accessToken){
			// this.context.history.push('/')
		}
	}

	logout = () => {
		console.log("Logging Out");
		localStorage.removeItem('name');
		localStorage.removeItem('network');
		localStorage.removeItem('image');
		localStorage.removeItem('accessToken');
		// this.context.history.push('/')
	}

    render(){
		var image;
		if(localStorage.getItem('image')){
			image = localStorage.getItem('image');
		} else{
			image = "https://svet.fri.uni-lj.si/wp-content/uploads/2014/12/Avatar-150x150.png";
		}
        return(
            <div className="centered">
				<img id="imgProfilePic" src={image} />
				<hr />
				<h2>Hello {localStorage.getItem('name')}</h2>
				<h3>from {localStorage.getItem('network')}</h3>
				<hr />
                <button id="btnLogout" onClick={() => this.logout()}>LOGOUT</button>
            </div>
        )
    }
}

export default Profile;