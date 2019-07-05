import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { usePalette } from 'react-palette';
import Navbar from './Navbar';
import PaletteDetail from './PaletteDetail';
import PaletteList from './PaletteList';
import CreatePalette from './CreatePalette';
import seedPalettes from './seedPalettes';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { palettes: seedPalettes };
		this.generateNewPalette = this.generateNewPalette.bind(this);
	}
	generateNewPalette(imageURL) {
		console.log(imageURL);
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
