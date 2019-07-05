import React, { Component } from 'react';
import seedPalettes from './seedPalettes';
import MiniPalette from './MiniPalette';
import './styles/PaletteList.css';

class PaletteList extends Component {
	constructor(props) {
		super(props);
		this.state = { palettes: seedPalettes };
	}
	render() {
		return (
			<div className='Palette-list-container'>
				{this.state.palettes.map((palette) => (
					<MiniPalette key={palette.id} style={{ background: `url(${palette.imageURL})` }} />
				))}
			</div>
		);
	}
}

export default PaletteList;
