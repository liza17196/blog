import React, { Component } from 'react';
import App from './App';

export default class Setting extends Component {

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
		            <h1 style={{marginLeft: -20}}>Настройки</h1>
					<br /><br />
						<div className="row">
						<div className="col-md-3 col-md-offset-1">
								<form method="POST" action="/profile/{{ Auth::user()->id }}/update">
									<input type="hidden" name="_token" />
									<label htmlFor="update" style={{fontSize: 20}}>Изменить имя:</label>
									<input type="text" name="new_nickname" id="update" />
									<input type="submit" value="Отправить" className="btn btn-sm btn-default" style={{marginTop: 15, padding:'5px 10px', fontSize: 15}} />
								</form>
								<br />
								<form encType="multipart/form-data" method="POST" action="/profile/new_avatar">
									<input type="hidden" name="_token" />
									<label htmlFor="new-avatar" style={{fontSize: 20}}>Сменить аватарку:</label>
									<input id="new-avatar" type="file" name="new-avatar" />
				                    <input type="submit" value="Отправить" className="btn btn-sm btn-default" style={{marginTop: 15, padding:'5px 10px', fontSize: 15}} />
								</form>
								<br />

									<form method="GET" action="/profile/{{ Auth::user()->id }}/delete" className="for owner">
										<label htmlFor="delete" style={{fontSize: 20}}>Удалить страницу:</label><br />
										<input type="submit" id="delete" value="delete" className="btn btn-sm btn-default" style={{padding:'5px 10px', fontSize: 15}} />
									</form>
									<br />


									<form method="POST" action="/profile/{{ Auth::user()->id }}/filter" className="for admin">
										<input type="hidden" name="_token" />
										<label htmlFor="filter" style={{fontSize: 20}}>Фильтр слов:</label>
										<input type="text" name="filter" id="filter" />
										<input type="submit" value="Отправить" className="btn btn-sm btn-default" style={{marginTop: 15, padding:'5px 10px', fontSize: 15}} />
									</form>

							</div>
						</div>
					</div>
		      </div>
			)
	}
}