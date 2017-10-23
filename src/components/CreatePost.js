import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import serializeForm from "form-serialize";
import { addPost } from "../actions";

class CreatePost extends Component {
	state = {
		submit: false
	};

	handleSubmit = e => {
		e.preventDefault();
		const values = serializeForm(e.target, { hash: true, empty: true });
		values.timestamp = Date.now();
		values.id = this.uuid();
		this.props.addPost(values);
		this.setState({ submit: true });
	};

	render() {
		const { categories } = this.props;
		const { submit } = this.state;
		if (submit) {
			return <Redirect to="/" />;
		}
		return (
			<div>
				<Link to="/">Close</Link>
				<form onSubmit={this.handleSubmit} className="post-form">
					<div className="create-contact-details">
						<input type="text" name="title" placeholder="Title" />
						<input type="text" name="body" placeholder="Body" />
						<input type="text" name="author" placeholder="Author" />
						<select name="category">
							{categories.map((category, index) => (
								<option key={index} value={category.name}>
									{category.name}
								</option>
							))}
						</select>
						<input type="hidden" name="id" />
						<input type="hidden" name="timestamp" />
						<input type="submit" value="Create Post" />
					</div>
				</form>
			</div>
		);
	}

	uuid() {
		var uuid = "",
			i,
			random;
		for (i = 0; i < 32; i++) {
			random = (Math.random() * 16) | 0;

			if (i === 8 || i === 12 || i === 16 || i === 20) {
				uuid += "-";
			}
			uuid += (i === 12
				? 4
				: i === 16 ? (random & 3) | 8 : random
			).toString(16);
		}
		return uuid;
	}
}

const mapStateToProps = ({ categories }) => {
	return {
		categories: categories
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addPost: data => dispatch(addPost(data))
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(CreatePost)
);
