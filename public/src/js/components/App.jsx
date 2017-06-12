import React, { Component } from 'react';
import actions from '../actions';

import UserStore from '../stores/UserStore';
import Navbar from './Navbar';
import RouterStore from '../stores/RouterStore';


export default class App extends Component {

	constructor(props){
		super(props);
		this.state = this.getState();
		this.getState = this.getState.bind(this);
		this._onChange = this._onChange.bind(this);
		// this.handleClick = this.handleClick.bind(this);
	}

	_onChange() {
		this.setState(this.getState());
	}

	getState() {
		return {
				user:UserStore.getUser(),
				isLoaded: UserStore.isLoaded()
		}
	}

	componentDidMount(){
		UserStore.addChangeListener(this._onChange);
		RouterStore.set(this.context.router);

		setTimeout(()=>{actions.handle('CHECK_ATTEMPT')}, 0);

	}

	componentWillUnmount(){
		UserStore.removeChangeListener(this._onChange)
	}


	render(){
		if(!this.state.isLoaded)
			return <div />

		return(
			<div>
	    		<Navbar role={this.state.user.role} />
	    	
		    	{this.props.children}
	    	</div>
			)
		}
}

App.contextTypes = {
	router: React.PropTypes.object
}