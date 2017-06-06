import React, { Component } from 'react';
import actions from '../actions';
import App from './App';
import SectionStore from '../stores/SectionStore';

import Link from 'react-router/lib/Link';
import Topics from './Topics/Topics';

export default class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
			sectionList: SectionStore.getSectionList()
		};
	}

	_HandleChange() {
		this.setState(this.state);
	}

	componentDidMount(){
		SectionStore.addChangeListener(this._HandleChange.bind(this))
		actions.handle('TAKE_SECTIONS_ATTEMPT');
	}

	componentWillUnmount(){
		SectionStore.removeChangeListener(this._HandleChange.bind(this))
	}

	render(){
			return(
				<div className="container">
					<br />
			          <h1>Blog</h1>
			          <br /><br />
			          <div className="table-responsive">
			            <table className="table table-striped">
			              <thead>
			                <tr>
			                  <th>Раздел</th>
			                  <th>Последняя тема</th>
			                  <th>Автор</th>
			                  <th>Дата</th>
			                </tr>
			              </thead>
			            {
			            	this.state.sectionList.length > 0 ? this.state.sectionList[0].map((item, index) => {
				            	return(
					              <tbody key={index}>
					                <tr>
					                  <td><Link to={'/sections/'+item.id}>{item.name}</Link></td>
					                  <td>{item.last_topic}</td>
					                  <td>{item.last_topic_author}</td>
					                  <td>{item.created_at}</td>
					                </tr>
					              </tbody>
								)
				            })
				            : 
							<span />
			            }
			            </table>
			          </div>
			    </div>
			)
	}
}