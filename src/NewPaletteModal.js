import React, { Component } from 'react';
import * as Vibrant from 'node-vibrant';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class NewPaletteModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newImageURL:
				'https://images.unsplash.com/photo-1544938400-bdf4ea7a2e43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
			colors: []
		};
		this.updateImageURL = this.updateImageURL.bind(this);
		this.createNewPalette = this.createNewPalette.bind(this);
		this.generateColors = this.generateColors.bind(this);
		this.clearData = this.clearData.bind(this);
	}
	updateImageURL(evt) {
		this.setState({ newImageURL: evt.target.value });
	}

	createNewPalette = async () => {
		await this.generateColors();
		console.log('from createNewPalette func', this.state.colors);
		this.props.createNewPalette(this.state.newImageURL, this.state.colors);
		this.clearData();
		this.props.handleClose();
	};

	generateColors = async () => {
		let colors = [];
		let swatches = await Vibrant.from(this.state.newImageURL).getSwatches();
		for (let swatch in swatches) {
			if (swatches.hasOwnProperty(swatch) && swatches[swatch]) colors.push(swatches[swatch].getHex());
		}
		this.setState({ colors: colors });
		console.log('from generateColors func', this.state.colors);
	};
	clearData() {
		this.setState({
			newImageURL:
				'https://images.unsplash.com/photo-1544938400-bdf4ea7a2e43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
			colors: []
		});
	}
	render() {
		return (
			<Dialog open={this.props.open} onClose={this.props.handleClose} aria-labelledby='form-dialog-title'>
				<DialogTitle id='form-dialog-title'>Create New Palette</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To create new palette please enter image address in the field below.
					</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						id='imageURL'
						label='Image URL'
						type='text'
						fullWidth
						onChange={this.updateImageURL}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={this.props.handleClose} color='primary'>
						Cancel
					</Button>
					<Button color='primary' onClick={this.createNewPalette}>
						Create
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

export default NewPaletteModal;
