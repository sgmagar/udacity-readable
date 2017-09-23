import React, { Component } from 'react';
import { getCategories } from '../utils/api'

class App extends Component {
	
	state = {
		categories: []
	}

	componentDidMount() {
		getCategories().then(categories => {
			this.setState({categories})
		})
	}

	render() {
		console.log(this.state.categories)
		return (
			<div>Hello World</div>
		);
	}
}

export default App;
