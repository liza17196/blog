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
				// login:UserStore.getLogin()
		}
	}

	// handleChange(event){

	// 	const target = event.target;
	// 	const value = target.value;
	// 	const name = target.name;
	// 	this.setState({
	// 		[name]: value 
	// 	});
	// }

	// handleClick(event) {
	//     event.preventDefault();
		
	//     actions.handle('LOGOUT_SUCCESS');
	// }

	componentDidMount(){
		UserStore.addChangeListener(this._onChange)
		// if(UserStore.isAuthenticated()) {
			

		// }

	}

	componentWillUnmount(){
		UserStore.removeChangeListener(this._onChange)
	}


	render(){
		console.log(UserStore.isAuthenticated());
		return(
			<div>
				<div>
					<nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
				      <Link to='/' style={{ color: 'white', fontSize: 20 }}>Блог</Link>

				      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
				        <ul className="navbar-nav mr-auto">

				          <li className="nav-item for-user">
				            <Link to='/create'>Создать тему</Link>
				          </li>

				            <li className="nav-item for-admin">
				              <Link to='/new_section'>Создать раздел</Link>
				            </li>

				        </ul>
				        </div>

				        <div>
				          <ul className="navbar-nav mr-auto">
				            <li className="nav-item for-guest">
				              <Link to='/login'>Вход</Link>
				            </li>
				            <li className="nav-item for-guest">
				              <Link to='/register'>Регистрация</Link>
				            </li>
				          </ul>
				        </div>

				        <div>
				        <ul className="navbar-nav mr-auto">

				            <li className="nav-item for-admin">
				              <Link to='/user_list'>Список пользователей</Link>
				            </li>

				            <li className="nav-item for-user">
				              <Link to='/profile'>Профиль</Link>
				            </li>
				            <li className="nav-item for-user">
				              <Link to='/setting'>Настройки</Link>
				            </li>
				            <li className="nav-item for-user">
				              <Link onClick={this.handleClick} to='/logout'>Выход</Link>
				            </li>
				          </ul>
				        </div>
				    </nav>
				    {/*
				    	<Navbar role={state.user.role} />
				    	let links = []
				    	switch(role){
							case 'client':
							links = [
								...
							]
				    	}
				    */}
		    	</div>
		    	{this.props.children};
	    	</div>
			)
		}
}
