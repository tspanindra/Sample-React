import React, { Component } from 'react';
import { data } from '../testData';
import DataApi from 'state-api';
import ArticleList from './ArticleList';

class App extends Component {
	state = {
		articles: this.props.initialData.articles,
		authors: this.props.initialData.authors
	}
	
	async componentDidMount() {
		fetch('/data').
		then( response => {
			if(response.ok) {
				return response.json();			
			}
		}).then(resp => {
			console.log(resp)
			const api = new DataApi(resp);
			
			this.setState({
				articles: api.getArticles(data),
				authors: api.getAuthors(data)	
			});
		});
	
	}

	articleActions = {
		lookupAuthor: authorId => this.state.authors[authorId]
	};

	render() {
		return (
			<ArticleList 
				articles={ this.state.articles }
				articleActions={ this.articleActions }/>			
		);
	}
}

export default App;