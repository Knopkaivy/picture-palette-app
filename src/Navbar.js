import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewPaletteModal from './NewPaletteModal';
// import Button from '@material-ui/core/Button';
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
				<NewPaletteModal
					open={this.state.isModalOpen}
					handleClose={this.handleModalClose}
					createNewPalette={this.props.generateNewPalette}
				/>
				<div className='Navbar-container'>
					<header className='Navbar'>
						<Link to='/' className='Logo'>
							Make A Palette
						</Link>
						<div className='Navbar-links-container'>
							<button className='Navbar-button' onClick={this.handleModalOpen}>
								Make
							</button>
							<Link to='/' className='Navbar-link'>
								See All
							</Link>
						</div>
					</header>
				</div>
			</div>
		);
	}
}

export default Navbar;
