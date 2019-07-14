import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			copied: false
		};
		this.handleCopy = this.handleCopy.bind(this);
		this.handleShowShades = this.handleShowShades.bind(this);
		this.handleHideShades = this.handleHideShades.bind(this);
	}
	handleCopy() {
		this.setState({ copied: true }, () => {
			setTimeout(() => this.setState({ copied: false }), 1500);
		});
	}
	handleShowShades(evt) {
		evt.stopPropagation();
		this.props.selectCurrentShades(this.props.id);
	}
	handleHideShades(evt) {
		evt.stopPropagation();
		this.props.hideShadesList();
	}
	render() {
		return (
			<CopyToClipboard text={this.props.hex} onCopy={this.handleCopy}>
				{/* <div className='Color-box' style={{ backgroundColor: this.props.hex }}> */}
				<div
					className={chroma(this.props.hex).luminance() > 0.5 ? 'Color-box-dark' : 'Color-box-light'}
					style={{ backgroundColor: this.props.hex }}
				>
					<div className='Color-name'>{this.props.colorName}</div>
					<button className='Copy-button'>{this.state.copied ? 'Copied!' : 'Copy'}</button>
					{this.props.showShades && (
						<button className='Shades-button' onClick={this.handleShowShades}>
							Shades
						</button>
					)}
					{this.props.showShades &&
					this.props.currentShadesId === this.props.id &&
					this.props.showShadesList && (
						<button className='Hide-button' onClick={this.handleHideShades}>
							Hide
						</button>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}

export default ColorBox;
