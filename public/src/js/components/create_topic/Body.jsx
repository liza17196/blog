import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import actions from '../../actions';

import CreateTopicStore from '../../stores/CreateTopicStore';

export default class Body extends Component {


  constructor(props) {
    super(props)
    this.state = this.getState();
    this.getState = this.getState.bind(this);
    this._HandleChange = this._HandleChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  getState() {
  	return{
  		text: CreateTopicStore.getTopicBody(),

  	}
  }
  
  _HandleChange () {
  	this.setState(this.getState());
  }

  handleChange(value) {

    actions.handle('TOPIC_BODY', value);
  }

	componentDidMount(){
		CreateTopicStore.addChangeListener(this._HandleChange)
	}

	componentWillUnmount(){
		CreateTopicStore.removeChangeListener(this._HandleChange)
	}


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