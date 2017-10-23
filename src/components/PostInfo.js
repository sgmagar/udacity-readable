import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { removePost } from "../actions";

const PostInfo = props => {
	const { post } = props;
	console.log(post);
	return (
		<div>
			{post ? (
				<div className="post">
					<Link to="/">Back to Home</Link>
					<h1 className="text-center">{post.title}</h1>
					<div className="author">
						{post.timestamp}, By, {post.author} vote:{" "}
						{post.voteScore}
						<div className="float-right">
							<span className="post-action">upvote</span>
							<span className="post-action">downvote</span>
							<span className="post-action">edit</span>
							<span className="post-action">delete</span>
						</div>
					</div>
					<div className="content">{post.body}</div>
				</div>
			) : (
				""
			)}
		</div>
	);
};
const mapStateToProps = () => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {
		// removePost: id => dispatch(removePost(id))
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(PostInfo)
);
