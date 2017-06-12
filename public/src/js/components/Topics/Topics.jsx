import React, { Component } from 'react';
import actions from '../../actions';
import App from '../App';
import SectionStore from '../../stores/SectionStore';
import TopicStore from '../../stores/TopicStore';

import SectionsName from './SectionsName';
import Home from '../Home';

import Link from 'react-router/lib/Link';
import TopicBody from '../Post/TopicBody';
import UserStore from '../../stores/UserStore';


export default class Topics extends Component {

	constructor(props){
		super(props);
		this.state = this.getState();
		this.getState = this.getState.bind(this);
		this._HandleChange = this._HandleChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);

	}

	_HandleChange() {
		this.setState(this.getState());
	}

	getState() {
		return{
			topicList: TopicStore.getTopicList(),
			isLoaded: TopicStore.isLoaded(),
			user_role: UserStore.getRole(),
			};
	}


	handleDelete(index) {
		actions.handle('DELETE_TOPIC_ATTEMPT', index);
	}

	componentDidMount(){
		TopicStore.addChangeListener(this._HandleChange)

		setTimeout(() => {actions.handle('TAKE_TOPICS_ATTEMPT',this.props.params.section_id)}, 0);
	}

	componentWillUnmount(){
		TopicStore.removeChangeListener(this._HandleChange)
	}

	render(section){
		var section_id = this.props.params;
		return(
	            <div className="container">
	            <SectionsName  section_id={this.props.params.section_id}/>
      				<br /><br />
      				<div className="table-responsive">
		            <table className="table table-striped">
		              <thead>
		                <tr>
		                  <th>Тема</th>
		                  <th>Последнее сообщение</th>
		                  <th>Автор</th>
		                  <th>Дата</th>
		                  <th></th>
		                </tr>
		            </thead>
		            {
		            	this.state.isLoaded ? this.state.topicList.map((item, index) => {
			            	return(
				                <tbody key={index}>
				                <tr>
				                  <td><Link to={'/posts/'+item.id}>{item.name}</Link></td>
				                  <td><div dangerouslySetInnerHTML={{__html:item.last_comment}} /></td>
				                  <td>{item.author}</td>
				                  <td>{item.created_at}</td>
				                  <td>
				                  		{this.state.user_role != 'user admin' ? <div /> :
											<button onClick={()=>this.handleDelete(item.id)} className="btn btn-danger">Delete topic</button>
										}
									</td>
				                </tr>
				              </tbody>
		          			)
		          		})
		          		:
		          		<span/>
		            }

		            </table>
		          </div>
				</div>
			)
	}
}