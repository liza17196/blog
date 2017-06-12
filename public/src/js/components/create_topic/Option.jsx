import React, { Component } from 'react';
import actions from '../../actions';
import App from '../App';

import CreateTopicStore from '../../stores/CreateTopicStore';

export default class Create extends Component {


  constructor(props) {
    super(props);
    this.state = this.getState();
    this.getState = this.getState.bind(this);
    this._HandleChange = this._HandleChange.bind(this);
    this.handleOption = this.handleOption.bind(this);
  }
  
  getState() {
  	return {
  		optionsTitle: CreateTopicStore.getOption(),
  	};
  }

  _HandleChange () {
  	this.setState(this.getState());
  }

  handleOption(event) {
  		this.setState({value: event.target.value});

  		var data = event.target.value;

  		actions.handle('TOPIC_OPTION', data);
  	}

	componentDidMount(){
		CreateTopicStore.addChangeListener(this._HandleChange.bind(this))

		setTimeout(()=>{actions.handle('OPTION_ATTEMPT')}, 0);
	}

	componentWillUnmount(){
		CreateTopicStore.removeChangeListener(this._HandleChange.bind(this))
	}

	render(){
		return(  
			<div>
				<label htmlFor="section">Раздел</label>
				<select
					className="form-control col-md-2"
					id="section"
					name="section_id"
					onChange={this.handleOption}
				>
					{
						this.state.optionsTitle.length > 0 ? this.state.optionsTitle.map((item, index) => {
							return(
								<option onClick={this.handleOption.bind(this,index)} value={item.id} key={index}>{item.section}</option>
							)
						}) :
							<option value="#" disabled>None</option>
						}					
				</select>
			</div>
			)
	}
}