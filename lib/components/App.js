import React, { Component } from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';

class App extends Component {
	static childContextTypes = {
		store: PropTypes.object
	};

	getChildContext() {
		return {
			store: this.props.store
		}
	}

	state = this.props.store.getState();

	onStoreChange = () => {
		this.setState(this.props.store.getState());
	}

	componentDidMount() {
		this.subscriptionId = this.props.store.subscribe(this.onStoreChange)
	}

	componentWillUnmount() {
		this.props.store.unsubscribe(this.subscriptionId);
	}

	render() {
		let { searchTerm, articles } = this.state;
		if(searchTerm) {
			articles = pickBy(articles, (value) => {
				return value.title.match(searchTerm) ||
					value.body.match(searchTerm);
			})
		}

		return [
			<SearchBar key='searchBar' doSearch={this.props.store.setSearchTerm}/>,
			<ArticleList 
				key='Article list'
				articles={ articles }
				store ={ this.props.store }/>			
		]
	}
}

export default App;