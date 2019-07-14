import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import chroma from 'chroma-js';
import uuid from 'uuid';

import Navbar from './Navbar';
import Palette from './Palette';
import PaletteList from './PaletteList';
import Page from './Page';
import seedPalettes from './seedPalettes';
import history from './history';
import './styles/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
		this.state = { palettes: savedPalettes || seedPalettes };
		this.generateNewPalette = this.generateNewPalette.bind(this);
		this.savePalette = this.savePalette.bind(this);
		this.findPalette = this.findPalette.bind(this);
		this.deletePalette = this.deletePalette.bind(this);
		this.syncLocalStorage = this.syncLocalStorage.bind(this);
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
				shades: arr.map((shade) => ({ hex: `${shade}` }))
			};
		});
		this.savePalette(colorPalette);
		history.push(`/palette/${colorPalette.id}`);
		history.go();
	}
	savePalette = async (newPalette) => {
		await this.setState({ palettes: [ newPalette, ...this.state.palettes ] });
		this.syncLocalStorage();
	};
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
				{/* <div className='App-container'> */}
				<Navbar generateNewPalette={this.generateNewPalette} />

				<Route
					render={({ location }) => (
						<TransitionGroup>
							<CSSTransition key={location.key} classNames='page' timeout={500}>
								<Switch location={location}>
									<Route
										exact
										path='/'
										render={(routeProps) => (
											<Page>
												<PaletteList
													palettes={this.state.palettes}
													deletePalette={this.deletePalette}
													{...routeProps}
												/>
											</Page>
										)}
									/>
									<Route
										exact
										path='/palette/:id'
										render={(routeProps) => (
											<Page>
												<Palette
													palette={this.findPalette(routeProps.match.params.id)}
													{...routeProps}
												/>
											</Page>
										)}
									/>
									<Route
										render={(routeProps) => (
											<Page>
												<PaletteList
													palettes={this.state.palettes}
													deletePalette={this.deletePalette}
													{...routeProps}
												/>
											</Page>
										)}
									/>
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					)}
				/>
				{/* </div> */}
			</div>
		);
	}
}

export default App;
