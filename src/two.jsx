import React, { Component } from 'react';
import './style/style.css';

export default class Two extends Component {
	constructor() {
		super();
		this.state = {
			showSomething: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		console.log('clicked');
		this.setState({
			showSomething: !this.state.showSomething,
		});
	}
	render() {
		return (
			<div>
				<p onClick={this.handleClick} className="baz">
					{this.props.text}
				</p>
				{this.state.showSomething && <h2 class="foo">aaaaaaahhhhhhhhhhhhh!</h2>}
			</div>
		);
	}
}
