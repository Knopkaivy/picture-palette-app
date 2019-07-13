import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import chroma from 'chroma-js';
import uuid from 'uuid';

import Navbar from './Navbar';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedPalettes from './seedPalettes';

class App extends Component {
	constructor(props) {
		super(props);
		const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
		this.state = { palettes: savedPalettes || seedPalettes };
		this.generateNewPalette = this.generateNewPalette.bind(this);
		this.savePalette = this.savePalette.bind(this);
		this.findPalette = this.findPalette.bind(this);
		this.deletePalette = this.deletePalette.bind(this);
	}
	generateNewPalette(imageURL, colors) {
		let colorPalette = {};
		colorPalette.id = uuid.v4();
		colorPalette.imageURL = imageURL;
		colorPalette.colors = colors.map((color) => {
			let arr = [
				chroma(color).brighten(1),
				chroma(color).brighten(0.5),
				color,
				chroma(color).darken(0.5),
				chroma(color).darken(1)
			];
			return {
				// shades: chroma.scale([ 'white', color ]).colors(6).slice(1).map((shade) => ({ hex: `${shade}` }))
				shades: arr.map((shade) => ({ hex: `${shade}` }))
			};
		});
		this.savePalette(colorPalette);
	}
	savePalette(newPalette) {
		this.setState({ palettes: [ ...this.state.palettes, newPalette ] }, this.syncLocalStorage);
	}
	findPalette(id) {
		let foundPalette = this.state.palettes.find((palette) => palette.id === id);
		if (foundPalette === undefined) foundPalette = this.state.palettes[0]; //if user enters nonexistent id in address bar
		return foundPalette;
	}
	deletePalette(id) {
		this.setState(
			(st) => ({ palettes: st.palettes.filter((palette) => palette.id !== id) }),
			this.syncLocalStorage
		);
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
						render={(routeProps) => (
							<PaletteList
								palettes={this.state.palettes}
								deletePalette={this.deletePalette}
								{...routeProps}
							/>
						)}
					/>
					<Route
						exact
						path='/palette/:id'
						render={(routeProps) => (
							<Palette palette={this.findPalette(routeProps.match.params.id)} {...routeProps} />
						)}
					/>
					<Route
						render={(routeProps) => (
							<PaletteList
								palettes={this.state.palettes}
								deletePalette={this.deletePalette}
								{...routeProps}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
