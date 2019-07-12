import React, { Component } from 'react';

import MiniPalette from './MiniPalette';
import './styles/PaletteList.css';

class PaletteList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.openPalette = this.openPalette.bind(this);
	}
	openPalette(id) {
		this.props.history.push(`/palette/${id}`);
	}
	render() {
		return (
			<div className='Palette-list-container'>
				{this.props.palettes.map((palette) => (
					<MiniPalette
						key={palette.id}
						id={palette.id}
						imageURL={palette.imageURL}
						colors={palette.colors}
						openPalette={this.openPalette}
					/>
				))}
			</div>
		);
	}
}

export default PaletteList;
