import React, { Component } from 'react';
import ReactQuill from 'react-quill';

export default class Comment extends Component {


  constructor(props) {
    super(props)
    this.state = { editorHtml: '' }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange (html) {
  	this.setState({ editorHtml: text });
  }
	// componentDidMount(){
	// 	ToDoStore.addChangeListener(this._onChange.bind(this))
	// }

	// componentWillUnmount(){
	// 	ToDoStore.removeChangeListener(this._onChange.bind(this))
	// }


	render(){
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
					   		value={this.state.text}
	                  		onChange={this.handleChange} 
	                  		placeholder="Оставить комментарий"
	                  		/>
					  </div> 
					  <input type="submit" className="btn btn-default" value="Опубликовать" />
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