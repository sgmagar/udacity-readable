import React from "react";

const Post = props => {
	const { post } = props;
	return (
		<li className="card">
			<div className="title">{post.title}</div>
			<div className="author">By, {post.author}</div>
			<div className="content">{post.body}</div>
			<div className="card-footer">
				<span className="label">{post.category}</span>
				<span className="vote">{post.voteScore}</span>
			</div>
		</li>
	);
};

export default Post;
