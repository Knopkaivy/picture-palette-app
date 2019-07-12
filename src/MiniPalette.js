import React from 'react';

const MiniPalette = (props) => {
	return (
		<div className='Mini-Palette'>
			<picture>
				<img className='Mini-Palette-img' src={props.imageURL} alt='to generate palette from' />
			</picture>
			<div className='Mini-Palette-Colors-List'>
				{props.colors.map((color) => (
					<div
						className='Mini-Palette-Color-Box'
						key={color.shades[2].hex}
						style={{ backgroundColor: color.shades[2].hex }}
					/>
				))}
			</div>
		</div>
	);
};

export default MiniPalette;
