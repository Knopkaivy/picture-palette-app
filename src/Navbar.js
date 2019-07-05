import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewPaletteModal from './NewPaletteModal';
import Button from '@material-ui/core/Button';
import './styles/Navbar.css';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false
		};
		this.handleModalOpen = this.handleModalOpen.bind(this);
		this.handleModalClose = this.handleModalClose.bind(this);
	}
	handleModalOpen() {
		this.setState({ isModalOpen: true });
	}
	handleModalClose() {
		this.setState({ isModalOpen: false });
	}
	render() {
		return (
			<div>
				<NewPaletteModal open={this.state.isModalOpen} handleClose={this.handleModalClose} />
				<header className='Navbar'>
					<Link to='/' className='Logo'>
						Logo
					</Link>
					<div className='Navbar-links-container'>
						<Button className='Navbar-link' onClick={this.handleModalOpen}>
							New
						</Button>
						<Link to='/' className='Navbar-link'>
							Home
						</Link>
					</div>
				</header>
			</div>
		);
	}
}

export default Navbar;
