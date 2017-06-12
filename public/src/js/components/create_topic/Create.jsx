import React, { Component } from 'react';
import actions from '../../actions';
import App from '../App';
import Body from './Body';
import Option from './Option';

import UserStore from '../../stores/UserStore';
import CreateTopicStore from '../../stores/CreateTopicStore';

export default class CreateTopic extends Component {


  constructor(props) {
    super(props);
    this.state = this.getState();
    this.getState = this.getState.bind(this);
    this._HandleChange = this._HandleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  getState() {
  	return {
  		title: CreateTopicStore.getTopicTitle(),
  	}
  }

  _HandleChange () {
  	this.setState(this.getState());
  }

  handleChange(event){

		const target = event.target;
		const value = target.value;

		actions.handle('TOPIC_TITLE', value);
	}

	handleSubmit() {
		event.preventDefault();
		actions.handle('CREATE_TOPIC_ATTEMPT');

	}

	componentDidMount(){
		CreateTopicStore.addChangeListener(this._HandleChange)

		setTimeout(()=>{actions.handle('USER_ID', UserStore.getUser().id)}, 0);
	}

	componentWillUnmount(){
		CreateTopicStore.removeChangeListener(this._HandleChange)
	}

	render(){
		return(
             <div className="container">
		        <h1>Создать новую тему</h1>

			<br /><br />
		  <div className="form-group">
		    <label htmlFor="title">Название темы:</label>
		    <input type="text" 
				    className="form-control col-md-6" 
				    id="title" 
				    name="title"
				    value={this.state.title}
					onChange={this.handleChange} 
			/>
		  </div>
		  
			<div className="form-group">
				<Option />
			</div>
		  <div className="form-group">
		  <Body />
		   <br />			  
			<button
				className="btn btn-default" 
				onClick={() => this.handleSubmit()}>Отправить</button>
		  </div>
	    </div>
			)
	}
}