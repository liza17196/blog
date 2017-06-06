import React, { Component } from 'react';
import App from './App';

export default class Profile extends Component {

	// constructor(props){
	// 	super(props);
	// 	this.state = { }

	// _onChange() {
	// 	this.setState(this.state);
	// }

	// componentDidMount(){
	// 	ToDoStore.addChangeListener(this._onChange.bind(this))
	// }

	// componentWillUnmount(){
	// 	ToDoStore.removeChangeListener(this._onChange.bind(this))
	// }

	render(){
		return(
		      <div>
		            <div className="container">
						<div className="row">
							<img style={{width: 150, height: 150, float: 'left', Alt: 'Avatar', margin: '0px 15px'}} src={{uri: '#'}}/>
							<h1>User's name</h1>
						</div>
						<br />
						<h2>Мои темы</h2>
						<br />
						<div className="table-responsive">
				            <table className="table table-striped">
				              <thead>
				                <tr>
				                  <th>Тема</th>
				                  <th>Раздел</th>
				                  <th>Когда создана</th>
				                  <th>Последнее обновление</th>
				                </tr>
				              </thead>
				              <tbody key="root">
				                <tr>
				                  <td><a href="#">---</a></td>
				                  <td>---</td>
				                  <td>---</td>
				                  <td>---</td>
				                </tr>
				              </tbody>
				            </table>
				          </div>
					</div>
		      </div>
			)
	}
}