import { getCategories, getPosts } from "../utils/api";
export const LIST_CATEGORIES = "LIST_CATEGORIES";
export const LIST_POSTS = "LIST_POSTS";

export function listCategories() {
	return dispatch => {
		getCategories().then(response => {
			dispatch({
				type: LIST_CATEGORIES,
				categories: response.categories
			});
		});
	};
}

export function listPosts() {
	return dispatch => {
		getPosts().then(response => {
			dispatch({
				type: LIST_POSTS,
				posts: response
			});
		});
	};
}

export function listCategoriesPosts() {
	return dispatch => {
		dispatch(listCategories());
		dispatch(listPosts());
	};
}
