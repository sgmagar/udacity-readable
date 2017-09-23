import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
	return (
		<ul>{posts.map((post, index) => <Post key={index} post={post} />)}</ul>
	);
};

export default Posts;
