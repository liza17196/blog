import React, { Component } from 'react';
import actions from '../../actions';
import App from '../App';
import UserStore from '../../stores/UserStore';

export default class Login extends Component {

	constructor(props){
		super(props);
		this.state = this.getState();
		this.getState = this.getState.bind(this);
		this._onChange = this._onChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFileChange = this.handleFileChange.bind(this);
	}

	_onChange() {
		this.setState(this.getState());
	}

	getState() {
		return {
			register:UserStore.getUser(),
			name: '',
			email: '',
			phone: '',
			password: '',
			password_confirmation: '',
			avatar: null,
		}
	}

	handleChange(event){

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

	handleSubmit(event) {
	    event.preventDefault();
		let data = {
			name: this.state.name,
			email: this.state.email,
			phone: this.state.phone,
			password: this.state.password,
			password_confirmation: this.state.password_confirmation,
			avatar: this.state.avatar
		}
		var formData = new FormData();
	    	formData.append('name', this.state.name);
			formData.append('email', this.state.email);
			formData.append('phone', this.state.phone);
			formData.append('password', this.state.password);
			formData.append('password_confirmation', this.state.password_confirmation);
			formData.append('avatar', this.state.avatar);

	    actions.handle('REGISTER_ATTEMPT', formData);
	}

	componentDidMount(){
		UserStore.addChangeListener(this._onChange)

	}

	componentWillUnmount(){
		UserStore.removeChangeListener(this._onChange)
	}

	render(){
		return(
            <div className="container">
			    <div className="row">
			        <div className="col-md-8 col-md-offset-2">
			            <div className="panel panel-default">       
			                <h2>Register</h2>
			                <br />
			                <div className="panel-body">
			                    <form className="form-horizontal" onSubmit={this.handleSubmit}>

			                        <div className="form-group">
			                            <label htmlFor="name" className="col-md-4 control-label">Name</label>
			                            <div className="col-md-6">
			                                <input 
			                                	id="name" 
			                                	type="text" 
			                                	className="form-control" 
			                                	name="name" 
			                                	value={this.state.name}
												onChange={this.handleChange}/>
			                            </div>
			                        </div>
			                        <div className="form-group">
			                            <label htmlFor="email" className="col-md-4 control-label">E-mail</label>
			                            <div className="col-md-6">
			                                <input 
			                                	id="email" 
			                                	type="email" 
			                                	className="form-control"
			                                	 name="email" 
			                                	 pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}" 
			                                	 placeholder="yourmail@mail.ru" 
			                                	 value={this.state.email}
												onChange={this.handleChange}/>
			                            </div>
			                        </div>
			                        <div className="form-group">
			                            <label htmlFor="phone" className="col-md-4 control-label">Phone</label>
			                            <div className="col-md-6">
			                                <input 
			                                	id="phone" 
			                                	type="phone" 
			                                	className="form-control" 
			                                	name="phone" 
			                                	pattern="^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$" 
			                                	placeholder="+38(012)345-67-89" 
			                                	value={this.state.phone}
												onChange={this.handleChange}/>
			                            </div>
			                        </div>
			                        
			                        <div className="form-group">
			                            <label htmlFor="password" className="col-md-4 control-label">Password</label>
			                            <div className="col-md-6">
			                                <input 
			                                	id="password" 
			                                	type="password" 
			                                	className="form-control" 
			                                	name="password" 
			                                	value={this.state.password}
												onChange={this.handleChange}/>
			                            </div>
			                        </div>
			                        <div className="form-group">
			                            <label htmlFor="password_confirm" className="col-md-4 control-label">Confirm Password</label>
			                            <div className="col-md-6">
			                                <input 
			                                	id="password_confirm" 
			                                	type="password" 
			                                	className="form-control" 
			                                	name="password_confirmation" 
			                                	value={this.state.password_confirmation}
												onChange={this.handleChange}/>
			                            </div>
			                        </div>
			                        <div className="form-group">
			                            <label htmlFor="password_confirm" className="col-md-4 control-label">Your avatar</label>
			                            <div className="col-md-6">
			                                <input 
			                                	id="avatar" 
			                                	type="file" 
			                                	className="form-control" 
			                                	name="avatar" 
			                                	value={this.state.avatar}
												onChange={this.handleFileChange}/>
			                            </div>
			                        </div>
			                        <div className="form-group">
			                            <div className="col-md-6 col-md-offset-4">
			                            <br />
			                                <input 
			                                	type="submit" 
			                                	className="btn btn-default" 
			                                	value="Register" />
			                            </div>
			                        </div>    
				                </form>
				            </div>
				        </div>
				    </div>
				</div>        
		    </div>
			)
	}
}