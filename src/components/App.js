import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Categories from "./Categories";
import Posts from "./Posts";
import CreatePost from "./CreatePost";
import PostDetail from "./PostDetail";
import { listCategoriesPosts } from "../actions";

class App extends Component {
	componentDidMount() {
		this.props.listCategoriesPosts();
	}

	render() {
		const { categories, posts } = this.props;
		return (
			<div>
				<Route
					exact
					path="/"
					render={() => (
						<div>
							<Categories categories={categories} />
							<Posts posts={posts} />
							<div className="create-post">
								<Link to="/create">Create Post</Link>
							</div>
						</div>
					)}
				/>

				<Route path="/create" render={() => <CreatePost />} />
				<Route path="/post/:postId" render={() => <PostDetail />} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
