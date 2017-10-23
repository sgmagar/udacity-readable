import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PostInfo from "./PostInfo";

const PostDetail = props => {
	const { posts } = props;
	const postId = props.match.params.postId;
	const post = posts.filter(post => post.id === postId)[0];
	return <PostInfo post={post} />;
};

const mapStateToProps = ({ posts }) => {
	return {
		posts: posts
	};
};

const mapDispatchToProps = dispatch => {
	return {};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(PostDetail)
);
