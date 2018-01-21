import React from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';
import Timestamp from './Timestamp';

class App extends React.Component {
	static childContextTypes = {
		store: PropTypes.object
	};

	getChildContext() {
		return {
			store: this.props.store
		}
	}

	appState = () => {
		const { articles, searchTerm, timestamp } = this.props.store.getState();
		return { articles, searchTerm, timestamp }; 
	}

	state = this.appState();

	onStoreChange = () => {
		this.setState(this.appState);
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return (
	// 		nextState.articles !== this.state.articles ||
	// 		nextState.searchTerm !== this.state.searchTerm
	// 	);
	// }


	componentDidMount() {
		this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
		this.props.store.startClock();
	}

	componentWillUnmount() {
		this.props.store.unsubscribe(this.subscriptionId);
	}

	render() {
		let { searchTerm, articles } = this.state;
		const searchRE = new RegExp(searchTerm, 'i');
		
		if(searchTerm) {
			articles = pickBy(articles, (value) => {
				return value.title.match(searchTerm) ||
					value.body.match(searchTerm);
			})
		}

		return [
			<Timestamp key='timestamp' timestamp={this.state.timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})} />,
			<SearchBar key='searchBar'/>,
			<ArticleList 
				key='Article list'
				articles={ articles }
				/>			
		]
	}
}

export default App;