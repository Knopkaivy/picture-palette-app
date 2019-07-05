import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Palette from './Palette';
import PaletteList from './PaletteList';
import CreatePalette from './CreatePalette';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='App'>
				<Navbar />
				<Switch>
					<Route exact path='/' render={(routeProps) => <Palette {...routeProps} />} />
					<Route exact path='/new' render={(routeProps) => <CreatePalette {...routeProps} />} />
					<Route exact path='/palette-list' render={(routeProps) => <PaletteList {...routeProps} />} />
				</Switch>
			</div>
		);
	}
}

export default App;
