import React from 'react';

export class Button extends React.Component {
	render() {
		return (
			<button id="colorButton" className={ this.props.light ? 'light-button' : 'dark-button' } onClick={this.props.onClick}>
				Change Site Color
			</button>
		);
	}
}