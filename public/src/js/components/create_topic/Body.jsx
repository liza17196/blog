import React, { Component } from 'react';
import ReactQuill from 'react-quill';

export default class Body extends Component {


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
		      <div>
				  <div>
				    <label htmlFor="body">Сообщение:</label>
				   <ReactQuill
				   		className="form-control col-md-6"
				   		theme="snow"
				   		modules={Body.modules}
                    	formats={Body.formats} 
				   		value={this.state.text}
                  		onChange={this.handleChange} />
				  </div>			  
				  <input type="submit" className="btn btn-default" value="Отправить" />
			    </div>
			)
	}
}
	Body.modules = {
	    toolbar: [
	      [{ 'header': [1, 2, false] }],
	      ['bold', 'italic', 'underline','strike', 'blockquote'],
	      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
	      ['link', 'image'],
	      ['clean']
	    ],
	  },

	  Body.formats = [
	    'header', 'font', 'size',
		'bold', 'italic', 'underline', 'strike', 'blockquote',
		'list', 'bullet', 'indent',
		'link', 'image', 'color',
	  ]