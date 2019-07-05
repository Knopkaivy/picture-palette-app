import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const NewPaletteModal = (props) => {
	return (
		<Dialog open={props.open} onClose={props.handleClose} aria-labelledby='form-dialog-title'>
			<DialogTitle id='form-dialog-title'>Create New Palette</DialogTitle>
			<DialogContent>
				<DialogContentText>
					To create new palette please enter image address in the field below.
				</DialogContentText>
				<TextField autoFocus margin='dense' id='imageURL' label='Image URL' type='text' fullWidth />
			</DialogContent>
			<DialogActions>
				<Button onClick={props.handleClose} color='primary'>
					Cancel
				</Button>
				<Button onClick={props.handleClose} color='primary'>
					Create
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default NewPaletteModal;
