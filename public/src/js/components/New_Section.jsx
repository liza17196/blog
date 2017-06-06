import React, { Component } from 'react';
import App from './App';

export default class New_Section extends Component {

	// constructor(props){
	// 	super(props);
	// 	this.state = { }

	// _onChange() {
	// 	this.setState(this.state);
	// }

	// componentDidMount(){
	// 	ToDoStore.addChangeListener(this._onChange.bind(this))
	// }

	// componentWillUnmount(){
	// 	ToDoStore.removeChangeListener(this._onChange.bind(this))
	// }

	render(){
		return(
      <div>
            <div className="container">
            <h1>Создать новый раздел</h1>
            <form method="POST" action="/sections/new_section">
              <br /><br />
              <div className="form-group">
                <label htmlFor="section">Название раздела:</label>
                <input type="text" className="form-control col-md-6" id="section" name="section" />
              </div>    
              <input type="submit" className="btn btn-default" value="Создать" />
            </form>
            </div>
      </div>
			)
	}
}