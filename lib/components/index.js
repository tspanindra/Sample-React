import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
	state = {
		answer: 42
	}

	asynFunc = () => {
		return Promise.resolve(37);
	}

	async componentDidMount() {
		this.setState({answer: await this.asynFunc()})	
	}

	render() {
		return (
			<h2> Hello Class Component  -- { this.state.answer }</h2>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);