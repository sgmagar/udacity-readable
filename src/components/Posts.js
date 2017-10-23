import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
	posts = posts.filter(post => post.deleted === false);
	return (
		<ul>{posts.map((post, index) => <Post key={index} post={post} />)}</ul>
	);
};

export default Posts;
