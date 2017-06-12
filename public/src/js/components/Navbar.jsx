import React, { Component } from 'react';
import actions from '../actions';
import Link from 'react-router/lib/Link';
import Home from './Home';
import New_Section from './New_Section';
import Admin from './Admin';
import Setting from './Setting';
import Create from './create_topic/Create';
import Topics from './Topics/Topics';
import TopicBody from './Post/TopicBody';
import Login from './auth/Login';
import Register from './auth/Register';
import UserStore from '../stores/UserStore';


export default class Navbar extends Component {


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
				role: this.props.role,
		}
	}

	
	handleClick(event) {
	    event.preventDefault();
	    data = UserStore.getUser().id;
		
	    actions.handle('LOGOUT_ATTEMPT', data);
	}


    render() {
    	let rightLinks = [];
    	let leftLinks = [];
    	switch(this.props.role){
    		case 'guest':
    			rightLinks = [
					{
						link: '/login',
						text: 'Login'
					},
					{
						link: '/register',
						text: 'Register'
					}
				]
			break;

			case 'user owner':
				leftLinks = [
					{
						link: '/create',
						text: 'New topic'
					}
				];

    			rightLinks = [
					{
						link: '/profile/'+ UserStore.getUser().id,
						text: 'Profile'
					},
					{
						link: '/setting',
						text: 'Setting'
					},
					{
						onClick: this.handleClick,
						link: '/logout',
						text: 'Logout'
					}
				]
			break;

			case 'user admin':
				leftLinks = [
					{
						link: '/create',
						text: 'New topic'
					},
					{
						link: '/new_section',
						text: 'New Section'
					}
				];

    			rightLinks = [
    				{
    					link: '/user_list',
    					text: 'Users_list'
    				},
					{
						link: '/profile/'+ UserStore.getUser().id,
						text: 'Profile'
					},
					{
						link: '/setting',
						text: 'Setting'
					},
					{
						onClick: this.handleClick,
						link: '/logout',
						text: 'Logout'
					}
				]
			break;
    	}

    	return (
    		<div>
				<nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
			      <Link to='/' style={{ color: 'white', fontSize: 20 }}>Forum</Link>
			      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
			        <ul className="navbar-nav mr-auto">
		      			{leftLinks.map((item, index) => {
		      				return (
					          	<li key={index} className="nav-item for-user">
					          		<Link to={item.link}>{item.text}</Link>
					      		</li>
	      					)
	      				})}
			      	</ul>
			      </div>

			      <div>
			          <ul className="navbar-nav mr-auto">
			            {rightLinks.map((item, index) => {
							return (
								<li key={index} className="nav-item for-guest">
					              <Link  onClick={item.onClick} to={item.link}>{item.text}</Link>
					            </li>
							)
						})}
			          </ul>
			        </div>

			    </nav>
			</div>
	    )
    }
}
