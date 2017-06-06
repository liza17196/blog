import React, { Component } from 'react';
import actions from '../../actions';
import App from '../App';
import BodyStore from '../../stores/BodyStore';
import CommentBody from './TopicComment';

export default class TopicBody extends Component {

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
			topicBody: BodyStore.getTopicBody(),
			isLoaded: BodyStore.isLoaded(),
		}
	}

	componentDidMount(){
		BodyStore.addChangeListener(this._HandleChange)

		actions.handle('TOPIC_BODY_ATTEMPT', this.props.params.topic_id);
	}

	componentWillUnmount(){
		BodyStore.removeChangeListener(this._HandleChange)
	}

	render(){
		if (!this.state.isLoaded)
			return <div />
		return(
	        <div className="container">
				<br />
					<h2>{this.state.topicBody.title}</h2><p style={{fontSize: 14, color: '#808080'}}>{this.state.topicBody.created_at} &nbsp; Автор: &nbsp; {this.state.topicBody.author}</p>
					<br /><br />
					<div dangerouslySetInnerHTML={{__html:this.state.topicBody.body}} />

					<form method="GET" action="#/delete">
						<input type="submit" value="Удалить тему" className="btn btn-danger" />
					</form>
					
					<hr />
					<div className='comments'>
					<CommentBody topic_id={this.props.params.topic_id}/>
					</div>	
		    	</div>
			)
	}
}