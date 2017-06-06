import React, { Component } from 'react';
import actions from '../../actions';
import App from '../App';
import CommentStore from '../../stores/CommentStore';
import Comment from './Create_comment';

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
			topicComment: CommentStore.getTopicComment(),
			isLoaded: CommentStore.isLoaded(),
		}
	}

	componentDidMount(){
		CommentStore.addChangeListener(this._HandleChange)

		setTimeout(() => {actions.handle('TOPIC_COMMENT_ATTEMPT', this.props.topic_id)}, 0);
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
												


															<form method="GET" action="{{ $comment->id }}/comments/delete">
																<input type="submit" value="Удалить комментарий" className="btn btn-danger" />
															</form>




													<form method="GET" action="{{ $comment->id }}/comments/delete">
														<input type="submit" value="Удалить комментарий" className="btn btn-danger" />
													</form>
												
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
						<Comment />
					</div>
			</div>
		)	
	}
}