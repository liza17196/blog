import React, { Component } from 'react';
import actions from '../../actions';
import App from '../App';
import ProfileTableStore from '../../stores/ProfileTableStore';

import Link from 'react-router/lib/Link';

export default class ProfileTable extends Component {

	constructor(props){
		super(props);
		this.state = this.getState();
		this.getState = this.getState.bind(this);
		this._HandleChange = this._HandleChange.bind(this);
	}

	getState() {
		return{
			profileTable: ProfileTableStore.getProfileTable(),
			isLoaded: ProfileTableStore.isLoaded(),
		}
	}

	_HandleChange() {
		this.setState(this.getState);
	}

	componentDidMount(){
		ProfileTableStore.addChangeListener(this._HandleChange.bind(this))
		setTimeout(() => {actions.handle('PROFILE_TABLE_ATTEMPT', this.props.user_id), 0});
	}

	componentWillUnmount(){
		ProfileTableStore.removeChangeListener(this._HandleChange.bind(this))
	}


	render(){
		console.log(this.state.profileTable);
		console.log(this.state.isLoaded);
		return(
		      <div>     
		            <table className="table table-striped">
		              <thead>
		                <tr>
		                  <th>Тема</th>
		                  <th>Раздел</th>
		                  <th>Когда создана</th>
		                  <th>Последнее обновление</th>
		                </tr>
		              </thead>
		              {
		              	this.state.isLoaded ? this.state.profileTable.map((item, index) => {
		              		return(
				              <tbody key={index}>
				                <tr>
				                  <td><Link to={'/posts/'+item.id}>{item.title}</Link></td>
				                  <td>{item.section}</td>
				                  <td>{item.created_at}</td>
				                  <td>{item.updated_at}</td>
				                </tr>
				              </tbody>
				            )
				            }) : <div />
			          }
		            </table>
		      </div>
			)
	}
}