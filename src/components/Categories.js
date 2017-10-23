import React, { Component } from "react";

class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: ""
		};
		this.addActive = this.addActive.bind(this);
	}
	addActive(e) {
		this.setState({ active: e.target.innerText.toLowerCase() });
	}

	render() {
		const { categories } = this.props;
		const { active } = this.state;
		return (
			<ul className="nav">
				<li
					className={active ? "nav-item" : "nav-item active"}
					onClick={this.addActive}
				>
					All Posts
				</li>
				{categories.map((category, index) => (
					<li
						key={index}
						className={
							active === category.name
								? "nav-item active"
								: "nav-item"
						}
						onClick={this.addActive}
					>
						{category.name}
					</li>
				))}
			</ul>
		);
	}
}

export default Categories;
