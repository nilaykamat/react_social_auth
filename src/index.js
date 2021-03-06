import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Auth from './auth/';
import Profile from './profile/';
import './index.css';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Auth}/>
					<Route path='/profile' component={Profile}/>
					<Redirect to="/"/>
				</Switch>	
			</BrowserRouter>		
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
