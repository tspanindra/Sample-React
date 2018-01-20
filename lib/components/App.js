import React, { Component } from 'react';
import { data } from '../testData';
import DataApi from '../DataApi';
import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends Component {
	constructor() {
		super();
		this.state = {
			articles: api.getArticles(data),
			authors: api.getAuthors(data)
		}
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