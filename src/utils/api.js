const headers = { headers: { Authorization: "whatever-you-want" } };
const base_url = "http://localhost:3001";

export const getCategories = () => {
	return fetch(`${base_url}/categories`, headers).then(res => res.json());
};

export const getPosts = () => {
	return fetch(`${base_url}/posts`, headers).then(res => res.json());
};

export const createPost = data => {
	return fetch(`${base_url}/posts`, {
		method: "POST",
		headers: headers.headers,
		body: data
	}).then(res => res.json());
};

export const deletePost = id => {
	return fetch(`${base_url}/posts/${id}`, {
		method: "DELETE",
		headers: headers.headers
	});
};
