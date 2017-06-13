import React, { Component } from 'react';
import actions from '../../actions';
import App from '../App';
import SectionNameStore from '../../stores/SectionNameStore';

import Home from '../Home';


export default class SectionsName extends Component {

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
			sectionName: SectionNameStore.getSectionName(),
			isLoaded: SectionNameStore.isLoaded(),
		}
	}

	componentDidMount(){
		SectionNameStore.addChangeListener(this._HandleChange.bind(this))
		// debugger;
		setTimeout(()=>{actions.handle('SECTION_NAME_ATTEMPT', this.props.section_id)}, 0);
	}

	componentWillUnmount(){
		SectionNameStore.removeChangeListener(this._HandleChange.bind(this))
	}

	render(){
		return(
		      <div>
		            <h1>{this.state.sectionName.section}</h1>
		      </div>
			)
	}
}