import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import actions from '../../actions';
import App from '../App';

import UserStore from '../../stores/UserStore';
import CreateCommentStore from '../../stores/CreateCommentStore';

export default class Create_comment extends Component {


  constructor(props) {
    super(props)
    this.state = this.getState()
    this.getState = this.getState.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this._HandleChange = this._HandleChange.bind(this)
  }

  getState() {
  	return{
  		body: '',
  		user_id: UserStore.getUser().id,
  		topic_id: this.props.topic_id,
  	}
  }

  _HandleChange () {
  	this.setState(this.getState());
  }

  handleChange(value) {
  	this.setState({body: value});
  }

  handleSubmit(event) {	    
  	event.preventDefault();
  	let data = {
  		body: this.state.body,
  		user_id: this.state.user_id,
  		topic_id: this.state.topic_id,
  	};

  	actions.handle('CREATE_COMMENT_ATTEMPT', data);
  }

	componentDidMount(){
		CreateCommentStore.addChangeListener(this._HandleChange.bind(this))
	}

	componentWillUnmount(){
		CreateCommentStore.removeChangeListener(this._HandleChange.bind(this))
	}


	render(){
		console.log(this.state.body, 'body');
		console.log(UserStore.getUser().id, 'iser id');
		console.log(this.props.topic_id, 'props');
		return(
			<div className="card-block">
								
				<form method="POST" action="/posts/{{ $topic->id }}/comments">
					
					<div className="form-group">
						<input placeholder="Вам необходимо зарегестрироваться что бы оставить комментарии" style={{ width: '100%', height: 50, }}
	                  		disabled
	                  		/>
					</div>
				</form>
			
				<form method="POST" action="/posts/{{ $topic->id }}/comments">
					
					<div className="form-group">
					   <ReactQuill
					   		
					   		theme="snow"
					   		modules={Comment.modules}
	                    	formats={Comment.formats} 
					   		value={this.state.body}
	                  		onChange={this.handleChange} 
	                  		placeholder="Оставить комментарий"
	                  		/>
					  </div> 
					  <button onClick={this.handleSubmit} className="btn btn-default" value="Опубликовать">Publish</button>
				</form>
			</div>

		 
			)
	}
}
	Comment.modules = {
	    toolbar: [
	      [{ 'header': [1, 2, false] }],
	      ['bold', 'italic', 'underline','strike', 'blockquote'],
	      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
	      ['link', 'image'],
	      ['clean']
	    ],
	  },

	  Comment.formats = [
	    'header', 'font', 'size',
		'bold', 'italic', 'underline', 'strike', 'blockquote',
		'list', 'bullet', 'indent',
		'link', 'image', 'color',
	  ]