import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';

import MiniPalette from './MiniPalette';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import './styles/PaletteList.css';

class PaletteList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openDeleteDialog: false,
			deletingId: ''
		};
		this.openPalette = this.openPalette.bind(this);
		this.openDialog = this.openDialog.bind(this);
		this.closeDialog = this.closeDialog.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	openPalette(id) {
		this.props.history.push(`/palette/${id}`);
	}
	openDialog(id) {
		this.setState({ openDeleteDialog: true, deletingId: id });
	}
	closeDialog() {
		this.setState({ openDeleteDialog: false, deletingId: '' });
	}
	handleDelete() {
		this.props.deletePalette(this.state.deletingId);
		this.closeDialog();
	}
	render() {
		return (
			<div>
				<div className='Palette-list-container'>
					{this.props.palettes.map((palette) => (
						<MiniPalette
							key={palette.id}
							id={palette.id}
							imageURL={palette.imageURL}
							colors={palette.colors}
							openPalette={this.openPalette}
							openDialog={this.openDialog}
						/>
					))}
				</div>
				<Dialog
					open={this.state.openDeleteDialog}
					aria-labelledby='delete-dialog-title'
					onClose={this.closeDialog}
				>
					<h3 className='Delete-modal-title' id='delete-dialog-title'>
						Delete This Palette?
					</h3>
					<List style={{ backgroundColor: '#fff5ee', textAlign: 'center' }}>
						<button className='Delete-modal-button delete' onClick={this.handleDelete} color='primary'>
							Delete
						</button>
						<button className='Delete-modal-button' color='primary' onClick={this.closeDialog}>
							Cancel
						</button>
					</List>
				</Dialog>
			</div>
		);
	}
}

export default PaletteList;
