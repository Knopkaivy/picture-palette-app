import React, { Component } from 'react';
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
			newImageURL: null
		};
		this.updateImageURL = this.updateImageURL.bind(this);
		this.createNewPalette = this.createNewPalette.bind(this);
	}
	updateImageURL(evt) {
		this.setState({ newImageURL: evt.target.value });
	}
	createNewPalette() {
		this.props.createNewPalette(this.state.newImageURL, () => this.setState({ newImageURL: null }));
		this.props.handleClose();
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
