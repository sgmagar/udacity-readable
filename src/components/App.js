import React, { Component } from "react";
import { connect } from "react-redux";
import Categories from "./Categories";
import Posts from "./Posts";
import { listCategoriesPosts } from "../actions";

class App extends Component {
	componentDidMount() {
		this.props.listCategoriesPosts();
	}

	render() {
		const { categories, posts } = this.props;
		return (
			<div>
				<Categories categories={categories} />
				<Posts posts={posts} />
			</div>
		);
	}
}
const mapStateToProps = ({ categories, posts }) => {
	return {
		categories: categories,
		posts: posts
	};
};

const mapDispatchToProps = dispatch => {
	return {
		listCategoriesPosts: () => dispatch(listCategoriesPosts())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
