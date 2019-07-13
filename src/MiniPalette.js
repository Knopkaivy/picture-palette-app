import React, { PureComponent } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

class MiniPalette extends PureComponent {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.deletePalette = this.deletePalette.bind(this);
	}
	handleClick() {
		this.props.openPalette(this.props.id);
	}
	deletePalette(evt) {
		evt.stopPropagation();
		this.props.openDialog(this.props.id);
	}
	render() {
		return (
			<div className='Mini-Palette' onClick={this.handleClick}>
				<DeleteIcon
					className='deleteIcon'
					style={{ transition: 'all 0.3s ease-in-out' }}
					onClick={this.deletePalette}
				/>
				<picture>
					<img className='Mini-Palette-img' src={this.props.imageURL} alt='to generate palette from' />
				</picture>
				<div className='Mini-Palette-Colors-List'>
					{this.props.colors.map((color) => (
						<div
							className='Mini-Palette-Color-Box'
							key={color.shades[2].hex}
							style={{ backgroundColor: color.shades[2].hex }}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default MiniPalette;
