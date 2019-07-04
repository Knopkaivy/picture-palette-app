import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<header className='Navbar'>
				{/* <div className='Logo'>Logo</div> */}
				<Link to='/' className='Logo'>
					Logo
				</Link>
				<div className='Navbar-links-container'>
					<Link to='/new' className='Navbar-link'>
						New
					</Link>
					<Link to='/' className='Navbar-link'>
						Home
					</Link>
				</div>
			</header>
		);
	}
}

export default Navbar;
