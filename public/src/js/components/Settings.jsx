import React, { Component } from 'react';
import actions from '../actions';
import App from './App';
import SettingsStore from '../stores/SettingsStore';
import UserStore from '../stores/UserStore';



export default class Settings extends Component {

	constructor(props){
		super(props);
		this.state = this.getState();
		this.getState = this.getState.bind(this);
		this._onChange = this._onChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleFileChange = this.handleFileChange.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	getState() {
		return{
			newName: '',
			filter: '',
			id: UserStore.getUser().id,
			newAvatar: null,
			user_role: UserStore.getRole(),
		}
	}

	_onChange() {
		this.setState(this.getState());
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value 
		});

	}

	handleFileChange(event){
		this.setState({
			[event.target.name]: event.target.files[0] 
		});
	}

	handleSubmit() {
		event.preventDefault();

		let data = {
			newName: this.state.newName,
			id: UserStore.getUser().id
		};

		actions.handle('CHANGE_NICKNAME_ATTEMPT', data);
	}

	handleUpdate() {
		event.preventDefault();

		let data = {
			newAvatar: this.state.newAvatar,
			id: UserStore.getUser().id
		};

		var formData = new FormData();
		formData.append('newAvatar', this.state.newAvatar); 
		formData.append('id', UserStore.getUser().id);

		actions.handle('UPDATE_AVATAR_ATTEMPT', formData);
	}

	handleDelete() {
		actions.handle('DELETE_USER_ATTEMPT', UserStore.getUser().id);
	}

	handleFilter() {
		let data = {
			filter: this.state.filter,
		};
		actions.handle('ADD_FILTER_ATTEMPT', data);
	}

	componentDidMount(){
		SettingsStore.addChangeListener(this._onChange.bind(this));
		setTimeout(()=>{actions.handle('PROFILE_ID', UserStore.getUser().id)}, 0);
	}

	componentWillUnmount(){
		SettingsStore.removeChangeListener(this._onChange.bind(this))
	}

	render(){
		console.log(this.state.filter, 'filter');
		return(
		      <div>
					<div className="container">
		            <h1 style={{marginLeft: -20}}>Настройки</h1>
					<br /><br />
						<div className="row">
						<div className="col-md-3 col-md-offset-1">

									<label htmlFor="update" style={{fontSize: 20}}>Изменить имя:</label>
									<input 
											type="text" 
										   	name="newName" 
										   	id="update" 
										   	value={this.state.newName} 
										   	onChange={this.handleChange}
									/><br />
									<button 
											className="btn btn-sm btn-default" 
											style={{marginTop: 15, padding:'5px 10px', fontSize: 15}}
											onClick={this.handleSubmit}
									>Send</button>
								<br />

									<label 
											htmlFor="newAvatar" 
											style={{fontSize: 20}}
									>Сменить аватарку:</label>
									<input 
											id="newAvatar" 
											type="file" 
											name="newAvatar"
											value={this.state.newAvatar}
				                    		onChange={this.handleFileChange}
									/>
				                    <button 
				                    		className="btn btn-sm btn-default" 
				                    		style={{marginTop: 15, padding:'5px 10px', fontSize: 15}}
				                    		onClick={this.handleUpdate}
				                    >Change</button>
								<br />

									<label 
											htmlFor="delete" 
											style={{fontSize: 20}}
									>Удалить страницу:</label><br />
									<button 
											id="delete" 
											className="btn btn-sm btn-default" 
											style={{padding:'5px 10px', fontSize: 15}}
											onClick={this.handleDelete}
									>Delete</button>	
								<br />
									{this.state.user_role != 'user admin' ? <div /> :
										<div>
											<label 
													htmlFor="filter" 
													style={{fontSize: 20}}
											>Фильтр слов:</label>
											<input 
													type="text" 
													name="filter" 
													id="filter"
													value={this.state.filter} 
												   	onChange={this.handleChange} 
											/><br />
											<button 
													className="btn btn-sm btn-default" 
													style={{marginTop: 15, padding:'5px 10px', fontSize: 15}}
													onClick={this.handleFilter}
											>Send</button>
										</div>
									}

							</div>
						</div>
					</div>
		      </div>
			)
	}
}