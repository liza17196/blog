import React, { Component } from 'react';
import App from '../App';
import Body from './Body';

export default class Create extends Component {


  constructor(props) {
    super(props)
    this.state = { editorHtml: '' }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange (html) {
  	this.setState({ editorHtml: html });
  }
	// componentDidMount(){
	// 	ToDoStore.addChangeListener(this._onChange.bind(this))
	// }

	// componentWillUnmount(){
	// 	ToDoStore.removeChangeListener(this._onChange.bind(this))
	// }


	render(){
		return(
             <div className="container">
		        <h1>Создать новую тему</h1>
				<form method="POST" action="/posts">

			<br /><br />
		  <div className="form-group">
		    <label htmlFor="title">Название темы:</label>
		    <input type="text" className="form-control col-md-6" id="title" name="title" />
		  </div>
		  
			<div className="form-group">
				<label htmlFor="section">Раздел</label>
				<select className="form-control col-md-2" id="section" name="section_id">
					
						<option value="Option's id">Option's title</option>
					
				</select>
			</div>
		  <div className="form-group">
		  <Body />
		  </div>
		</form>
	    </div>
			)
	}
}