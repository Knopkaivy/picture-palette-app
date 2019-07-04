import React from 'react';

const PaletteImage = (props) => {
	return (
		<div className='Palette-image-container'>
			<picture>
				<img className='Palette-image' src={props.imageUrl} alt={props.imageName} />
			</picture>
		</div>
	);
};

export default PaletteImage;
