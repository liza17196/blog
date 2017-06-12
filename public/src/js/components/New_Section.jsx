import React, { Component } from 'react';
import actions from '../actions';
import App from './App';

import NewSectionStore from '../stores/NewSectionStore';

export default class New_Section extends Component {


  constructor(props) {
    super(props);
    this.state = this.getState();
    this.getState = this.getState.bind(this);
    this._HandleChange = this._HandleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  getState() {
  	return {
  		section: '',
  	}
  }

  _HandleChange () {
  	this.setState(this.getState());
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
		let data = {section: this.state.section};

		actions.handle('NEW_SECTION_ATTEMPT', data);

	}

	componentDidMount(){
		NewSectionStore.addChangeListener(this._HandleChange)
	}

	componentWillUnmount(){
		NewSectionStore.removeChangeListener(this._HandleChange)
	}

	render(){
		console.log(this.state.section);
		return(
      <div>
            <div className="container">
            <h1>Создать новый раздел</h1>
              <br /><br />
              <div className="form-group">
                <label htmlFor="section">Название раздела:</label>
                <input type="text" 
				    className="form-control col-md-6" 
				    id="section" 
				    name="section"
				    value={this.state.title}
					onChange={this.handleChange} 
			/>
              </div>    
              <button
				className="btn btn-default" 
				value="Отправить"
				onClick={() => this.handleSubmit()}>Send</button>
            </div>
      </div>
			)
	}
}