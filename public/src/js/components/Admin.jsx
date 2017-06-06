import React, { Component } from 'react';
import actions from '../actions';
import App from './App';
import AdminStore from '../stores/AdminStore';

import Link from 'react-router/lib/Link';


export default class Admin extends Component {

	constructor(props){
		super(props);
		this.state = this.getState();
		this.getState = this.getState.bind(this);
		this._HandleChange = this._HandleChange.bind(this);
	}

	_HandleChange() {
		this.setState(this.getState());
	}

	getState() {
		return{
			usersList: AdminStore.getUsersList(),
			isLoaded: AdminStore.isLoaded(),
			};
	}

	componentDidMount(){
		AdminStore.addChangeListener(this._HandleChange)

		actions.handle('USERS_LIST_ATTEMPT');
	}

	componentWillUnmount(){
		AdminStore.removeChangeListener(this._HandleChange)
	}

	render(){
		return(
            <div className="container">
				<h2>Все пользователи</h2>
				<br /><br />
				<div className="table-responsive">
		            <table className="table table-striped">
		              <thead>
		                <tr>
		                  <th>Имя</th>
		                  <th>Email</th>
		                  <th>Телефон</th>
		                  <th>Дата регистрации</th>
		                </tr>
		              </thead>
		              {
		            	this.state.isLoaded ? this.state.usersList.map((item, index) => {
			            	return(
				              <tbody key={index}>
				                <tr>
				                  <td>{item.name}</td>
				                  <td>{item.email}</td>
				                  <td>{item.phone}</td>
				                  <td>{item.created_at}</td>
				                </tr>
				              </tbody>
				            )
				        }): <div />
					    }
		            </table>
		          </div>
			</div>
			)
	}
}