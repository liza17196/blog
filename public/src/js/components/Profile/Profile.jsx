import React, { Component } from 'react';
import actions from '../../actions';
import App from '../App';
import ProfileStore from '../../stores/ProfileStore';
import UserStore from '../../stores/UserStore';
import ProfileTable from './ProfileTable';


export default class Profile extends Component {

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
		return {
			profileInfo: ProfileStore.getProfileInfo(),
		}
	}

	componentDidMount(){
		ProfileStore.addChangeListener(this._HandleChange);

		var formData = new FormData();
	    	formData.append('id', UserStore.getUser().id);

		setTimeout(() => {actions.handle('PROFILE_INFO_ATTEMPT', UserStore.getUser().id)}, 0);
	}

	componentWillUnmount(){
		ProfileStore.removeChangeListener(this._HandleChange)
	}


	render(){
		console.log(this.state.userId, 'users id');
		return(
		      <div>
		            <div className="container">
						<div className="row">
							<img style={{width: 150, height: 150, float: 'left', Alt: 'Avatar', margin: '0px 15px'}} src={UserStore.getUser().avatar}/>
							<h1>{UserStore.getUser().name}</h1>
						</div>
						<br />
						<h2>Мои темы</h2>
						<br />
						<div className="table-responsive">
				            	<ProfileTable user_id={UserStore.getUser().id}/>
				          </div>
					</div>
		      </div>
			)
	}
}