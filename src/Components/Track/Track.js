import React from 'react';

export class Track extends React.Component {
	constructor(props) {
		super(props);
		this.renderAction = this.renderAction.bind(this);
	}
	renderAction() {
		let btn;
		if (this.props.isRemoval) {
			btn === <button className="Track-action">-</button>;
		} else {
			btn === <button className="Track-action">+</button>;
		}
		return btn;
	}
	render() {
		return (
			<div className="Track">
				<div className="Track-information">
					{/* <h3><!-- track name will go here --></h3> */}
					{/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
				</div>
				{/* <button className="Track-action"><!-- + or - will go here --></button> */}
				{this.renderAction}
			</div>
		);
	}
}
