import React, { Component } from 'react';
import { Router , Route, Link , Redirect, hashHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import New_Section from './New_Section';
import Admin from './Admin';
import Profile from './Profile/Profile';
import Settings from './Settings';
import Create from './create_topic/Create';
import Topics from './Topics/Topics';
import TopicBody from './Post/TopicBody';
import Login from './auth/Login';
import Register from './auth/Register';

export default class Routes extends Component {

	render(){
		return(
			<Router history={hashHistory}>
		        <Route path="/" component={App}>
			        <IndexRoute component={Home} />
			        <Route path="/new_section" component={New_Section} />
			        <Route path="/user_list" component={Admin} />
			        <Route path="/profile/:user_id" component={Profile} />
			        <Route path="/settings" component={Settings} />
			        <Route path="/create" component={Create} />
			        <Route path="/posts/:topic_id" component={TopicBody} />
			        <Route path="/login" component={Login} />
			        <Route path="/register" component={Register} />
			        <Route path="/sections/:section_id" component={Topics}/>
		        </Route> 
		    </Router>
		)
	}
}