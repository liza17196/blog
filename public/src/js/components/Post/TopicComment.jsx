import React, { Component } from 'react';
import actions from '../../actions';
import App from '../App';
import CommentStore from '../../stores/CommentStore';
import Comment from './Create_comment';
import UserStore from '../../stores/UserStore';
import TopicStore from '../../stores/TopicStore';

export default class TopicComment extends Component {

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
			topicComment: CommentStore.getTopicComment(),
			isLoaded: CommentStore.isLoaded(),
			topic_id: this.props.topic_id,
			user_role: UserStore.getRole(),
			user_id: TopicStore.getTopicList(),
			id: '',
		}
	}

	handleDelete(index) {

		actions.handle('DELETE_COMMENT_ATTEMPT', index)
	}

	componentDidMount(){
		CommentStore.addChangeListener(this._HandleChange)

		setTimeout(() => {actions.handle('TOPIC_COMMENT_ATTEMPT', this.state.topic_id)}, 0);
	}

	componentWillUnmount(){
		CommentStore.removeChangeListener(this._HandleChange)
	}

	render() {
		return(
			<div>
				<h3>Комментарии</h3>
				<br />
				{
					this.state.isLoaded ? this.state.topicComment.map((item, index) => {
					    return(
					    	<div key={index}>
								<lu className="list-group">
									<article>
										<li className="list-group-item">
											<strong>
												<p>{item.date}</p>
												<p>Автор: &nbsp;{item.author}</p>
												<br />
												{this.state.user_role != 'user admin' ? <div /> :
													<button onClick={() => this.handleDelete(item.id)} className="btn btn-danger">Delete</button>
												}																							
											</strong>	
											<div dangerouslySetInnerHTML={{__html:item.body}} />

										</li>
									</article>
								</lu>
							</div>
						)
					}): <div />
				}
					<hr />
					<div className="card">
						<Comment topic_id={this.props.topic_id}/>
					</div>
			</div>
		)	
	}
}