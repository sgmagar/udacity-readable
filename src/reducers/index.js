import { combineReducers } from "redux";

import { LIST_CATEGORIES, LIST_POSTS } from "../actions";

const categories = (state = [], action) => {
	switch (action.type) {
		case LIST_CATEGORIES:
			const { categories } = action;
			return categories;
		default:
			return state;
	}
};

const posts = (state = [], action) => {
	switch (action.type) {
		case LIST_POSTS:
			const { posts } = action;
			return posts;
		default:
			return state;
	}
};

export default combineReducers({
	categories,
	posts
});
