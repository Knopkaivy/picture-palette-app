import React, { Component } from 'react';

import MiniPalette from './MiniPalette';
import './styles/PaletteList.css';

class PaletteList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='Palette-list-container'>
				{this.props.palettes.map((palette) => (
					<MiniPalette key={palette.id} imageURL={palette.imageURL} colors={palette.colors} />
				))}
			</div>
		);
	}
}

export default PaletteList;
