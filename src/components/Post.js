import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Post = props => {
	const { post } = props;
	return (
		<li className="card">
			<Link to={`/post/${post.id}`}>
				<div className="title">{post.title}</div>
				<div className="author">By, {post.author}</div>
				<div className="content">{post.body}</div>
				<div className="card-footer">
					<span className="label">{post.category}</span>
					<span className="vote">{post.voteScore}</span>
				</div>
			</Link>
		</li>
	);
};
const mapStateToProps = () => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
