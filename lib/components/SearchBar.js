import React, { Component } from 'react'
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

class SearchBar extends Component {
	state = {
		searchTerm: ''
	}

	doSearch = debounce(() => {
		this.props.store.setSearchTerm(this.state.searchTerm);
	}, 300);

	handleChange = (event) => {
		this.setState({searchTerm: event.target.value}, () => {
			this.doSearch();
		});
	}

  render() {
    return (
     <input
		 		ref ={(input) => this.seachInput = input}
        type="search"
				placeholder="Enter search term"
				value={this.state.searchTerm}
        onChange={this.handleChange}
        />  
    )
  }
}

export default storeProvider()(SearchBar);