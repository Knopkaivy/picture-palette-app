import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import chroma from 'chroma-js';
import uuid from 'uuid';

import Navbar from './Navbar';
import PaletteDetail from './PaletteDetail';
import PaletteList from './PaletteList';
import CreatePalette from './CreatePalette';
import seedPalettes from './seedPalettes';

class App extends Component {
	constructor(props) {
		super(props);
		const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
		this.state = { palettes: savedPalettes || seedPalettes };
		this.generateNewPalette = this.generateNewPalette.bind(this);
		this.savePalette = this.savePalette.bind(this);
	}
	generateNewPalette(imageURL, colors) {
		let colorPalette = {};
		colorPalette.id = uuid.v4();
		colorPalette.imageURL = imageURL;
		colorPalette.colors = colors.map((color) => ({
			shades: chroma.scale([ 'white', color ]).colors(6).slice(1).map((shade) => ({ hex: `${shade}` }))
		}));
		this.savePalette(colorPalette);
	}
	savePalette(newPalette) {
		console.log('saving new palette now!');
		console.log('newPalette is ', newPalette);
		console.log(newPalette.colors[0].shades[2].hex);
		this.setState({ palettes: [ ...this.state.palettes, newPalette ] }, this.syncLocalStorage);
	}

	syncLocalStorage() {
		//save palettes to local storage
		window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
	}
	render() {
		return (
			<div className='App'>
				<Navbar generateNewPalette={this.generateNewPalette} />

				<Switch>
					<Route
						exact
						path='/'
						render={(routeProps) => <PaletteList palettes={this.state.palettes} {...routeProps} />}
					/>
					<Route exact path='/new' render={(routeProps) => <CreatePalette {...routeProps} />} />
					<Route exact path='/palette' render={(routeProps) => <PaletteDetail {...routeProps} />} />
				</Switch>
			</div>
		);
	}
}

export default App;
