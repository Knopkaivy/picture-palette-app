import React from 'react';

const PaletteImage = (props) => {
	return (
		<div className='Palette-image-container'>
			<picture>
				<img className='Palette-image' src={props.imageURL} alt='to generate palette from' />
			</picture>
		</div>
	);
};

export default PaletteImage;
