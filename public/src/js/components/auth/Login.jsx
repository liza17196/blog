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
	}

	_onChange() {
		this.setState(this.getState());
	}

	getState() {
		return {
				login:UserStore.getLogin(),
				email: '',
				password: '',
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

	handleSubmit(event) {
	    event.preventDefault();
		let data = {
			email: this.state.email,
			password: this.state.password
		}
		var formData = new FormData();
			formData.append('email', this.state.email);
			formData.append('password', this.state.password);

	    actions.handle('LOGIN_ATTEMPT', formData);
	}

	componentDidMount(){
		UserStore.addChangeListener(this._onChange)

	}

	componentWillUnmount(){
		UserStore.removeChangeListener(this._onChange)
	}

	render(){
		console.log(this.state.formData, 'lalala')
		return(
            <div className="container">
			    <div className="row">
			        <div className="col-md-8 col-md-offset-2">
			            <div className="panel panel-default">       
			                    <h2>Login</h2>
			                <br />
			                <div className="panel-body">
			                    <form className="form-horizontal" onSubmit={this.handleSubmit}>

			                        <div className="form-group">
			                            <label htmlFor="email" className="col-md-4 control-label">E-Mail</label>

			                            <div className="col-md-6">
			                                <input 
			                                	id="email" 
			                                	type="email" 
			                                	className="form-control" 
			                                	name="email" 
			                                	value={this.state.email}
												onChange={this.handleChange} />
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
												onChange={this.handleChange} />
			                            </div>
			                        </div>
			                        <br />
			                        <div className="form-group">
			                            <div className="col-md-6 col-md-offset-4">
			                                <input 
			                                	type="submit" 
			                                	className="btn btn-default" 
			                                	value="Login" />
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